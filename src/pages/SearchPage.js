import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link } from 'react-router-dom'
import './SearchPage.css'

import { fetchAll, fetchArtist } from '../store/actions/songActions';
import Card from '../components/Card';

export default function SearchPage () {
  const list = useSelector(state => state.song.songs)
  const [inputValue, setInputValue] = useState('')
  const [content, setContent] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAll())
  }, [dispatch])

  const changeHandler = (event) => {
    setInputValue(event.target.value)
  }

  const chosenArtistHandler = (id) => {
    dispatch(fetchArtist(id))
  }
  
  const enterHandler = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault()
      const filtered = list.filter(item => item.song.toLowerCase() === inputValue.toLowerCase())
      const content = filtered.map(item => {
        return (
          <Card key={item.song} item={item} onPress={(id) => chosenArtistHandler(id)}/>
        )
      })
      return setContent(content)
    }
  }






  return (
    <>
    <nav>
    <div className="nav-wrapper grey darken-2">
      <span className="brand-logo center">Search</span>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link to="/">Main Page</Link></li>
        <li><Link to="/search/">Search</Link></li>
      </ul>
    </div>
  </nav>
  <nav>
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" onChange={changeHandler} onKeyDown={enterHandler}></input>
          <label className="label-icon" ><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  <div className='result'>
    {content ? content : <div/>}
  </div>
    </>
  );
}

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


import Card from '../components/Card';
import { fetchAll, fetchArtist, } from '../store/actions/songActions';
import './MainPage.css'

export default function MainPage () {
  const dispatch = useDispatch()
  const topChart = useSelector(state => state.song.songs)

  const chosenArtistHandler = (id) => {
    dispatch(fetchArtist(id))
  }


  useEffect(() => {
    dispatch(fetchAll())
  }, [dispatch])

const contentMap = (arr) => {
  const items = arr.map(item => <Card key={item.song} item={item} onPress={(id) => chosenArtistHandler(id)}/>)
  return items
}


if (!topChart) {
  return '123'
} 

  return (
      <>
    <nav>
    <div className="nav-wrapper grey darken-2">
      <span className="brand-logo center">Top Chart</span>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link to="/">Main Page</Link></li>
        <li><Link to="/search/">Search</Link></li>
      </ul>
    </div>
  </nav>
  <div className='grey  blue-grey'>
  <div id='card-conteiner' className="red lighten-5">
    {contentMap(topChart)}
  </div>
  </div>
  </>
  );
}

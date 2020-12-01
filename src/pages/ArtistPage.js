import { useSelector } from 'react-redux';
import {Link } from 'react-router-dom'
import './ArtistPage.css'

export default function ArtistPage () {
  let chosenArtist = useSelector(state => state.song.artist)
  const {name, img, about, tags} = chosenArtist

  

  const addTags = (arr) => {
    const newArr = arr.map(item => {
      return (
        <div key={item.name} className="chip">           
            <a href={item.url}>{item.name}</a>
        </div>
      )
    })
    return newArr
  }




  return (
    <>
    <nav>
    <div className="nav-wrapper grey darken-2">
      <span className="brand-logo center">Artist Bio</span>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link to="/">Main Page</Link></li>
        <li><Link to="/search/">Search</Link></li>
      </ul>
    </div>
    <div className='qwerrtr'>
      <div className='top-block blue-grey'>
        <div className='tags'>
          <h1 className='label'>{name}</h1>
        </div>
        <img className='profile' alt='none' src={img}></img>
        <div className='bio'>
        {addTags(tags)}

        </div>
      </div>
      <div className='bottom-block'>
        <h1 className='info'>{about}</h1>
      </div>
  </div>
  </nav>
 
    </>
  );
}

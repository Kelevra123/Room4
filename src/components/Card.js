import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

export default function Card ({item, onPress}) {
const { name, song, artistUrl, img } = item


  return (
    <>
    <div className='qwer'>
    <div className="">
      <div className="card">
        <div className="card-image">
          <img 
            alt='Song' 
            src={img ? img : 'https://i.ytimg.com/vi/avtlkahy82s/maxresdefault.jpg'}
          >
          </img>
            <span 
                className="title" 
            >{song}</span>
          <a 
            className="btn-floating halfway-fab waves-effect waves-light red" 
            href={artistUrl}
          >
              <i className="fast_forward">bio</i>
          </a>
        </div>
        <div className="card-content">
        <Link to='/artist/' className='card-label' onClick={() => onPress(name)}>{name}</Link>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}


import React, { useState, useRef } from 'react';
import { MdDownload, MdImage } from 'react-icons/md';

import './Card.css';


const Card = ({md}) => {
  const [mouseCoords, setMouseCoords] = useState({x:0, y:0});
  const cardRef = useRef(null);

  const cardData = {};
  const truncateText = (text) => {
    return ;
  }

  const spotifyData = (md) => {
    if (!md || !md.type) {
      cardData.error = 'Invalid or missing data!';
      return;
    }
  
    cardData.type = md.type;
  
    switch (md.type) {
      case 'track':
        cardData.id = md.id;
        cardData.href = md.href;
        cardData.url = md.external_urls.spotify;
  
        if (md.album.images && md.album.images.length > 0) {
          cardData.image = md.album.images[0].url ? md.album.images[0].url : '';
          cardData.imageWidth = md.album.images[0].width ? md.album.images[0].width : 640;
          cardData.imageHeight = md.album.images[0].height ? md.album.images[0].height : 640;
          cardData.imageAlt = 'Track Image Cover';
        }

        cardData.header_1 = md.name;
        cardData.header_2 = md.artists && md.artists.length > 0 ? md.artists.map((ar) => ar.name).join(', ') : 'Unknown Artist';
        cardData.explicit = md.explicit ? md.explicit : false;
        cardData.slot_1 = md.duration_ms ? new Date(md.duration_ms).toISOString().slice(15, 19) : '';
        cardData.slot_2 = md.album.release_date ? md.album.release_date.split('-')[0] : '';
        cardData.slot_3 = md.album ? (new DOMParser().parseFromString(md.album.name, 'text/html')).body.textContent : 'Unknown Album';
        break;

      case 'album':
        cardData.id = md.id;
        cardData.href = md.href;
        cardData.url = md.external_urls.spotify;
  
        if (md.images && md.images.length > 0) {
          cardData.image = md.images[0].url ? md.images[0].url : '';
          cardData.imageWidth = md.images[0].width ? md.images[0].width : 640;
          cardData.imageHeight = md.images[0].height ? md.images[0].height : 640;
          cardData.imageAlt = 'Album Image Cover';
        }

        cardData.type = md.album_type;
        cardData.header_1 = md.name;
        cardData.header_2 = md.artists && md.artists.length > 0 ? md.artists.map((ar) => ar.name).join(', ') : 'Unknown Artist';
        cardData.explicit = false;
        cardData.slot_1 = md.tracks && md.tracks.total ? md.tracks.total + ` track${md.tracks.total > 1 ? 's' : ''}` : 'No tracks';
        cardData.slot_2 = md.release_date ? md.release_date.split('-')[0] : '';
        cardData.slot_3 = (new DOMParser().parseFromString(md.label, 'text/html')).body.textContent || 'Unknown Label';
        break;

      case 'playlist':
        cardData.id = md.id;
        cardData.href = md.href;
        cardData.url = md.external_urls.spotify;
  
        if (md.images && md.images.length > 0) {
          cardData.image = md.images[0].url ? md.images[0].url : '';
          cardData.imageWidth = md.images[0].width ? md.images[0].width : 640;
          cardData.imageHeight = md.images[0].height ? md.images[0].height : 640;
          cardData.imageAlt = 'Playlist Image Cover';
        }
  
        cardData.header_1 = md.name;
        cardData.header_2 = md.owner && md.owner.display_name ? md.owner.display_name : 'Unknown Owner';
        cardData.explicit = false;
        cardData.slot_1 = md.tracks && md.tracks.total ? md.tracks.total + ` track${md.tracks.total > 1 ? 's' : ''}` : 'No tracks';
        cardData.slot_2 = md.followers && md.followers.total ? md.followers.total.toLocaleString('en-US') + ` like${md.followers.total > 1 ? 's' : ''}` : 'No likes';
        cardData.slot_3 = md.description || 'No description';
        cardData.slot_3 = (new DOMParser().parseFromString(md.description, 'text/html')).body.textContent || 'No description';
        break;
  
      case 'artist':
        cardData.id = md.id;
        cardData.href = md.href;
        cardData.url = md.external_urls.spotify;
  
        if (md.images && md.images.length > 0)
        {
          cardData.image = md.images[0].url ? md.images[0].url : '';
          cardData.imageWidth = md.images[0].width ? md.images[0].width : 640;
          cardData.imageHeight = md.images[0].height ? md.images[0].height : 640;
          cardData.imageAlt = 'Artist Image Cover';
        }
        else
        {
          cardData.image = '';
          cardData.imageWidth = 640;
          cardData.imageHeight = 640;
          cardData.imageAlt = 'Artist Image Cover';
        }
  
        cardData.header_1 = md.name;
        cardData.header_2 = 'Verified Artist';
        cardData.explicit = false;
        cardData.slot_1 = md.followers && md.followers.total ? md.followers.total.toLocaleString('en-US') + ` monthly listener${md.followers.total > 1 ? 's' : ''}` : 'No likes';
        cardData.slot_2 = md.genres && md.genres.length > 0 ? md.genres.map((gr) => gr).join(', ') : 'Unknown Genre'
        cardData.slot_3 = '';
        break;
  
      default:
        cardData.error = 'Unknown data type!';
    }
  };

  spotifyData(md);

  const handleMouseCoords = (event) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setMouseCoords({x, y});
  }

  return (
    <>
      <div className='card'
           id='card'
           ref={cardRef}
           onMouseMove={(e) => handleMouseCoords(e)}
           style={{
            '--mouse-x': `${mouseCoords.x}px`,
            '--mouse-y': `${mouseCoords.y}px`,
           }}
      >
        <div className='card-hover'>
          <div className='card-data-container'>
            <div className={`card-image-container ${cardData.type === 'artist' ? 'artist-img' : ''}`}
                 style={{
                  '--card-color': '#B840D0',
                 }}
            >
              {
                cardData.image === '' ? 
                  <MdImage className={`card-image ${cardData.type === 'artist' ? 'artist-img' : ''}`} width='150em' height='150em' /> :
                  <img className={`card-image ${cardData.type === 'artist' ? 'artist-img' : ''}`}
                       loading='lazy'
                       src={cardData.image}
                       alt={cardData.imageAlt}
                  />
              }
            </div>
            <div className='card-data'>
              <span className='card-type'>
                {cardData.type}
              </span>

              <span className='card-title truncate-text'>
                {cardData.header_1}
              </span>

              <span className='card-explicit-artist'>
                {
                  cardData.explicit && 
                  <span className='card-explicit'
                        title='Explicit'
                  >
                    E
                  </span>
                }
                <span className='card-artist truncate-text'>
                  {cardData.header_2}
                </span>
              </span>

              <span className='card-data-slot slot-1 truncate-text'>
                {cardData.slot_1}
              </span>
              <span className='card-data-slot slot-2 truncate-text'>
                {cardData.slot_2}
              </span>
              <span className='card-data-slot slot-3 truncate-text'>
                {cardData.slot_3}
              </span>
            </div>

            <div className='card-buttons'>
              <button className='card-button download'>
                <span className='card-button-span'>
                  <MdDownload className='card-button-icon' />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Card;
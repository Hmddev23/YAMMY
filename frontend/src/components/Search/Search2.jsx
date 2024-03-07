
import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';

import SearchLoader from './SearchLoader';
import SearchAlert from './SearchAlert';
import Card from '../Card/Card';
import useConnect from '../../hooks/useConnect';
import './Search.css';


const Search2 = () => {
  const [search, setSearch] = useState('');
  const [metadata, setMetadata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    msg: '',
    type: '',
    show: false
  });
  const accessToken = useConnect(setAlert);
  
  // Handle Search Input
  const handleSearch = async () => {
    if (!search)
    {
      setAlert({ msg: 'Please enter a search query.', type: 'warning', show: true });
      setMetadata([]);
      return;
    }

    console.log('this is the search value: ', search);
  
    const searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }

    setLoading(true);

    if (search.includes('https://open.spotify.com/'))
    {
      // Handle spotify link
      return;
    }
    else
    {
      try
      {
        const queryData = await fetch(
          'https://api.spotify.com/v1/search?q=' + search + '&type=album,artist,playlist,track',
          searchParameters
        );
        if (queryData.ok)
        {
          const data = await queryData.json();
    
          if (data &&
              (data.albums.items.length > 0 ||
              data.artists.items.length > 0 ||
              data.playlists.items.length > 0 ||
              data.tracks.items.length > 0))
          {
            setLoading(false);
            setAlert({ msg: 'Found some music for you!', type: 'success', show: true });
            setSearch('');
            console.log('data is full: ', data);

            // Update the logic to handle the search results as needed
            if (data.hasOwnProperty('id'))
            {
              setMetadata([data])
            }
            else
            {
              setMetadata([
                ...data.albums.items,
                ...data.tracks.items,
                ...data.artists.items,
                ...data.playlists.items
              ]);
            }
            return data;
          }
          else
          {
            setLoading(false);
            setAlert({ msg: 'No results found. Check your spelling.', type: 'info', show: true });
            return;
          }
        }
        else
        {
          throw new Error('Failed to fetch data from Spotify API');
        }
      }
      catch (err)
      {
        setLoading(false);
        let errorMessage = '';
        if (err instanceof TypeError) {
          errorMessage = 'Oops! Network error occurred. Please check your internet connection.';
        } else {
          errorMessage = 'Oops! Error occurred while fetching data. Please try again later.';
        }
        setAlert({ msg: errorMessage, type: 'error', show: true });
        console.error(err);
        throw new Error('Oops! Error occurred while fetching data: ' + err.message);
      }
    }
  }

  // reset the Alert to default state
  useEffect( () => {
    const resetAlert = setTimeout(() => {
      setAlert({ msg: '', type: '', show: false });
    }, 5000);

    return () => {
      clearTimeout(resetAlert);
    };
  }, [alert]);

  return (
    <div className='search'
         id='search'
    >
      <h2>
        Input Link or Keyword
      </h2>

      <div className='search-row'>
        <div className='search-input-cont'>
          <input className='search-input'
                 id='search-input'
                 type='text'
                 placeholder='e.g. https://open.spotify.com/track/....'
                 value={search}
                 onKeyPress={ (e) => {
                  if(e.key == 'Enter')
                  {
                    handleSearch();
                    // setSearch('');
                    e.target.blur();
                  }
                 }}
                onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className='search-separator'></div>
        
        <button className='search-button'
                id='search-button'
                type='button'
                onClick={handleSearch}
        >
          <BiSearch className='search-icon' />
          Search
        </button>
      </div>

      <div className={`search-alert ${alert.show ? 'show' : ''} ${alert.type}`}>
        {
          alert.show && <SearchAlert message={alert.msg} type={alert.type} />
        }
      </div>

      <div className='search-loader'>
        {
          loading && <SearchLoader />
        }
      </div>
      
      <div className='search-cards'
           style={{gridTemplateColumns: metadata.length === 1 ? '1fr' : metadata.length === 2 ? 'repeat(2, 1fr)' : ''}}
      >
        {
          metadata && metadata.map((md, i) => {
            return (
              <Card key={i}
                    md={md}
              />
            );
          })
        }
      </div>
    </div>
  );
}


export default Search2;
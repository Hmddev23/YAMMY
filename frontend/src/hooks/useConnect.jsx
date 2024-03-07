
import React, { useState, useEffect } from 'react';


// get API access Token
const useConnect = (setAlert) => {
  const [accessToken, setAccessToken] = useState('');

  useEffect( () => {
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id='
            + import.meta.env.VITE_CLIENT_ID
            + '&client_secret='
            + import.meta.env.VITE_CLIENT_SECRET,
    };

    const Connect = async () => {
      try
      {
        const response = await fetch(
          'https://accounts.spotify.com/api/token',
          authParameters
        );

        if (response.ok)
        {
          const data = await response.json();
          setAccessToken(data.access_token);
          // console.log('access token: ', data.access_token);
        }
        else
        {
          const errorData = await response.json();
          throw new Error(`Failed to obtain access token: ${errorData.error_description}`);
        }
      }
      catch (err)
      {
        setAccessToken('');
        const errorMessage = `Oops! An error occurred while connecting to the Spotify API: ${err.message}`;
        setAlert({
          msg: 'OPPS! API CONNECTION ERROR',
          type: 'error',
          show: true
        });

        console.error(err);
        throw new Error(errorMessage);
      }
    }

    Connect();
  }, []);

  return accessToken;
}


export default useConnect;
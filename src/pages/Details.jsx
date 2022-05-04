import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Details()  {
  const [state, setState] = useState({loading: true,})
  const params = useParams();

  useEffect(function(){
    const characterId = params.id;
    fetch(`https://gateway.marvel.com:443/v1/public/characters/${characterId}?ts=0faE4&apikey=5538f0b6e1c38cc40dc93eaa8d1c5bd6&hash=643de5ac439f46275d14b14e07141625`)
    .then((data) => data.json())
    .then((res) => {
      setState({ loading: false, data: res.data.results });
    });
  }, [])
  
  
  return (
    <div className="app-container">
      <h1 className="app-title text-center">Marvel characters!</h1>
      {
        state.loading
        ?<h3 className='text-center'>Loading..</h3>
        :<div>
          <h2>General Details</h2>
          <div className='d-flex'>
            <div className='col'>
              <img src={state.data[0].thumbnail.path+".jpg"} alt={state.data[0].name+" image"} />
            </div>
            <div className='col details'>
              <h3 className='details-title'>Character name: {state.data[0].name}</h3>
              <h5 className='details-title__subtitle'>Last time modified: {state.data[0].modified}</h5>
              
              <p className='details-info'>
                {
                  state.data[0].description !== ""
                  ? state.data[0].description
                  : "There is no details yet"
                }
              </p>
            </div>
          </div>
        </div>
      }
    </div>
  )
  
}
 
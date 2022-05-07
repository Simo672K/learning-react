import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "../assets/css/details.css"
import AppContext from '../context/context';

export default function Details()  {
  const context  = useContext(AppContext);
  const [character, setCharacter] = useState({loading: true});
  const params = useParams();

  useEffect(function(){
    if(!context.loading){
      const {loading, data} = context;
      data.filter(obj=>{
        if(obj.id === parseInt(params.id)){
          setCharacter(prev=> {return { loading ,data:obj}});
        }
      })
    }
  }, [context])

  return (
    <div className='details'> 
      {
        character.loading
        ?<h4>Please wait...</h4>
        :
        <div className='d-flex details-card'>
          <div className='col'>
            <img src={character.data.thumbnail.path+".jpg"} alt={character.data.name+" image"} />
          </div>
          <div className='col'>
            <h2 className='details-heading'>General Details</h2>
            <h3 className='details-title'>Character name: {character.data.name}</h3>
            <h5 className='details-title__sub'>Last time modified: {character.data.modified}</h5>
            
            <p className='details-info'>
              {
                character.data.description !== ""
                ? character.data.description
                : "There is no details yet"
              }
            </p>
          </div>
        </div>
      }    
    </div>
  )
  
}
 
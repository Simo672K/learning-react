import React, { useEffect, useContext, useState } from 'react'
import AppContext from '../context/context';
import Card from "./Card";

export default function CardsList() {
  const context  = useContext(AppContext);
  const [characters, setCharacters] = useState({loading: true});

   useEffect(function(){
    if(!context.loading){
      const {loading, data} = context;
      setCharacters(prev=> {
        return { loading, data }
      })
    }
  }, [context])

  return (
    <div className="cards-grid">     
      {
        characters.loading 
        ?
        <h3 style={{textAlign: "center", marginTop: "1.2rem"}}>please wait while loading..</h3>
        :
        characters.data.map(obj=><Card key={obj.id} data={obj}/>)
      }
    </div>
  )

}

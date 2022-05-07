import React from 'react'
import Card from "./Card";

export default function CardsList({characters}) {

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

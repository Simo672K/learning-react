import React from 'react'
import Card from "./Card";

export default function CardsList({characters}) {

  return (
    <div className="cards-grid">     
      {
        characters.data.map(obj=><Card key={obj.id} data={obj}/>)
      }
    </div>
  )

}

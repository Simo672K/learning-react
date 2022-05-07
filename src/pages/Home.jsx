import React, { useContext, useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import CardsList from "../components/CardsList";
import AppContext from "../context/context";

function HomePage () {
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
    <>
      <CardsList characters={characters} />
      <Pagination/>
    </>
  );
}

export default HomePage;

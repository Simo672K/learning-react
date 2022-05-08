import { useState } from "react";
import "../assets/css/pagination.css"

function Pagination({pages, setPages}) {
  
  const setActiveLink = (id) =>{
    setPages(prev=> {
      const { pageNum } = prev;
      return { pageNum, active: id }
    })
  }

  return (
    <nav className="pagination">
      <ul className="pagination-nav">
        <li className="pagination-item">
          <button className="pagination-link pagination-arrow arrow-left"></button>
        </li>
        {
          [...Array(pages.pageNum).keys()].map(num =>
            <li key={num+1} className="pagination-item">
              <button onClick={e =>setActiveLink(num+1)} className={`pagination-link ${ num+1 === pages.active? "active": ""}`}>
                {num+1}
              </button>
            </li>
          )
        }
        <li className="pagination-item">
          <button className="pagination-link pagination-arrow arrow-right"></button>
        </li>
      </ul>
    </nav>
  )
}
export default Pagination
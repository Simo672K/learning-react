import {useState, useEffect} from "react"
import "../assets/css/pagination.css"

function Pagination() {
  const [pageState, setPageState] = useState({num: 5, active: 1})
  const [pagesNumber, setPagesNumber] = useState([...Array(4).keys()]);

  useEffect(function(){
    setPagesNumber([...Array(pageState.num).keys()])
  }, [pageState])

  const setActiveLink = (id) =>{
    setPageState(prev=> {
      const {num} = prev;
      return {num, active: id}
    })
  }

  return (
    <nav className="pagination">
      <ul className="pagination-nav">
        <li className="pagination-item">
          <button className="pagination-link pagination-arrow arrow-left"></button>
        </li>
        {
          pagesNumber.map(pageNum =>
            <li key={pageNum+1} className="pagination-item">
              <button onClick={e =>setActiveLink(pageNum+1)} className={`pagination-link ${ pageNum+1 === pageState.active? "active": ""}`}>{pageNum+1}</button>
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
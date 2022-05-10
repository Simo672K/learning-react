import { Link } from "react-router-dom";
import "../assets/css/breadcrumb.css";

function BreadCrumb({ active }) {
  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb-nav">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">{active}</li>
      </ul>
    </nav>
  );
}
export default BreadCrumb;

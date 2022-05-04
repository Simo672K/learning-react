import { Link } from "react-router-dom"

function Button({children, href}) {
  return (
    <Link to={href} className="btn card-btn">{children}</Link>
  )
}
export default Button
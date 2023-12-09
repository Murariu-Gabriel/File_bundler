import { Link } from "react-router-dom"

const NotLoggedInNav = () => {
  return (
    <ul>
      <li className="nav_link">
        <Link to="/RegistrationAndLogin">log in</Link>
      </li>
      <li className="nav_link">
        <Link to="/RegistrationAndLogin" state="register">
          join us
        </Link>
      </li>
    </ul>
  )
}
export default NotLoggedInNav

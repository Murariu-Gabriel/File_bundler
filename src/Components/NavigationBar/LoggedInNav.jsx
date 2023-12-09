import { Link } from "react-router-dom"

const LoggedInNav = () => {
  return (
    <ul>
      <li className="nav_link">
        <Link to="/RegistrationAndLogin">hall of fame</Link>
      </li>

      <li className="user nav_link">user profile</li>
    </ul>
  )
}
export default LoggedInNav

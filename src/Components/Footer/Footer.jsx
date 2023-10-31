import { Link } from "react-router-dom"


import "./footer.scss"

const Footer = () => {
  return (
    // will need to have a trademark from valve
    // changelog and credits

    <section className="footer">
      <div className="container">
      Footer(LOGO)
      <nav>
        <ul>
          <li>
            <Link className="link">ChangeLog</Link>
          </li>
          <li>
            <Link className="link">Credits</Link>
          </li>
        </ul>
      </nav>
      </div>
    </section>
  )
}
export default Footer
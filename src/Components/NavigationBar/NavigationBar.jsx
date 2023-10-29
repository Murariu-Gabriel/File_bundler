

import { Link } from "react-router-dom"
import "./navigationBar.scss"

const NavigationBar = () => {

    // will need an user bubble with the image of the user 

    // DECISION: either make the bubble on click trigger a pop-up or make a hover type effect that lets you select some user options

    // will need to have login or register if the user is not logged in. 

    // If the user is logged in you should display Hello and the name.

    // on phone you might need a hamburger menu

  return (
    <section className="navigation_bar">
      NavigationBar
      {/* we should have a logo here */}

      {/* The links here direct to the same page which is not a problem at first
        - you need to figure out a way to direct the user to the register when he clicks 

        First interpretation

        - maybe I can pass something to link and based on it make the register page load the form accordingly 
        - you may need to go back to the react router tutorial and take a look around

      */}
      <nav>
        <ul>
          <li>
            <Link to="/RegistrationAndLogin" className="link">
              log in
            </Link>
          </li>
          <li>
            <Link to="/RegistrationAndLogin" className="link">
              join us
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}
export default NavigationBar
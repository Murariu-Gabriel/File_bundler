

import { useState } from "react"
import { Link } from "react-router-dom"
import "./navigationBar.scss"

const NavigationBar = ({ isUserLogged }) => {
  const [toggleHamburger, setToggleHamburger] = useState(false)

  // will need an user bubble with the image of the user

  // DECISION: either make the bubble on click trigger a pop-up or make a hover type effect that lets you select some user options

  // will need to have login or register if the user is not logged in.

  // If the user is logged in you should display Hello and the name.

  // on phone you might need a hamburger menu

  return (
    <section className="navigation_bar">
      <div className="container">
        <div
          className={`hamburger ${toggleHamburger ? "open" : ""}`}
          onClick={() => setToggleHamburger(!toggleHamburger)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        NavigationBar
        {/* we should have a logo here */}
        {/* The links here direct to the same page which is not a problem at first
          - you need to figure out a way to direct the user to the register when he clicks 

          First interpretation

          - maybe I can pass something to link and based on it make the register page load the form accordingly 
          - you may need to go back to the react router tutorial and take a look around

        */}
        <nav className={`${toggleHamburger ? "toggleNav" : ""}`}>
          {/* If user is logged in show user icon
            on phone nav show the options for user
            on higher viewport make a hover nav effect when hovering user icon

            basically a small menu for user settings

          */}

          {isUserLogged ? (
            <ul>
              <li className="nav_link">
                <Link to="/RegistrationAndLogin">hall of fame</Link>
              </li>

              <li className="user nav_link">user profile</li>
            </ul>
          ) : (
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
          )}
        </nav>
      </div>
    </section>
  )
}
export default NavigationBar
import { useEffect, useState, useRef } from "react"

import Nav from "./Nav"

import LoggedInNav from "./LoggedInNav"
import NotLoggedInNav from "./NotLoggedInNav"

import "./navigationBar.scss"


const NavigationBar = ({ isUserLogged }) => {
  const [toggleHamburger, setToggleHamburger] = useState(false)

  // will need an user bubble with the image of the user

  // DECISION: either make the bubble on click trigger a pop-up or make a hover type effect that lets you select some user options

  // If the user is logged in you should display Hello and the name.




  const hamburgerRef = useRef(null)
  

  const handleNavToggle = () => {
    document.body.classList.toggle("stop_scrolling")
    setToggleHamburger(!toggleHamburger)
  }


  return (
    <section className="navigation_bar">
      <div className="container">
        <div
          className={`hamburger ${toggleHamburger ? "open" : ""}`}
          onClick={handleNavToggle}
          ref={hamburgerRef}
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
        <Nav {...{ toggleHamburger, isUserLogged, handleNavToggle, hamburgerRef }} />
      </div>
    </section>
  )
}
export default NavigationBar

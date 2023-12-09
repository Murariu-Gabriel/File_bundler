import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import LoggedInNav from "./LoggedInNav"
import "./navigationBar.scss"
import NotLoggedInNav from "./NotLoggedInNav"

const NavigationBar = ({ isUserLogged }) => {
  const [toggleHamburger, setToggleHamburger] = useState(false)

  // will need an user bubble with the image of the user

  // DECISION: either make the bubble on click trigger a pop-up or make a hover type effect that lets you select some user options

  // If the user is logged in you should display Hello and the name.

  // this ref is used so I can detect when the click is not on the nav

  const navRef = useRef(null)

  const toggleScroll = () => {
    document.body.classList.toggle("stop_scrolling")
  }

  const handleNavToggle = () => {
    toggleScroll()
    setToggleHamburger(!toggleHamburger)
  }

  // the idea here is

  // if the  nav is toggled and there is ref then check to see if the click was on the ref

  // if it was not of the ref toggle of the nav

  // you are going to probably need to put the nav into a component and all the logic inside of it

  const handleOutsideClickToggle = (isToggled, ref) => {
    const handleOutsideClick = (event) => {
      console.log(event.target)
      if (isToggled && !ref.current.contains(event.target)) {
        document.removeEventListener("click", handleOutsideClick)
        document.body.classList.remove("stop-scrolling")
        console.log("yes")
      }
      console.log("nu")
    }

    if (isToggled) {
      document.addEventListener("click", handleOutsideClick)
    } else {
      document.removeEventListener("click", handleOutsideClick)
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }

    // document.removeEventListener("click", handleOutsideClick)
    // document.removeEventListener("keydown", handleKeyPress)
    // document.body.classList.remove("stop-scroll")
  }

  // the idea here was that every time the nav is toggled this would run giving it a event listener that would delete itself when clicked out but I don t think it works becaus it s not inside the component that is triggered when nav hanburgir is clicked
  useEffect(() => {
    handleOutsideClickToggle(toggleHamburger, navRef)
    console.log("da")
  }, [])

  return (
    <section className="navigation_bar">
      <div className="container">
        <div
          className={`hamburger ${toggleHamburger ? "open" : ""}`}
          onClick={handleNavToggle}
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
        <nav ref={navRef} className={`${toggleHamburger ? "toggleNav" : ""}`}>
          {/* If user is logged in show user icon
            on phone nav show the options for user
            on higher viewport make a hover nav effect when hovering user icon

            basically a small menu for user settings

          */}

          {isUserLogged ? <LoggedInNav /> : <NotLoggedInNav />}
        </nav>
      </div>
    </section>
  )
}
export default NavigationBar

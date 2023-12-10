import { useEffect, useRef } from "react"

import LoggedInNav from "./LoggedInNav"
import NotLoggedInNav from "./NotLoggedInNav"

const Nav = ({ toggleHamburger, isUserLogged, handleNavToggle, hamburgerRef }) => {
  // this ref is used so I can detect when the click is not on the nav
  const navRef = useRef(null)


  // Might need to take in account when the screen gets bigger and cancel this function by just closing everything, long story short like clicking outside of the nav which closes the nav

  const handleOutsideClickToggle = (isToggled, ref) => {
    setTimeout(() => {
      const handleOutsideClick = (event) => {
        if (isToggled && !hamburgerRef.current.contains(event.target) && !ref.current.contains(event.target)) {
          document.removeEventListener("click", handleOutsideClick)
          
          handleNavToggle()
        }
      }

      if (isToggled) {
        document.addEventListener("click", handleOutsideClick)
      } else {
        document.removeEventListener("click", handleOutsideClick)
      }

      return () => {
        document.removeEventListener("click", handleOutsideClick)
      }
    }, 1000)
  }

  useEffect(() => {
    if (toggleHamburger) {
      handleOutsideClickToggle(toggleHamburger, navRef)

    }
  }, [toggleHamburger])

  return (
    <nav ref={navRef} className={`${toggleHamburger ? "toggleNav" : ""}`}>
      {/* If user is logged in show user icon
            on phone nav show the options for user
            on higher viewport make a hover nav effect when hovering user icon

            basically a small menu for user settings

          */}

      {isUserLogged ? <LoggedInNav /> : <NotLoggedInNav />}
    </nav>
  )
}
export default Nav

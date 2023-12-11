import { useEffect, useRef } from "react"

import LoggedInNav from "./LoggedInNav"
import NotLoggedInNav from "./NotLoggedInNav"

const Nav = ({ toggleHamburger, isUserLogged, handleNavToggle, hamburgerRef }) => {
  // this ref is used so I can detect when the click is not on the nav
  const navRef = useRef(null)



  const handleNavFunctionalityToggle = (isToggled, ref) => {
      
    setTimeout(() => {

        // take are when x for nav is pressed this functionality is still alive until click    
    
        const handleOutsideClick = (event) => {
            if (isToggled && !hamburgerRef.current.contains(event.target) && !ref.current.contains(event.target)) {
                
            document.removeEventListener("click", handleOutsideClick)
            window.removeEventListener("resize", handleViewportChanges)
            handleNavToggle()
            
            }
        }

        const handleViewportChanges = (event) => {
            const viewportWidth = window.innerWidth
            
            if(viewportWidth >= 550) {
                document.removeEventListener("click", handleOutsideClick)
                window.removeEventListener("resize", handleViewportChanges)

                handleNavToggle()
            }
            console.log(viewportWidth)
            

        }


        if (isToggled) {
            document.addEventListener("click", handleOutsideClick)
            window.addEventListener("resize", handleViewportChanges)
        } else {
            document.removeEventListener("click", handleOutsideClick)
            window.removeEventListener("resize", handleViewportChanges)

        }

        return () => {
             document.removeEventListener("click", handleOutsideClick)
             window.removeEventListener("resize", handleViewportChanges)
        }
    }, 500)
  }

  useEffect(() => {
    if (toggleHamburger) {
      handleNavFunctionalityToggle(toggleHamburger, navRef)

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

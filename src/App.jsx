import { useState } from "react"
import { Link, Route, Routes, useLocation } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Navigation from "./Components/NavigationBar/NavigationBar"
import {Dashboard, HallOfFame, RegistrationAndLogin, NotFound, ChangeLog} from "./Pages"
import ForgotPassword from "./Pages/Registration/ForgotPassword/ForgotPassword"

import "./SCSS/global.scss"


const App = () => {
  // here we control multiple functionality that goes into dashboard and nav
  const [isUserLogged, setIsUserLogged] = useState(true)

  const location = useLocation()
  const isLocationRegistration =
    location.pathname === "/RegistrationAndLogin" ||
    location.pathname === "/forgotPassword"




  /*
  
  * Things to work at in general

    1. Forgot password still needs work

    2. User bubble needs dropdown menu

    3. styling has be finished
  
  */



  // you need to decide an background color

  // a text color

  // and an accent color



  //STYLES

  //- Container needs global class probably because it is used in footer and nav already with the same styles but doesn't have the same in registration


  // NAV 

  // it doesn t go to the bottom, it should

  return (
    <>
      {/* NAV */}
      {!isLocationRegistration && <Navigation isUserLogged={isUserLogged} />}

      <Routes>
        <Route path="/" element={<Dashboard isUserLogged={isUserLogged} />} />
        <Route path="/FameHall" element={<HallOfFame />} />
        <Route
          path="/RegistrationAndLogin"
          element={<RegistrationAndLogin />}
        />
        <Route path="/changeLog" element={<ChangeLog />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* FOOTER */}
      {!isLocationRegistration && <Footer />}
    </>
  )
}

export default App

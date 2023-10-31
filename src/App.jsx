import { Link, Route, Routes, useLocation } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Navigation from "./Components/NavigationBar/NavigationBar"
import {Dashboard, HallOfFame, RegistrationAndLogin, NotFound, ChangeLog} from "./Pages"

import "./SCSS/global.scss"


const App = () => {
  const location = useLocation()
  const isLocationRegistration = location.pathname === "/RegistrationAndLogin"




  // The App should be responsive to all devices

  // remember that you want the footer andd nav to show when all pages are accessed



  // you need to document yourself of how to write your css when yu work in react because last react project has a lot of css code that was overwritten multiple times without use


  // you need to decide an background color

  // a text color

  // and an accent color

  //STYLES

  //- Container needs global class probably because it is used in footer and nav already with the same styles but doesn't have the same in registration


  return (
    <>
      {/* NAV */}
      {!isLocationRegistration && <Navigation />}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/FameHall" element={<HallOfFame />} />
        <Route
          path="/RegistrationAndLogin"
          element={<RegistrationAndLogin />}
        />
        <Route path="/changeLog" element={<ChangeLog/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {/* FOOTER */}
      {!isLocationRegistration && <Footer />}
    </>

    // <div>
    //   <h1>hello</h1>
    // </div>
  )
}

export default App

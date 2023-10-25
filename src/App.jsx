import { Link, Route, Routes } from "react-router-dom"
import {Dashboard, HallOfFame, RegistrationAndLogin, NotFound} from "./Pages"


const App = () => {

  // The App should be responsive to all devices

  // remember that you want the footer andd nav to show when all pages are accessed



  // you need to document yourself of how to write your css when yu work in react because last react project has a lot of css code that was overwritten multiple times without use



  return (
    <>
    
    {/* Here we will have the nav */}

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/FameHall" element={<HallOfFame />} />
      <Route path="/RegistrationAndLogin" element={<RegistrationAndLogin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    {/* Here we will have the footer */}
    </>

    // <div>
    //   <h1>hello</h1>
    // </div>
  )
}

export default App

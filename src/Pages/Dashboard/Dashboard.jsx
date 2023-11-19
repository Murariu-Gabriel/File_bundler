import { useState } from "react"
import LoggedUser from "./Functionality/LoggedUser"
import UserNotLoggedIn from "./UserNotLoggedIn"

import "./dashboard.scss"

const Dashboard = () => {
  const [currentBackground, setCurrentBackground] = useState("")
  
  return (

  

    // QUESTION : how do I make the app recognize the login of the user?

    // is there any other way than just making a local storage variable that can be altered?

    // OPTIONAL

    // after upload button is clicked with some back and forth with the API there should be a sort of log that shows the files loading as a loading screen

    // FOR BACKGROUND

    /*
     - download and cut some videos that will be set as background

    */

     

    <section className="dashboard">
      <div className="container"
      //  style={{background: "#f2f2"}}
       >
        {/* if user not logged in */}

        {/* <UserNotLoggedIn /> */}


        {/* if user logged in */}
        <LoggedUser />

        {/*


        
          1.Main container
          
            1.1 Will need to have two faces
              1.1.1 one for user not logged in
              1.1.2 one for logged in user 

            1.2 not logged in interface
              1.2.0 Write a big ERROR sign with red just like in source games
              1.2.1 will have the message: You must be logged in before uploading your own custom files
              1.2.2 will need to be either toggled on on top as a layer(You need to implement security to this one, it can be toggled off)  


        */}
      </div>
    </section>
  )
}
export default Dashboard
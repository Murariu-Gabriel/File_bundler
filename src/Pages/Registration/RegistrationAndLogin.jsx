import { useState } from "react"

import Login from "./Login/Login"
import SignUp from "./SignUp/SignUp"

// import loginStyle from "./registration.module.scss"

import "./registration.scss"


const RegistrationAndLogin = () => {
  const [loginOrSignUp, setLoginOrSignUp] = useState(true)
  const [animationToggle, setAnimationToggle] = useState(true)



  const toggleSetLoginOrSignUp = () => {
    setAnimationToggle(!animationToggle)
    
    setTimeout(() => {
      setLoginOrSignUp(!loginOrSignUp)
    }, 500)

  }

  //          PLAN

  //    Login

  // - will be made to check user on click and let backend do the job

 
  //    Register

  // you need to decide what inputs you will have
  // for now it will be full name | email | password | repeat password
  
  // ? question: will some of the validation be made on frontend? It seems tedious for the user to not have some directors 


  // All the password requirements will need to be listed somewhere so the user knows how to write it


// NOTE, You will still need to implement validation

  return (
    <section className="registration">
 
      <div
        className={`container ${loginOrSignUp ? "" : "transition_height"}`}
      >
        <div className={`transition_div ${animationToggle ? "initial" : "active"} `}></div>

        {loginOrSignUp ? (
          <Login switchComponent={toggleSetLoginOrSignUp} />
        ) : (
          <SignUp switchComponent={toggleSetLoginOrSignUp} />
        )}
      </div>
    </section>
  )
}
export default RegistrationAndLogin
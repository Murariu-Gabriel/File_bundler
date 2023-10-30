import { useState } from "react"

import Login from "./Login/Login"
import SignUp from "./SignUp/SignUp"

// import loginStyle from "./registration.module.scss"

import "./registration.scss"
import TransitionContainer from "./TransitionContainer"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"


const RegistrationAndLogin = () => {
  const [loginOrSignUp, setLoginOrSignUp] = useState(true)
  const [animationToggle, setAnimationToggle] = useState(true)
  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  const location = useLocation()

  const toggleSetLoginOrSignUp = () => {
    setAnimationToggle(!animationToggle)
    
    setTimeout(() => {
      setLoginOrSignUp(!loginOrSignUp)
    }, 500)

  }

  const closeSuccessTransition = () => {
    setAnimationToggle(!animationToggle)
    setLoginOrSignUp(!loginOrSignUp)
    toggleRegistrationSuccess()
  }

  const toggleRegistrationSuccess = () => {
    setRegistrationSuccess(!registrationSuccess)
  }


  useEffect(() => {
    if (location.state === "register") {
      toggleSetLoginOrSignUp()
    }
  }, [location.state])
  //          PLAN

  //    Login

  // - will be made to check user on click and let backend do the job

 
  //    Register

      // Might still need some polish but after the colors are set


  return (
    <section className="registration">
      <div className={`container ${loginOrSignUp ? "" : "transition_height"}`}>
        {/* <div
          className={`transition_div ${animationToggle ? `` : "active"} 
            ${registrationSuccess ? "sign_up_success" : ""}

          `}
        >
          <div className={`${registrationSuccess ? "" : "hide"}`}>
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle fill="#D87D4A" cx="32" cy="32" r="32" />
                <path
                  stroke="#FFF"
                  strokeWidth="4"
                  d="m20.754 33.333 6.751 6.751 15.804-15.803"
                />
              </g>
            </svg>

            <p>Registration successful!</p>

            <button
              className="button_1"
              onClick={() => {
               closeSuccessTransition()
              }}
            >
              Go to Login
            </button>
          </div>
        </div> */}

        <TransitionContainer {...{ animationToggle, registrationSuccess, closeSuccessTransition }}/>

        {loginOrSignUp ? (
          <Login switchForm={toggleSetLoginOrSignUp} />
        ) : (
          <SignUp
            switchForm={toggleSetLoginOrSignUp}
            toggleRegistrationSuccess={toggleRegistrationSuccess}
          />
        )}
      </div>
    </section>
  )
}
export default RegistrationAndLogin
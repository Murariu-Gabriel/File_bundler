import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import Login from "./Login/Login"
import SignUp from "./SignUp/SignUp"

// import loginStyle from "./registration.module.scss"

import TransitionContainer from "./Transition/TransitionContainer"
import ForgotPassword from "./ForgotPassword/ForgotPassword"

import "./registration.scss"

const RegistrationAndLogin = () => {
  const [loginOrSignUp, setLoginOrSignUp] = useState(true)
  const [animationToggle, setAnimationToggle] = useState(true)
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const [forgotPasswordToggle, setForgotPasswordToggle] = useState(false)
  const [sendEmailSuccess, setSendEmailSuccess ] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const location = useLocation()


  // for all the animation function a slight note

  // the timeout's purpose it o hide the change in state

  // the toggles are for changing the form to the previous state

  const toggleSetLoginOrSignUp = () => {
    setAnimationToggle(!animationToggle)
    
    setTimeout(() => {
      setLoginOrSignUp(!loginOrSignUp)
    }, 500)

  }

  const toggleForgotPasswordAndLoginRegisterForms = () => {
    setAnimationToggle(!animationToggle)

    setTimeout(() => {
       setForgotPasswordToggle(!forgotPasswordToggle)
    }, 500)
  }

  const closeRegistrationSuccessTransition = () => {
    setAnimationToggle(!animationToggle)
    setLoginOrSignUp(!loginOrSignUp)
    toggleRegistrationSuccess()
  }

  

  const toggleRegistrationSuccess = () => {
    setRegistrationSuccess(!registrationSuccess)
  }

  // take care for some reason the toggle doesn't work here you might want ot find out
  const closeLoadingTransition = () => {
    setAnimationToggle(!animationToggle)
    setIsLoading(false)
  }

  const toggleLoading = () => {
    setIsLoading(!isLoading)
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

  //    Forgot password

      // you will need to make the container for transition somehow take custom messages so you can use it multiple places


  return (
    <section className="registration">
      <div
        className={`container ${loginOrSignUp ? "" : "transition_height"} 
      ${forgotPasswordToggle ? "transition_height_2" : ""}`}
      >
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
               closeRegistrationSuccessTransition()
              }}
            >
              Go to Login
            </button>
          </div>
        </div> */}

        {/* The idea here is that I should make this component somehow have multiple faces or dynamic faces or dynamic text so I can use it also for email recovery */}

        <TransitionContainer
          {...{
            animationToggle,
            registrationSuccess,
            closeRegistrationSuccessTransition,
            isLoading,
          }}
        />

        {/* 1 ternary and in false there is the second ternary */}
        {forgotPasswordToggle ? (
          <ForgotPassword
            {...{
              toggleForgotPasswordAndLoginRegisterForms,
              closeLoadingTransition,
              toggleLoading,
              closeLoadingTransition,
              toggleRegistrationSuccess,
            }}
          />
        ) : loginOrSignUp ? (
          <Login
            switchForm={toggleSetLoginOrSignUp}
            toggleForgotPasswordAndLoginRegisterForms={
              toggleForgotPasswordAndLoginRegisterForms
            }
          />
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
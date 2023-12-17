import {useForm} from "react-hook-form"
import {useNavigate } from "react-router-dom"

import Input from "../../../Components/Inputs/Input"
import PasswordInput from "../../../Components/Inputs/PasswordInput"

// import loginStyle from "./login.module.scss"

const ForgotPassword = ({
  toggleForgotPasswordAndLoginRegisterForms,
  toggleLoading
}) => {
  const form = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  })

  const navigate = useNavigate()

  const {
    register,
    setError,
    control,
    handleSubmit,
    formState,
    reset,
    clearErrors,
  } = form
  const { errors, isDirty, isValid } = formState

  // Here you might need another face for introducing the code given by email

  // the design of that face will be some square cases which will be inputs where to each individual number and the form at the end should combine all the numbers and send it to backend for verification

  // also after sending email there should be a transition maybe with a loading animation and if it is just fast let s say the request completed pretty fast then just transition

  // also here you might need to make a parent component just like with sign-up and registration and conditionally load the email form and the other form for sending the code given by email

  const handleForm = (data) => {
    // when email valid send formData to API

    // formulate object

    // if there are no errors send object to api

    // if successfully sent data will need to slide in with the black coverer an insert code

    // if code correct then slide out and present enter and change password (the post request comes back successful)

    // based on what the api will send back you will have to display error or success (done with transition)

    // if api response is 200 or and ok send user to success message and button to go back to login
    // navigate("/", { replace: true })

    // EXAMPLE OF HOW TO SET ERROR IF BACKEND SENDS BACK ERROR

    // ATTENTION: this will work only if the other validation doesn't give error
    // console.log(data.userName)
    // if (data.userName === "(username received from backend)") {
    //   setError("userName", {
    //     type: "manual",
    //     message: "idk error",
    //   })
    // }
    // e.currentTarget.reset()
    toggleLoading()
    
    // after the loading is done you gave to toggle it off and load the other form
  }

  return (
    <form onSubmit={handleSubmit(handleForm)} noValidate>
      <h2>Send your email</h2>
      <Input
        label={"Email"}
        type={"email"}
        htmlFor={"email"}
        placeholder={"Type your email"}
        icon={
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1.3rem"
            width="1.3rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
          </svg>
        }
        register={register}
        errors={errors}
        validation={{
          required: "Field is required",
        }}
      />
      {/* <PasswordInput
        label={"Password"}
        type={"password"}
        htmlFor={"password"}
        placeholder={"Type your password"}
        icon={
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1.3rem"
            width="1.3rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M11.5 8h-7a1 1 0 00-1 1v5a1 1 0 001 1h7a1 1 0 001-1V9a1 1 0 00-1-1zm-7-1a2 2 0 00-2 2v5a2 2 0 002 2h7a2 2 0 002-2V9a2 2 0 00-2-2h-7zm0-3a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z"
              clipRule="evenodd"
            ></path>
          </svg>
        }
        register={register}
        errors={errors}
        validation={{
          required: "Field is required",
        }}
      /> */}

      <button className="button_1">Send email</button>
      <button
        type="button"
        onClick={toggleForgotPasswordAndLoginRegisterForms}
        className="button_3"
      >
        Go back
      </button>
    </form>
  )
}
export default ForgotPassword

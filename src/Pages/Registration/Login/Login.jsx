import {useForm} from "react-hook-form"
import {useNavigate } from "react-router-dom"

import Input from "../../../Components/Inputs/Input"
import PasswordInput from "../../../Components/Inputs/PasswordInput"

// import loginStyle from "./login.module.scss"

const Login = ({ switchForm}) => {


  const form = useForm({
    defaultValues :{
      userName: "",
      password: ""
    }
  })

   const navigate = useNavigate()
  
  const { register,setError, control, handleSubmit, formState, reset, clearErrors } =form
  const { errors, isDirty, isValid } = formState




  const handleForm = (data) => {
    // when login is clicked send formData to API
    // formulate object

    // if there are no errors send object to api

    // based on what the api will send back you will have to display error
   
    // if api response is 200 or and ok send user to dashboard
    navigate("/", {replace: true})   







    // console.log(data)

    // EXAMPLE OF HOW TO SET ERROR IF BACKEND SENDS BACK ERROR

    // ATTENTION: this will work only if the other validation doesn't give error
    // console.log(data.userName)
    // if (data.userName === "a") {
    //   setError("userName", {
    //     type: "manual",
    //     message: "idk error",
    //   })
    // }
    // e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit(handleForm)} noValidate>
      <h2>Login</h2>

      <Input
        label={"Username"}
        type={"text"}
        htmlFor={"userName"}
        placeholder={"Type your user name"}
        icon={
          <svg
            className="icon"
            strokeWidth={0}
            viewBox="0 0 1024 1024"
            height="1.3rem"
            width="1.3rem"
          >
            <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
          </svg>
        }
        register={register}
        errors={errors}
        validation={{
          required: "Field is required",
        }}
      />

      <PasswordInput
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
      />

      <button className="button_2">Forgot password?</button>

      <button className="button_1">Login</button>

      <div className="got_to_sign_up">
        <span>Or Sign Up using </span>
        <button
          className="button_1"
          type="button"
          onClick={switchForm}
        >
          {" "}
          sign up
        </button>
      </div>
    </form>
  )
}
export default Login

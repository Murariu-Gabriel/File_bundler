import Login from "./Login/Login"

import loginStyle from "./registration.module.scss"

const RegistrationAndLogin = () => {

  //          PLAN

  // big pointer - I want to make login and register get swapped with an animation 

  // the transition in between them should possible from both sides


  //    Login

  // - will be made to check user on click and let backend do the job

 
  //    Register

  // you need to decide what inputs you will have
  // for now it will be full name | email | password | repeat password
  
  // ? question: will some of the validation be made on frontend? It seems tedious for the user to not have some directors 


  // All the password requirements will need to be listed somewhere so the user knows how to write it




  return (
    // className here should be registration
    <section className={loginStyle.login}>
      {/* className here should be container */}
      <div className={loginStyle.container}>
        <Login />
        {/* <Register /> */}
      </div>
    </section>
  )
}
export default RegistrationAndLogin
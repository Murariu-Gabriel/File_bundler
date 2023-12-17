import Loading from "./Loading"
import RegistrationSuccess from "./RegistrationSuccess"


// CAUTION! You will need to chain more or operators for that success class if you want it to load the different components you are adding there

const TransitionContainer = ({ animationToggle, registrationSuccess, closeSuccessTransition, isLoading }) => {
  return (
    <div
      className={`transition_div ${animationToggle ? `` : "active"} 
        ${registrationSuccess || isLoading ? "sign_up_success" : ""}
      `}
    >
      {registrationSuccess ? (
        <RegistrationSuccess
          {...{ registrationSuccess, closeSuccessTransition }}
        />
      ) : (
        ""
      )}

      {isLoading ? (
        <Loading />
      ) : (
        ""
      )}
    </div>
  )
}
export default TransitionContainer
import { useState } from "react"

const PasswordInput = ({
  type,
  htmlFor,
  label,
  placeholder,
  icon,
  passwordRules,
  register,
  errors,
  validation,
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  // might need to make controlled PasswordInput

  return (
    <div
      className={`input_container ${
        errors[htmlFor]?.message && "input_container_error"
      }`}
    >
      {icon ? icon : ""}
      <label htmlFor={htmlFor}>{label}</label>

      {showMessage && <p className="floating_message">{passwordRules} </p>}

      {passwordRules && (
        <button
          className="button_2"
          onMouseEnter={() => setShowMessage(true)}
          onMouseLeave={() => setShowMessage(false)}
        >
          ?
        </button>
      )}

      <span>{errors[htmlFor]?.message}</span>

      <input
        type={showPassword ? "text" : type}
        name={htmlFor}
        id={htmlFor}
        placeholder={placeholder}
        autoComplete="true"
        {...register(htmlFor, validation)}
      />

      <button
        type="button"
        className="sh-password show-hide"
        onClick={() => setShowPassword(!showPassword)}
      >
        <svg
          className={showPassword ? "hide" : ""}
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1.2rem"
          width="1.5rem"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>

        <svg
          className={showPassword ? "" : "hide"}
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1.2rem "
          width="1.5rem"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
      </button>
    </div>
  )
}
export default PasswordInput

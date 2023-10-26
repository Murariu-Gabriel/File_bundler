import { useState } from "react"

const PasswordInput = ({ type, htmlFor, label, placeholder, icon, errorMessage }) => {
    const [showPassword, setShowPassword] = useState(false)

  // might need to make controlled PasswordInput

  return (
    <div>
      {icon ? icon : ""}
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        name={htmlFor}
        id={htmlFor}
        placeholder={placeholder}
      />

      <span>{/* Error message */}</span>
    </div>
  )
}
export default PasswordInput

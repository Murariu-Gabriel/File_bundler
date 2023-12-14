

const Input = ({type, htmlFor, label, placeholder, icon, register, errors, validation}) => {

    // might need to make controlled input
  // console.log(errors)

  return (
    <div
      className={`input_container ${
        errors[htmlFor]?.message ? "input_container_error" : ""
      }`}
    >
      {icon ? icon : ""}
      <label htmlFor={htmlFor}>{label}</label>
      <span>{errors[htmlFor]?.message}</span>
      <input
        // className="error"
        type={type}
        name={htmlFor}
        id={htmlFor}
        placeholder={placeholder}
        autoComplete="true"
        {...register(htmlFor, validation)}
      />

    </div>
  )
}
export default Input
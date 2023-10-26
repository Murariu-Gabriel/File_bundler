

const Input = ({type, htmlFor, label, placeholder, icon, errorMessage}) => {

    // might need to make controlled input


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
export default Input
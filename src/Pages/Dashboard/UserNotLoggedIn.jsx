



const UserNotLoggedIn = () => {
  return (
    <div className="user_not_logged_in">
        <strong>ERROR</strong>

        <p>You must be logged in before uploading your own custom files</p>

        <div>
            <button className="button_1">login</button>
            <button className="button_1">register</button>
        </div>
    </div>
  )
}
export default UserNotLoggedIn
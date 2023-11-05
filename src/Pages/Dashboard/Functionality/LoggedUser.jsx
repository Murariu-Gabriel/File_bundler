import DropZone from "./DropZone"




const LoggedUser = () => {
  //   console.log(deviceDetect())
  //  console.log(isMobile)

  const handleForm = (e) => {
    e.preventDefault()
  }







  return (
    // also must display error if the user has uploaded files that are not permitted

    // Actual APP

    // on top under navigation a message bar with a message : Pick a game server you want to upload filers for

    // under you will have multiple icons with 4 games the icon shapes should be inspired after the games

    // each icon when clicked will need to change a container that will have a different link at the bottom

    // there will have to be a drag and drop functionality, meaning the user should be able to drag and drop in a box their files

    // After the user gras some files the files will need a counter

    // they should be able to drag and drop multiple times and the files should just accumulate

    // after all the drag and drops there should be a button for upload

    // after the button is clicked under the drag and drop there should be a link generated by the API and be displayed

    <div className="app_functionality">
      {/* message */}
      <p className="select_message">
        Pick a game server you want to upload files for
      </p>

      {/* container containing the 4 games with icons and shapes */}
      <ul>
        <li>Game 1</li>
        <li>Game 2</li>
        <li>Game 3</li>
        <li>Game 4</li>
      </ul>

      {/* container with drag and rop */}

      <form onSubmit={handleForm}>
       
        <h3>Upload files</h3>


        <div>
          {/* <span>Drag and drop your files</span>
          <span>file counter</span> */}

           {/* ypu might need to have around here a generated link from the API */}
         
           <DropZone/>
          

          <button className="button_1">upload</button>
        </div>

        <p>Only the following extensions are allowed: bsp, mp3, tga</p>
      </form>
    </div>
  )
}
export default LoggedUser
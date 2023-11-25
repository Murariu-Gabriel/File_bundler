import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { isMobile } from "react-device-detect"


const DropZone = () => {
 const [files, setFiles] = useState([])
 const [rejected, setRejected] = useState([])
//  console.log(rejected)

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {

    if(acceptedFiles?.length){

        setFiles(previousFiles => [
            ...previousFiles,
           ...acceptedFiles.map(file => 
                Object.assign(file, {preview: URL.createObjectURL(file) })
            )
        ])
    }

    if(rejectedFiles?.length) {
        setRejected(previousFiles => [...previousFiles, ...rejectedFiles])
    }

  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: {

    "text/*": [],
    "bsp/*": [],
    "vpk/*": [],
    "audio/*": [".mp3", ".wav"],
    "mdl/*": [],
    "tga/*": [],

  } })

  const removeFile = (fileName) => {
    setFiles(files => files.filter(file => file.name !== fileName ))

  }

  const removeRejected = (fileName) => {
    setRejected(files => files.filter(({file}) => file.name !== fileName))
  }

 // You need to restyle everything 

 // the uls need rethinking

 // maybe all of the li elements should have an x button

 // on phone the style for deletion should be different

 // rejected needs to show reason of rejections

 // uls might need a component

 // You need to make it refuse folders

  return (
    <>
      <div
        {...getRootProps({
          className: `desktop_drop_upload ${isDragActive ? "active_drag" : ""}`,
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>

        ) : isMobile ? (
          <p>Click to select files</p>

        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>

        )}
      </div>

      {/* break this into components */}

      {files.length !== 0 && (
        <>

          <div className="file_management_container">
            <h3>Accepted files ({files.length})</h3>
            <button className="button_1" onClick={() => setFiles([])} >remove files</button>
          </div>

          <ul className="file_preview">
            {files.map((file) => {
              return (
                <li key={file.name}>
                  {file.name}
                  <button
                    className="empty_button"
                    onClick={() => removeFile(file.name)}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
                      <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                    </svg>
                  </button>
                </li>
              )
            })}
          </ul>
        </>
      )}

      {rejected.length !== 0 && (
        <>

        <div className="file_management_container">
          <h3>
            {" "}
            Rejected files ({rejected.length})
          </h3>
          <button className="button_1" onClick={() => setRejected([])}>Remove rejected files</button>
        </div>

          <ul className="file_preview">
            {rejected.map(({ errors, file }) => {
              return (
                <li key={file.name}>
                  <div>
                    <p>{file.name}</p>
                    <p>{errors.code}</p>
                  </div>

                  <button
                    className="empty_button"
                    onClick={() => removeRejected(file.name)}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
                      <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                    </svg>
                  </button>
                </li>
              )
            })}
          </ul>
        </>
      )}

      {files.length !== 0 && (
        <button className="button_1">upload</button>
      )}
    </>
  )
}

export default DropZone
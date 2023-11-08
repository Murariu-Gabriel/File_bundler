import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { isMobile } from "react-device-detect"


const DropZone = () => {
 const [files, setFiles] = useState([])
 const [rejected, setRejected] = useState([])
 console.log(rejected)

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

 // make delete for all files on both sides

 // you might need to make the drag and drop full screen and play an animation when it senses folders 

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
          <h3 className="file_selection">Accepted files ({files.length})</h3>

          <ul className="file_preview">
            {files.map((file) => {
              return (
                <li key={file.name}>
                  {file.name}
                  <button
                    className="empty_button"
                    onClick={() => removeFile(file.name)}
                  >
                    X
                  </button>
                </li>
              )
            })}
          </ul>
        </>
      )}

      {rejected.length !== 0 && (
        <>
          <h3 className="file_selection">
            {" "}
            Rejected files ({rejected.length})
          </h3>

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
                    x
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
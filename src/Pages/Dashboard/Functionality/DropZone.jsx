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
    // here you will have to enter all accepted files for now we will only accept txt
    "text/*": []

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

  return (
    <>
      <div {...getRootProps({ className: "desktop_drop_upload" })}>
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
          <h3 className="file_selection">Accepted files</h3>

          <ul className="file_preview">
            {files.map((file) => {
              return (
                <li key={file.name}>
                  {file.name}
                  <button
                    className="empty_button"
                    onClick={() => removeFile(file.name)}
                  >
                    delete
                  </button>
                </li>
              )
            })}
          </ul>
        </>
      )}

      {rejected.length !== 0 && (
        <>
          <h3 className="file_selection"> Rejected files</h3>

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
                    delete
                  </button>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </>
  )
}

export default DropZone
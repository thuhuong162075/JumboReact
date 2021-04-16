import React from 'react';
import {useDropzone} from 'react-dropzone';

function Dialog(props) {
  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="dropzone-card">
      <div className="dropzone">
        <div {...getRootProps({className: 'dropzone-file-btn'})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here</p>
        </div>
        <button className="btn btn-primary" type="button" onClick={open}>
          Open File Dialog
        </button>
      </div>
      <div className="dropzone-content">
        <h3>Accepted Files</h3>
        <ul>{files}</ul>
      </div>
    </div>
  );
}

export default Dialog;
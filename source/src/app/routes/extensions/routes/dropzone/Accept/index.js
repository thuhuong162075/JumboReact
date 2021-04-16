import React from 'react';
import {useDropzone} from 'react-dropzone';

function Accept(props) {
  const {acceptedFiles, rejectedFiles, getRootProps, getInputProps} = useDropzone({
    accept: 'image/jpeg, image/png'
  });

  const acceptedFilesItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const rejectedFilesItems = rejectedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="dropzone-card">
      <div  className="dropzone">
        <div {...getRootProps({className: 'dropzone-file-btn'})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          <em>(Only *.jpeg and *.png images will be accepted)</em>
        </div>
      </div>
      <div className="dropzone-content">
        <h3>Accepted files</h3>
        <ul>
          {acceptedFilesItems}
        </ul>
        <h3>Rejected files</h3>
        <ul>
          {rejectedFilesItems}
        </ul>
      </div>
    </div>
  );
}

export default Accept;
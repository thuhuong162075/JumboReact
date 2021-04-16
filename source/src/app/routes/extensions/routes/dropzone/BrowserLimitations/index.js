import React from 'react';
import {useDropzone} from 'react-dropzone';

function BrowserLimitations(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: '.jpeg,.png,.jpg'
  });

  return (
    <div className="dropzone-card">
      <div className="dropzone">
        <div {...getRootProps({className: 'dropzone-file-btn'})}>
          <input {...getInputProps()} />
          {isDragAccept && (<p>All files will be accepted</p>)}
          {isDragReject && (<p>Some files will be rejected</p>)}
          {!isDragActive && (<p>Drop some files here ...</p>)}
        </div>
      </div>
    </div>
  );

}

export default BrowserLimitations;
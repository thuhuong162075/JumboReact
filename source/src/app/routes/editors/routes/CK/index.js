import React, {useState} from 'react';
import CKEditor from 'react-ckeditor-component';

import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

const textContent='<h2>Awesome Rich Content</h2>\n' +
  '<p>Suspendisse id sollicitudin dui. <strong>Vestibulum eu sapien pharetra,</strong> bibendum ligula id, ullamcorper ligula.</p>\n' +
  '\n' +
  '<ul>\n' +
  '        <li>ullamcorper ligula</li>\n' +
  '        <li>Duis vel neque</li>\n' +
  '</ul>\n' +
  '\n' +
  '<p><em>Sed feugiat hendrerit risus, quis efficitur massa facilisis vitae. Aliquam erat volutpat. </em></p>\n'

const CK =(props)=> {

  const [content,setContent]=useState(textContent);

 const onChange=(evt)=> {
    const newContent = evt.editor.getData();
   setContent(newContent)
  };

  const onBlur=(evt)=> {
    console.log('onBlur event called with event info: ', evt);
  };

  const afterPaste=(evt)=> {
    console.log('afterPaste event called with event info: ', evt);
  };


    return (
      <div>
        <ContainerHeader title={<IntlMessages id="sidebar.editors.CKEditor"/>} match={props.match}/>
        <div className="jr-card mb-0">
          <CKEditor
            activeClass="p10"
            content={content}
            events={{
              'blur': onBlur,
              'afterPaste':afterPaste,
              'change':onChange
            }}
          />
        </div>
      </div>
    )
  };

export default CK;

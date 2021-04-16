import React from 'react';

import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import FullScreen from './FullScreen/index';
import CardBox from 'components/CardBox/index';
import Accept from './Accept/index';
import BrowserLimitations from './BrowserLimitations/index';
import Dialog from './Dialog/index';


const DragNDrop =(props)=> {
    return (
      <div>
        <ContainerHeader title={<IntlMessages id="sidebar.extensions.dropzone"/>} match={props.match}/>
        <div className="row">
          <CardBox styleName="col-sm-6" cardStyle="" childrenStyle="text-center">
            <Accept/>
          </CardBox>

          <CardBox styleName="col-sm-6" cardStyle="" childrenStyle="text-center">
            <BrowserLimitations/>
          </CardBox>
          <CardBox styleName="col-sm-6" cardStyle="mb-sm-0" childrenStyle="text-center">
            <Dialog/>
          </CardBox>
          <CardBox styleName="col-sm-6" cardStyle="mb-0" childrenStyle="text-center">
            <FullScreen/>
          </CardBox>
        </div>
      </div>
    )
  }
export default DragNDrop

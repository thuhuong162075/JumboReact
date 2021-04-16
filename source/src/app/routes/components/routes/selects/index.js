import React from 'react';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import SimpleSelect from './simple/SimpleSelect';
import NativeSelect from './native/NativeSelect';
import MultipleSelect from './multi/MultipleSelect';
import DialogSelect from './dialog/DialogSelect';
import IntlMessages from 'util/IntlMessages';

const Selects = ({match}) => {
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <ContainerHeader title={<IntlMessages id="sidebar.components.selects"/>} match={match}/>

      <div className="row">
        <CardBox styleName="col-12"
                 heading={<IntlMessages id="component.selects.simple"/>}>
          <SimpleSelect/>
        </CardBox>
      </div>

      <div className="row">
        <CardBox styleName="col-12"
                 heading={<IntlMessages id="component.selects.native"/>}>
          <NativeSelect/>
        </CardBox>
      </div>

      <div className="row">
        <CardBox cardStyle='mb-lg-0' heading={<IntlMessages id="component.selects.multiple"/>}>
          <MultipleSelect/>
        </CardBox>
        <CardBox cardStyle='mb-0' heading={<IntlMessages id="component.selects.simple"/>}>
          <DialogSelect/>
        </CardBox>
      </div>
    </div>
  );
};

export default Selects;


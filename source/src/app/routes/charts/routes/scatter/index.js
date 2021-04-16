import React from 'react';
import SimpleScatterChart from './Components/SimpleScatterChart';
import ThreeDimScatterChart from './Components/ThreeDimScatterChart';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const Scatter = ({match}) => {
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <ContainerHeader title={<IntlMessages id="chart.scatter"/>} match={match}/>

      <div className="row">
        <CardBox cardStyle='mb-lg-0' heading="Simple Scatter Chart">
          <SimpleScatterChart/>
        </CardBox>
        <CardBox cardStyle='mb-0' heading="Three Dim Scatter Chart">
          <ThreeDimScatterChart/>
        </CardBox>
      </div>
    </div>
  );
};

export default Scatter;

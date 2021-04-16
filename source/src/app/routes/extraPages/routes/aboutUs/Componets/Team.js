import React from 'react';
import Button from '@material-ui/core/Button';
import IntlMessages from 'util/IntlMessages';

const Team = ({team}) => {
  const {name, destination, description, image} = team;

  return (
    <div className="m-1">
      <div className="jr-card px-0 pt-sm-5 text-center">
        <img className="size-100 avatar-shadow rounded-circle mx-auto mb-2" src={image} alt="Team-member"/>
        <div className="card-body bg-transparent pb-2">
          <h3 className="card-title mb-1">{name}</h3>
          <span className="post-designation mb-2 d-block">{destination}</span>
          <p className="card-text">{description}</p>
          <Button color="primary"><IntlMessages id="extraPages.goSomewhere"/></Button>
        </div>
      </div>
    </div>
  );
};


export default Team;
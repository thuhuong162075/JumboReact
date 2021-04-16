import React from 'react';
import {Badge} from 'reactstrap';
import Button from '@material-ui/core/Button';

const ButtonWithBadge = () => {
  return (
    <div>
      <h4 className="sub-heading">Primary button with badge</h4>
      <div className="jr-btn-group mx-0">
        <Button className='mb-2' color="primary" variant="contained">
          Notifications <Badge className="ml-2 mb-0" color="light">4</Badge>
        </Button>
        <Button color="secondary" variant="contained" className="ml-3 mb-2">
          Cart Items <Badge className="ml-2 py-1 mb-0" color="light rounded-circle">5</Badge>
        </Button>
      </div>
      <h4 className="sub-heading">Link with badge</h4>
      <Button className="jr-btn" color="inherit">
        Messages <Badge className="ml-2 mb-0" color="primary">4</Badge>
      </Button>
    </div>
  );
};


export default (ButtonWithBadge);
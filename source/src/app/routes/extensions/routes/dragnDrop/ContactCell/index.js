import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {SortableElement, SortableHandle} from 'react-sortable-hoc';

const DragHandle = SortableHandle(() =>
  <i className="zmdi zmdi-menu draggable-icon" style={{fontSize: 25}}/>);

const ContactCell = (props) => {

  const [anchorEl, setAnchorEl] = useState();
  const [menuState, setMenuState] = useState();

  const onContactOptionSelect = event => {
    setMenuState(true);
    setAnchorEl(event.currentTarget);
  };
  const handleRequestClose = () => {
    setMenuState(false);
  };

  const {contact} = props;
    const {name, thumb, email, phone, designation, starred} = contact;
    const options = [
      'Edit',
      'Delete',
    ];
    return (
      <div className="col-12 contact-item ripple row no-gutters align-items-center py-2 px-3 py-sm-4 px-sm-6">

        <DragHandle/>
        {(thumb === null || thumb === '') ?
          <div className="rounded-circle size-40 bg-blue text-center text-white mx-4" style={{fontSize: 20}}>
            {name.charAt(0).toUpperCase()}
          </div> :
          <img className="rounded-circle size-40 mx-4" alt={name} src={thumb}/>}

        <div className="col text-truncate font-weight-bold">{name}</div>


        <div className="col email text-truncate px-1 d-none d-lg-flex">
          {email}
        </div>

        <div className="col phone text-truncate px-1 d-none d-md-flex">
          {phone}
        </div>

        <div className="col job-title text-truncate px-1 d-none d-sm-flex">
          {designation}
        </div>


        <div className="col-auto actions">
          <IconButton onClick={() => {
          }}>
            {starred ? <i className="zmdi zmdi-star"/> : <i className="zmdi zmdi-star-outline"/>}
          </IconButton>

          <IconButton onClick={onContactOptionSelect}>
            <i className="zmdi zmdi-more-vert"/>
          </IconButton>

          <Menu id="long-menu"
                anchorEl={anchorEl}
                open={menuState}
                onClose={handleRequestClose}

                MenuListProps={{
                  style: {
                    width: 100,
                  },
                }}>
            {options.map(option =>
              <MenuItem key={option} onClick={() => {
                handleRequestClose();
              }
              }>
                {option}
              </MenuItem>,
            )}
          </Menu>
        </div>
      </div>
    )
};

export default SortableElement(ContactCell);

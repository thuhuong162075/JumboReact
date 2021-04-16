import React, {useEffect} from 'react';
import Drawer from '@material-ui/core/Drawer';
import {useDispatch, useSelector} from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import ContactList from 'components/contact/ContactList';
import AppModuleHeader from 'components/AppModuleHeader/index';
import AddContact from 'components/contact/AddContact';
import IntlMessages from 'util/IntlMessages';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    addFavourite,
    getAllContact,
    getUnselectedAllContact,
    handleRequestClose,
    onAddContact,
    onContactClose,
    onContactSelect,
    onDeleteContact,
    onDeleteSelectedContact,
    onFilterOptionSelect,
    onSaveContact,
    onToggleDrawer,
    updateContactUser
} from 'actions/Contact';

import CustomScrollbars from 'util/CustomScrollbars';

let contactId = 723812738;

const filterOptions = [
  {
    id: 1,
    name: 'All contacts',
    icon: 'zmdi-menu'
  }, {
    id: 2,
    name: 'Frequently contacted',
    icon: 'zmdi-time-restore'

  }, {

    id: 3,
    name: 'Starred contacts',
    icon: 'zmdi-star'
  }
];

const ContactWithRedux = () => {

    const dispatch = useDispatch();
    const {width} = useSelector(({settings}) => settings);
    const {
        loader,
        alertMessage,
        showMessage,
        noContentFoundMessage,
        selectedSectionId,
        drawerState,
        user,
        searchUser,
        filterOption,
        contactList,
        selectedContacts,
        addContactState
    } = useSelector(({contacts}) => contacts);

    const ContactSideBar = (user) => {
        return <div className="module-side">
            <div className="module-side-header">
                <div className="module-logo">
                    <i className="zmdi zmdi-account-box mr-4"/>
                    <span><IntlMessages id="chat.contacts"/></span>
                </div>
            </div>

            <div className="module-side-content">
                <CustomScrollbars className="module-side-scroll scrollbar"
                                  style={{height: width >= 1200 ? 'calc(100vh - 200px)' : 'calc(100vh - 80px)'}}>
                    <div className="module-add-task">
                        <Button className="jr-btn btn-block" variant="contained" color="primary" aria-label="add"
                                onClick={() => dispatch(onAddContact())}>
                            <i className="zmdi zmdi-account-add zmdi-hc-fw"/>
                            <span>Add New Contact</span>
                        </Button>
                    </div>
                    <div className="module-side-nav">
                        <ul className="module-nav">
                            {filterOptions.map(option => <li key={option.id} className="nav-item">
                  <span
                      className={`jr-link ${option.id === selectedSectionId ? 'active' : ''}`} onClick={
                      ()=>filterOptionSelect(option)
                  }>
                    <i className={`zmdi ${option.icon}`}/>
                    <span>{option.name}</span>
                  </span>
                                </li>
                            )}

                        </ul>
                    </div>
                </CustomScrollbars>
            </div>
        </div>

    };


    const contactClose = () => {
        dispatch(onContactClose());
    };
    const filterOptionSelect = (option) => {
        dispatch(onFilterOptionSelect(option));
    };

    const deleteSelectedContact = () => {
        dispatch(onDeleteSelectedContact());
    };
    const filterContact = (userName) => {
        if (userName === '') {
            filterOptionSelect(filterOption);
        } else {
            dispatch(filterContact(userName));
        }
    };

    const allContactSelect = () => {
        const selectAll = selectedContacts < contactList.length;
        if (selectAll) {
            dispatch(getAllContact());
        } else {
            dispatch(getUnselectedAllContact());
        }
    };

    const toggleDrawer = () => {
        dispatch(onToggleDrawer());
    };

    const contactUserUpdate = (evt) => {
        dispatch(updateContactUser(evt.target.value));
        dispatch(filterContact(evt.target.value));
    };
    return (
        <div className="app-wrapper">
            <div className="app-module animated slideInUpTiny animation-duration-3">

                <div className="d-block d-xl-none">
                    <Drawer
                        open={drawerState}
                        onClose={toggleDrawer}>
                        {ContactSideBar(user)}
                    </Drawer>
                </div>
                <div className="app-module-sidenav d-none d-xl-flex">
                    {ContactSideBar(user)}
                </div>

                <div className="module-box">
                    <div className="module-box-header">
                        <IconButton className="drawer-btn d-block d-xl-none" aria-label="Menu"
                                    onClick={toggleDrawer}>
                            <i className="zmdi zmdi-menu"/>
                        </IconButton>
                        <AppModuleHeader placeholder="Search contact" notification={false} apps={false}
                                         user={user}
                                         onChange={contactUserUpdate}
                                         value={searchUser}/>
                    </div>
                    <div className="module-box-content">

                        <div className="module-box-topbar">
                            <Checkbox color="primary"
                                      indeterminate={selectedContacts > 0 && selectedContacts < contactList.length}
                                      checked={selectedContacts > 0}
                                      onChange={allContactSelect}
                                      value="SelectMail"/>


                            {selectedContacts > 0 &&
                            <IconButton className="icon-btn"
                                        onClick={deleteSelectedContact}>
                                <i className="zmdi zmdi-delete"/>
                            </IconButton>}

                        </div>
                        <CustomScrollbars className="module-list-scroll scrollbar"
                                          style={{height: width >= 1200 ? 'calc(100vh - 259px)' : 'calc(100vh - 240px)'}}>
                            {loader ?
                                <div className="loader-view-block h-100">
                                    <div className="loader-view">
                                        <CircularProgress/>
                                    </div>
                                </div>
                                :
                                contactList.length === 0 ?
                                    <div className="h-100 d-flex align-items-center justify-content-center">
                                        {noContentFoundMessage}
                                    </div>
                                    : <ContactList contactList={contactList}
                                                   addFavourite={(data) => dispatch(addFavourite(data))}
                                                   onContactSelect={(data) => dispatch(onContactSelect(data))}
                                                   onDeleteContact={(data) => dispatch(onDeleteContact(data))}
                                                   onSaveContact={(data) => dispatch(onSaveContact(data))}/>
                            }
                        </CustomScrollbars>

                    </div>
                </div>
            </div>
            <AddContact open={addContactState} contact={{
                'id': contactId++,
                'name': '',
                'thumb': '',
                'email': '',
                'phone': '',
                'designation': '',
                'selected': false,
                'starred': false,
                'frequently': false,
            }} onSaveContact={(data) => dispatch(onSaveContact(data))}
                        onContactClose={contactClose} onDeleteContact={(data) => dispatch(onDeleteContact(data))}/>
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={showMessage}
                autoHideDuration={3000}
                onClose={() => dispatch(handleRequestClose())}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{alertMessage}</span>}
            />
        </div>
    )
};

export default ContactWithRedux;
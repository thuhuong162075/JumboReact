import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import {useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import contactsData from '../data/contactList';
import ContactList from 'components/contact/ContactList';
import AppModuleHeader from 'components/AppModuleHeader/index';
import AddContact from 'components/contact/AddContact';
import IntlMessages from 'util/IntlMessages';
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

const Contact = () => {

  const [noContentFoundMessage] = useState("No contact found in selected folder");
  const [alertMessage, setAlertMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState(1);
  const [drawerState, setDrawerState] = useState(false);
  const [user] = useState({
                                     name: "Robert Johnson",
                                     email: "robert.johnson@example.com",
                                     avatar: "https://via.placeholder.com/150x150"
                                   });
  const [searchUser, setSearchUser] = useState("");
  const [filterOption, setFilterOption] = useState("All contacts");
  const [allContact, setAllContact] = useState(contactsData);
  const [contactList, setContactList] = useState(contactsData);
  const [selectedContacts, setSelectedContacts] = useState(0);
  const [addContactState, setAddContactState] = useState(false);

  const {width} = useSelector(({settings}) => settings);

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
                    onClick={onAddContact}>
              <i className="zmdi zmdi-account-add zmdi-hc-fw"/>
              <span>Add New Contact</span>
            </Button>
          </div>
          <div className="module-side-nav">
            <ul className="module-nav">
              {filterOptions.map(option => <li key={option.id} className="nav-item">
                  <span
                    className={`jr-link ${option.id === selectedSectionId ? 'active' : ''}`} onClick={
                    ()=>onFilterOptionSelect(option)
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

 const addFavourite = (data) => {
    setAlertMessage(data.starred ? 'Contact removed as star' : 'Contact marked as star');
    setShowMessage(true);
    setContactList(contactList.map((contact) => contact.id === data.id ? {
      ...contact,
      starred: !data.starred
    } : contact));
    setAllContact(allContact.map((contact) => contact.id === data.id ? {
      ...contact,
      starred: !data.starred
    } : contact))
  };
  const onContactSelect = (data) => {
    data.selected = !data.selected;
    let updatedSelectedContacts = 0;
    const updatedContactList = contactList.map(contact => {
        if (contact.selected) {
          updatedSelectedContacts++;
        }
        if (contact.id === data.id) {
          if (contact.selected) {
            updatedSelectedContacts++;
          }
          return data;
        } else {
          return contact;
        }
      }
    );
    setSelectedContacts(updatedSelectedContacts);
    setContactList(updatedContactList);
  };


 const onAddContact = () => {
    setAddContactState(true);
  };
 const onContactClose = () => {
    setAddContactState(false)
  };
 const onFilterOptionSelect = (option) => {
    switch (option.name) {
      case 'All contacts': {
        setSelectedSectionId(option.id);
        setFilterOption(option.name);
        setContactList(allContact);
        break;
      }
      case 'Frequently contacted': {
        setSelectedSectionId(option.id);
        setFilterOption(option.name);
        setContactList( allContact.filter((contact) => contact.frequently));
        break;
      }
      case 'Starred contacts': {
        setSelectedSectionId(option.id);
        setFilterOption(option.name);
        setContactList(allContact.filter((contact) => contact.starred));
        break;
      }
      default: {
        setSelectedSectionId(option.id);
        setFilterOption(option.name);
        setContactList(allContact);
      }
    }

  };
 const onSaveContact = (data) => {
    let isNew = true;
    const updatedContactList = allContact.map((contact) => {
      if (contact.id === data.id) {
        isNew = false;
        return data
      } else {
        return contact
      }
    });
    if (isNew) {
      updatedContactList.push(data);
    }
    setAlertMessage(isNew ? 'Contact Added Successfully' : 'Contact Updated Successfully');
    setShowMessage(true);
    setContactList(updatedContactList);
    setAllContact(updatedContactList);
  };
 const onDeleteContact = (data) => {
   setAlertMessage( 'Contact Deleted Successfully');
    setShowMessage(true);
    setAllContact(allContact.filter((contact) => contact.id !== data.id));
    setContactList(allContact.filter((contact) => contact.id !== data.id));
  };
 const onDeleteSelectedContact = () => {
    const contacts = allContact.filter((contact) => !contact.selected);
   setAlertMessage( 'Contact Deleted Successfully');
   setShowMessage(true);
   setAllContact(contacts);
   setContactList(contacts);
   setSelectedContacts(0);
  };

 const filterContact = (userName) => {

    if (userName === '') {
      setContactList(allContact);
    } else {
      const filterContact = allContact.filter((contact) =>
        contact.name.toLowerCase().indexOf(userName.toLowerCase()) > -1);
      if (filterOption === 'All contacts') {
        setContactList(filterContact);
      } else if (filterOption === 'Frequently contacted') {
        setContactList(filterContact.filter((contact) => contact.frequently));
      } else if (filterOption === 'Starred contacts') {
        setContactList(filterContact.filter((contact) => contact.starred));
      }
    }
  };
 const handleRequestClose = () => {
    setShowMessage(false)
  };
 const getAllContact = () => {
    let contactLists = allContact.map((contact) => contact ? {
      ...contact,
      selected: true
    } : contact);
    setSelectedContacts(contactLists.length);
    setAllContact(contactLists);
    setContactList(contactLists);
  };

 const getUnselectedAllContact = () => {
    let contactLists = allContact.map((contact) => contact ? {
      ...contact,
      selected: false
    } : contact);
   setSelectedContacts(0);
   setAllContact(contactLists);
   setContactList(contactLists);
  };

 const onAllContactSelect =()=> {
    const selectAll = selectedContacts < contactList.length;
    if (selectAll) {
      getAllContact();
    } else {
      getUnselectedAllContact();
    }
  };

 const updateContactUser =(evt)=> {
    setSearchUser(evt.target.value);
    filterContact(evt.target.value)
  };

 const onToggleDrawer =()=> {
    setDrawerState(!drawerState)
  };
    return (
      <div className="app-wrapper">
        <div className="app-module animated slideInUpTiny animation-duration-3">

          <div className="d-block d-xl-none">
            <Drawer
              open={drawerState}
              onClose={onToggleDrawer}>
              {ContactSideBar(user)}
            </Drawer>
          </div>
          <div className="app-module-sidenav d-none d-xl-flex">
            {ContactSideBar(user)}
          </div>

          <div className="module-box">
            <div className="module-box-header">
              <IconButton className="drawer-btn d-block d-xl-none" aria-label="Menu"
                          onClick={onToggleDrawer}>
                <i className="zmdi zmdi-menu"/>
              </IconButton>
              <AppModuleHeader placeholder="Search contact" notification={false} apps={false}
                               user={user}
                               onChange={updateContactUser}
                               value={searchUser}/>
            </div>
            <div className="module-box-content">

              <div className="module-box-topbar">
                <Checkbox color="primary"
                          indeterminate={selectedContacts > 0 && selectedContacts < contactList.length}
                          checked={selectedContacts > 0}
                          onChange={onAllContactSelect}
                          value="SelectMail"/>


                {selectedContacts > 0 &&
                <IconButton className="icon-btn"
                            onClick={onDeleteSelectedContact}>
                  <i className="zmdi zmdi-delete"/>
                </IconButton>}

              </div>
              <CustomScrollbars className="module-list-scroll scrollbar"
                                style={{height: width >= 1200 ? 'calc(100vh - 259px)' : 'calc(100vh - 240px)'}}>
                {contactList.length === 0 ?
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    {noContentFoundMessage}
                  </div>
                  : <ContactList contactList={contactList}
                                 addFavourite={addFavourite}
                                 onContactSelect={onContactSelect}
                                 onDeleteContact={onDeleteContact}
                                 onSaveContact={onSaveContact}/>
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
        }} onSaveContact={onSaveContact}
                    onContactClose={onContactClose} onDeleteContact={onDeleteContact}/>
        <Snackbar
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
          open={showMessage}
          autoHideDuration={3000}
          onClose={handleRequestClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{alertMessage}</span>}
        /></div>
    )
  };

export default Contact;
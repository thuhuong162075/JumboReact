import React, {useState} from 'react';
import ContactCell from './ContactCell/index'
import contact from 'app/routes/contact/data/contactList';
import {arrayMove, SortableContainer} from 'react-sortable-hoc';

import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

const Contacts = SortableContainer(({contacts}) => {
  return (
    <div className="row">
      {contacts.map((contact, index) => (
        <ContactCell key={index} index={index} contact={contact}/>
      ))}
    </div>
  );
});


const DragNDrop = (props) => {
  const [contacts, setContacts] = useState(contact);

  const onSortEnd = ({oldIndex, newIndex}) => {
    setContacts(arrayMove(contacts, oldIndex, newIndex))
  };

  return (
    <div>
      <ContainerHeader title={<IntlMessages id="sidebar.extensions.dragNDrop"/>} match={props.match}/>
      <div className="animated slideInUpTiny animation-duration-3">
        <Contacts contacts={contacts} onSortEnd={onSortEnd} useDragHandle={true}/>
      </div>
    </div>
  )
};

export default DragNDrop

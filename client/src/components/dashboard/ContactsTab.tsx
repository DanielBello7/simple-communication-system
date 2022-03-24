


import { useState, useContext } from 'react';
import { Offcanvas } from 'bootstrap';
import { ContactsContext } from '../../context/ContactsContext';
import ComponentLoader from '../ComponentLoader';
import ContactTile from './ContactTile';
import { DataContext } from '../../context/MainContext';


export default function ContactsTab() {
  const contacts = useContext(ContactsContext);
  const [selected, setSelected] = useState<number | null>(null);
  const [contactsLoading, setContactsLoading] = useState(false);
  const { theme } = useContext(DataContext);

  const handleClick = (contact: number) => {
    const element = document.getElementById("offcanvasRight")!;
    const offcanvas = Offcanvas.getOrCreateInstance(element, {keyboard: false, backdrop: false, scroll: false});
    contacts.setSelectedContact(contact)
    setSelected(contact);
    offcanvas.show();
  }

  const chatsOutput = contacts.groupedContacts.map((contact, index) => {
    if (contact.groupChildren.length > 0)
    return (
      <div className={`w-100 p-0 m-0 mb-3 pb-2 border-bottom ${theme.text}`} key={index}>
        <p className={`m-0 p-0 px-3 h5`}>
          {contact.groupTitle.toUpperCase()}
        </p>
        <ul className='w-100 p-0 m-0'>
        {contact.groupChildren.map((contact, index) => {
          return <ContactTile contact={contact} index={index} handleClick={handleClick} selected={selected} key={index}/>
        })}
        </ul>
      </div>
    )
  });

  return (
    <div className="nav w-100 h-100 d-flex flex-column overflow-scroll position-relative" id="scroll-container">
      { contactsLoading ? <ComponentLoader /> : chatsOutput }
      <div className={`position-sticky ${contacts.state.length > 6 ? 'bottom-0' : 'top-100'} end-0`}>
      <button className='btn bg-primary mb-3 shadow rounded-circle p-0 text-white' 
              style={{width: '50px', height: '50px'}}
              data-bs-toggle="modal" 
              data-bs-target="#newContactModal"
              id="floatingAction">
      <i className='fas fa-user fa-sm' />
      </button>  
      </div>
    </div>
  )
}
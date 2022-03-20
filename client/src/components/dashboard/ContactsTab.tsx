


import { useState, useContext } from 'react';
import { Offcanvas } from 'bootstrap';
import { ContactsContext } from '../../context/ContactsContext';
import toUpperFirst from '../../lib/toUpperFirst';
import OffCanvas from '../../modules/OffCanvas';
import ComponentLoader from '../ComponentLoader';
import img from '../../img/user-circle.svg';


export default function ContactsTab() {
  const contacts = useContext(ContactsContext);
  const [selected, setSelected] = useState<number | null>(null);
  const [contactsLoading, setContactsLoading] = useState(false);

  const handleClick = (contact: number) => {
    const element = document.getElementById("offcanvasRight")!;
    const offcanvas = Offcanvas.getOrCreateInstance(element, {keyboard: false, backdrop: false, scroll: false});
    contacts.setSelectedContact(contact)
    setSelected(contact);
    offcanvas.show();
  }

  const chatsOutput = contacts.state.map((contact, index) => {
    return (
      <li className="nav-item p-3" onClick={() => handleClick(index)} id="chat" key={index}>
        <div className='row p-0 m-0 w-100' id="contact-2">
          <div className='col-3 p-0 m-0' id="contact-3">
          <div className='dp' style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '70px',
            height: '70px'
          }}/>
          </div>
          <div className={`col-9 nav-link p-0 m-0 ${selected === index ? "active" : ""}`} id='contact-1'
               aria-current={selected === index ? "page" : "false"}>
            <div className='row p-0 m-0' id="name-contact">
              {`${toUpperFirst(contact.first_name)} ${toUpperFirst(contact.last_name)}`}
            </div>
            <div className='row p-0 m-0' id="email-contact">{contact.email}</div>
          </div>
        </div>
      </li>
    )
  });

  return (
    <ul className="nav w-100 h-100 d-flex flex-column overflow-scroll" id="scroll-container">
      { contactsLoading ? <ComponentLoader /> : chatsOutput }
      <OffCanvas />
    </ul>
  )
}
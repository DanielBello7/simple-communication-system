


import { useRef, useState, useContext, useEffect } from 'react';
import { Modal } from 'bootstrap';
import { DataContext } from '../context/MainContext';
import { ContactsContext } from '../context/ContactsContext';
import toUpperFirst from '../lib/toUpperFirst';
import { Contact } from '../types/ContactsType.type';

export default function ModifyContactModal() {
  const [user, setUser] = useState<Contact | null>(null);
  const firstnameRef = useRef<HTMLInputElement>(null)!;
  const lastnameRef = useRef<HTMLInputElement>(null);
  const { selectedContact, updateContact } = useContext(ContactsContext);
  const { theme } = useContext(DataContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const element = document.getElementById("modifyContactModal")!;
    const modal = Modal.getOrCreateInstance(element);

    const firstname = firstnameRef.current?.value as string;
    const lastname = lastnameRef.current?.value as string;

    const data = {
      email: user?.email,
      first_name: firstname,
      last_name: lastname
    } as Contact

    updateContact(data);

    event.currentTarget.reset();
    modal.hide();
  }

  useEffect(() => {
    setUser(selectedContact);
  }, [selectedContact]);

  return (
    <div className="modal fade" 
         id="modifyContactModal" 
         tabIndex={-1} 
         aria-labelledby="modifyContactModal" 
         aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className={`modal-header ${theme.title === 'dark' ? 'bg-primary text-white' : ''}`}>
      <h2 className="modal-title" id="modifyContactModalLabel">Modify Contact</h2>
      <button type="button" 
              className="btn-close" 
              data-bs-dismiss="modal"
              aria-label="Close"></button>
      </div>


      <div className={`modal-body text-dark`}>
      <form onSubmit={handleSubmit} id="modifyContactForm">
      <div className="mb-3">
        <label htmlFor="recipient-name" className="col-form-label">Email:</label>
        <input type="text" 
               className="form-control" 
               name="firstname"
               disabled
               autoComplete="off"
               defaultValue={user?.email}
               id="firstname"/>
        </div>

        <div className="mb-3">
        <label htmlFor="recipient-name" className="col-form-label">First name:</label>
        <input type="text" 
               className="form-control" 
               name="firstname"
               ref={firstnameRef}
               autoComplete="off"
               defaultValue={toUpperFirst(user?.first_name)}
               id="firstname"/>
        </div>

        <div className="mb-3">
        <label htmlFor="recipient-name" className="col-form-label">Last name:</label>
        <input type="text" 
               className="form-control" 
               name='lastname'
               autoComplete="off"
               defaultValue={toUpperFirst(user?.last_name)}
               ref={lastnameRef}
               id="lastname"/>
        </div>
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" 
                data-bs-dismiss="modal" 
                aria-label="Close"
                className="btn btn-secondary">Close</button>
        <button type="submit"
                form="modifyContactForm"
                className="btn btn-primary">Update Contact</button>
      </div>
  </div>
  </div>
  </div>
  )
}
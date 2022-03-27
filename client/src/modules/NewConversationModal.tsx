


import { useContext, useState, useRef } from "react";
import { ContactsContext } from "../context/ContactsContext";
import { DataContext } from "../context/MainContext";
import toUpperFirst from "../lib/toUpperFirst";
import { Modal } from 'bootstrap';

let selectedContacts: string[] = [];

export default function NewConversationModal() {
  const contacts = useContext(ContactsContext);
  const { showToast, theme } = useContext(DataContext);
  const [show, setShow] = useState(false);
  const groupNameRef = useRef<HTMLInputElement>(null);

  const closeModal = () => {
    const element = document.getElementById("newConversationModal")!;
    const myModal = Modal.getOrCreateInstance(element, {keyboard: false});
    myModal.hide();
  }

  const handleClick = (username: string): void => {
    if (selectedContacts.includes(username)) {
      selectedContacts = selectedContacts.filter(item => item !== username);
    }
    else selectedContacts.push(username);
    if (selectedContacts.length > 1) setShow(true);
    else setShow(false);
  }

  const handleClear = (): void => {
    const form = document.getElementById("newConversationForm") as HTMLFormElement;
    form.reset();
    selectedContacts = [];
    setShow(false);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (selectedContacts.length <= 0) return showToast('Nothing selected');
    showToast('Contacts Selected');
    selectedContacts = [];
    setShow(false);
    event.currentTarget.reset();
    return closeModal();
  }

  const contactsOutput = contacts.state.map((contact, index) => {
    const fullname = `${toUpperFirst(contact.first_name)} ${toUpperFirst(contact.last_name)}`;
    return (
      <div className="form-check mb-3" key={index}>
        <input className="form-check-input" 
               type="checkbox"
               onClick={() => handleClick(contact.email)}
               value={contact.email} 
               id={contact.email}/>
        <label className="form-check-label" htmlFor={contact.email} id="check">{fullname}</label>
      </div>
    )
  });


  return (
    <div className="modal fade text-dark" 
         id="newConversationModal" 
         tabIndex={-1} 
         aria-labelledby="newConversationModal" 
         aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className={`modal-header ${theme.title==="dark"?'text-white bg-primary':'text-dark'}`}>
      <h2 className="modal-title" id="newConversationModalLabel">Start a new conversation</h2>
      <button type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"></button>
      </div>

      
      <div className="modal-body">
      <h5 className="mb-5">Select Contacts</h5>
      <form onSubmit={handleSubmit} id="newConversationForm">
      {contactsOutput}
      </form>
      </div>
      <div className="modal-footer">
        <div className="row w-100">
          <div className={`mb-3 ${!show && 'd-none'}`}>
          <label htmlFor="recipient-name" className="col-form-label">Group name:</label>
          <input type="text" 
                className="form-control" 
                id="contact_first_name" 
                form="newConversationForm"
                autoComplete="off"
                ref={groupNameRef}
                name="contact_first_name" 
                placeholder="Group name"
                required={show}
                />
          </div>
        </div>


        <button type="button"
                onClick={handleClear}
                className="btn btn-secondary">Clear</button>
        <button type="button" 
                onClick={closeModal}
                className="btn btn-secondary"
                data-bs-dismiss="modal">Close</button>
        <button type="submit" 
                form="newConversationForm"
                id="create-button"
                className={`btn btn-primary`}>Create</button>
      </div>
  </div>
  </div>
  </div>
  )
}
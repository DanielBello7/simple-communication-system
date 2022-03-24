


import { useContext, useState } from "react";
import { ContactsContext } from "../context/ContactsContext";
import { DataContext } from "../context/MainContext";
import toUpperFirst from "../lib/toUpperFirst";
import { Modal } from 'bootstrap';

export default function NewConversationModal() {
  const contacts = useContext(ContactsContext);
  const { showToast, theme } = useContext(DataContext);
  const [show, setShow] = useState(false);

  let selectedContacts: string[] = [];

  const handleClick = (username: string): void => {
    if (selectedContacts.includes(username)) {
      selectedContacts = selectedContacts.filter(item => item !== username);
    }
    else selectedContacts.push(username);
    
    console.log(selectedContacts);
    alert(selectedContacts.length);
  }

  const handleClose = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    selectedContacts = [];
    event.currentTarget.reset();
  }

  const handleSubmit = (): void => {
    if (selectedContacts.length <= 0) return showToast('Nothing selected');
    showToast('Contacts Selected');
    const element = document.getElementById("newConversationModal")!;
    const myModal = Modal.getOrCreateInstance(element, {keyboard: false});
    myModal.hide();
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
      <form onSubmit={handleClose} id="newConversationForm">
      {contactsOutput}
      </form>
      </div>
      <div className="modal-footer">
        <div className="row w-100">
          <div className={`mb-3 ${!show && 'd-none'}`}>
          <label htmlFor="recipient-name" className="col-form-label">First name:</label>
          <input type="text" 
                className="form-control" 
                id="contact_first_name" 
                autoComplete="off"
                name="contact_first_name" 
                required
                />
          </div>
        </div>


        <button type="submit" 
                form="newConversationForm"
                className="btn btn-secondary">Clear</button>
        <button type="submit" 
                className="btn btn-secondary" 
                form="newConversationForm"
                data-bs-dismiss="modal">Close</button>
        <button type="button" 
                onClick={() => handleSubmit()}
                id="create-button"
                className={`btn btn-primary`}>Create</button>
      </div>
  </div>
  </div>
  </div>
  )
}
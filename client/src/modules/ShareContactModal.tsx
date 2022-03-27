


import { useContext } from "react";
import { DataContext } from "../context/MainContext";
import { ContactsContext } from "../context/ContactsContext";
import toUpperFirst from "../lib/toUpperFirst";
import { Modal } from "bootstrap";

export default function ShareContactModal() {
  const { theme } = useContext(DataContext);
  const { state, selectedContact } = useContext(ContactsContext);

  const handleClick = (email: string): void => {
    const element = document.getElementById("sharePostModal")!;
    const modal = Modal.getOrCreateInstance(element, {keyboard: false});
    modal.hide();
  }

  const contactsOutput = state.map((contact, index) => {
    const fullname = `${toUpperFirst(contact.first_name)} ${toUpperFirst(contact.last_name)}`;
    if (selectedContact.email === contact.email) return null;
    return (
      <div className="list-group-item list-group-item-action m-0"
         style={{cursor: 'pointer'}} 
         key={index}
         onClick={() => handleClick(contact.email)}>
      <p className="p-0 m-0">{fullname}</p>
      <p className="text-muted p-0 m-0" style={{fontSize: '0.8rem'}}>@{contact.email}</p>
      </div>
    )
  });

  return (
    <div className="modal fade text-dark" id="shareContactModal"
         tabIndex={-1}
         aria-labelledby="shareContactModal"
         aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className={`modal-header ${theme.title==='dark'?'text-white bg-primary':''}`}>
      <h5 className="modal-title h4" id="shareContactModal">Share Contact</h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
          
      <div className="modal-body">
        <h5 className="mb-3 px-3">Share with:</h5>
        <div className="list-group w-100 mb-4">
        {contactsOutput}
        </div>
      </div>

      <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
      </div>
    </div>
    </div>
  )
}
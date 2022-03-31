


import { useContext } from "react";
import { DataContext } from "../context/MainContext";
import { ContactsContext } from "../context/ContactsContext";
import { Offcanvas, Modal } from "bootstrap";
import toUpperFirst from "../lib/toUpperFirst";

export default function DeleteContactModal() {
  const { theme } = useContext(DataContext);
  const { selectedContact, deleteContact } = useContext(ContactsContext);

  const fullname = `${toUpperFirst(selectedContact?.first_name)} ${toUpperFirst(selectedContact?.last_name)}`;

  const handleClick = () => {
    const element_1 = document.getElementById("offcanvasRight")!;
    const element_2 = document.getElementById("deleteContactModal")!;

    const offcanvas = Offcanvas.getOrCreateInstance(element_1);
    const modal = Modal.getOrCreateInstance(element_2);

    offcanvas.hide();
    modal.hide();

    deleteContact(selectedContact);
  }

  return (
    <div className={`modal fade text-dark`} id="deleteContactModal"
         tabIndex={-1}
         aria-labelledby="deleteContactModal"
         aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className={`modal-header ${theme.title==='dark'?'text-white bg-primary':''}`}>
      <h5 className="modal-title h4"
          id="deleteContactModalTitle">Delete Contact
      </h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div className="modal-body">
        <div>
        <p className="p-0 m-0">
          Delete contact <span className="text-danger">"{fullname}"</span> ?
        </p>
        <p className="text-muted" style={{fontSize: '0.7rem'}}>
          Note: You can add the contact again to update your messages.
        </p>
        </div>
      </div>
      
      <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" className="btn btn-danger" onClick={handleClick}>Delete</button>
      </div>
    </div>
    </div>
    </div>
  )
}
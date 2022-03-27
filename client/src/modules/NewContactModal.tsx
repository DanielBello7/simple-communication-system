


import { useContext, useRef } from "react";
import { DataContext } from "../context/MainContext";
import { Modal } from "bootstrap";

export default function NewContactModal() {
  const emailRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const { theme } = useContext(DataContext);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const email = emailRef.current?.value;
    const firstname = firstNameRef.current?.value;
    const lastname = lastNameRef.current?.value;
    event.currentTarget.reset();
    alert(`${email} ${firstname} ${lastname}`);
    const element = document.querySelector('#newContactModal')!;
    const modal = Modal.getOrCreateInstance(element, {backdrop: 'static'});
    modal.hide();
  }

  return (
    <div className="modal fade text-dark" 
         id="newContactModal" 
         tabIndex={-1} 
         aria-labelledby="newContactModal" 
         aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className={`modal-header ${theme.title==='dark'?'bg-primary text-white':''}`}>
      <h2 className="modal-title" id="newContactLabel">Add a new contact</h2>
      <button type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"></button>
      </div>


      <div className="modal-body">
      <form onSubmit={handleSubmit} id="newContactForm">
        <div className="mb-3">
        <label htmlFor="recipient-name" className="col-form-label">Email:</label>
        <input type="email" 
               ref={emailRef} 
               className="form-control" 
               id="contact_email" 
               autoComplete="off"
               name="contact_email" 
               required
               />
        </div>

        <div className="mb-3">
        <label htmlFor="recipient-name" className="col-form-label">First name:</label>
        <input type="text" 
               ref={firstNameRef} 
               className="form-control" 
               id="contact_first_name" 
               autoComplete="off"
               name="contact_first_name" 
               required
               />
        </div>

        <div className="mb-3">
        <label htmlFor="recipient-name" className="col-form-label">Last name:</label>
        <input type="text" 
               className="form-control" 
               ref={lastNameRef}
               id="contact_last_name" 
               autoComplete="off"
               name="contact_last_name" 
               required
               />
        </div>
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" 
                form="newContactForm" 
                className="btn btn-primary">Add Contact</button>
      </div>
  </div>
  </div>
  </div>
  )
}
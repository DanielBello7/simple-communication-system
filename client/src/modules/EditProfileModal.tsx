


import { useRef, useContext } from 'react';
import { Modal } from 'bootstrap';
import { UserContext } from '../context/UserContext';
import { DataContext } from '../context/MainContext';
import toUpperFirst from '../lib/toUpperFirst';

export default function EditProfileModal() {
  const firstnameRef = useRef<HTMLInputElement>(null)!;
  const lastnameRef = useRef<HTMLInputElement>(null);
  const bioRef = useRef<HTMLTextAreaElement>(null);
  const { user } = useContext(UserContext);
  const { theme } = useContext(DataContext);

  const handleClick = (): void => {
    const firstname = firstnameRef.current?.value;
    const lastname = lastnameRef.current?.value;
    const bio = bioRef.current?.value;
    alert(`${firstname} ${lastname} ${bio}`);
    const element = document.getElementById("editProfileModal")!;
    const modal = Modal.getOrCreateInstance(element);
    modal.hide();
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const element = document.getElementById("editProfileModal")!;
    const modal = Modal.getOrCreateInstance(element);
    event.currentTarget.reset();
    modal.hide();
  }

  return (
    <div className="modal fade" 
         id="editProfileModal" 
         tabIndex={-1} 
         aria-labelledby="editProfileModal" 
         aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className={`modal-header ${theme.title === 'dark' ? 'bg-primary text-white' : ''}`}>
      <h2 className="modal-title" id="exampleModalLabel">Edit Profile</h2>
      <button type="button" 
              className="btn-close" 
              data-bs-dismiss="modal"
              aria-label="Close"></button>
      </div>


      <div className={`modal-body text-dark`}>
      <form onSubmit={handleSubmit} id="editProfileForm">
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

        <div className="mb-3">
        <label htmlFor="message-text" className="col-form-label">Bio:</label>
        <textarea className="form-control" 
                  id="bio"
                  defaultValue={user?.bio}
                  autoComplete="off"
                  ref={bioRef}
                  name="bio"></textarea>
        </div>
      </form>
      </div>
      <div className="modal-footer">
        <button type="submit" 
                className="btn btn-secondary"
                form='editProfileForm'>Close</button>
        <button type="button" 
                onClick={handleClick}
                className="btn btn-primary">Update</button>
      </div>
  </div>
  </div>
  </div>
  )
}
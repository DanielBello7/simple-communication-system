


import { useContext, useState, useRef } from 'react';
import { Modal } from 'bootstrap';
import { DataContext } from '../context/MainContext';

export default function NewPostModal() {
  const { theme } = useContext(DataContext);
  const postRef = useRef<HTMLTextAreaElement>(null);

  const [media, setMedia] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const element = document.getElementById("newPostModal")!;
    const modal = Modal.getOrCreateInstance(element);
    const post = postRef.current?.value;
    alert(`${post}`);
    modal.hide();
    event.currentTarget.reset();
  }

  const handleChange = () => {
    setMedia(prevState => !prevState);
  }

  return (
    <div className="modal fade"
         id="newPostModal" 
         tabIndex={-1} 
         aria-labelledby="newPostModal" 
         aria-hidden="true">
    <div className="modal-dialog">
    <div className="modal-content">
      <div className={`modal-header ${theme.title === 'dark' ? 'bg-primary text-white' : ''}`}>
      <h2 className="modal-title" id="exampleModalLabel">What's happenining?</h2>
      <button type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"></button>
      </div>


      <div className="modal-body text-dark">
      <form onSubmit={handleSubmit} id="newPostForm">
        <div className="mb-3">
        <label htmlFor="message-text" className="col-form-label">Post:</label>
        <textarea className="form-control" 
                  required
                  ref={postRef}
                  name="post_message"
                  id="post_message"></textarea>
        </div>

        <div className="mb-3 form-check form-switch">
        <input className="form-check-input" 
               type="checkbox" 
               role="switch"
               id="flexSwitchCheckChecked" 
               onChange={handleChange}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Media?</label>
        </div>

        <div className={`mb-3 ${!media && 'd-none'}`}>
        <label className="form-label" htmlFor="customFile">Upload</label>
        <input type="file" className="form-control" id="customFile" required={media && true}/>
        </div>

      </form>
      </div>
      <div className="modal-footer">
        <button type="button" 
                className="btn btn-secondary" 
                data-bs-dismiss="modal">Close</button>
        <button type="submit" 
                className="btn btn-primary" 
                form='newPostForm'>Post</button>
      </div>
  </div>
  </div>
  </div>
  )
}
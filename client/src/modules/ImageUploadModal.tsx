


import { useContext, useRef } from "react";
import { DataContext } from "../context/MainContext";
import { Modal } from "bootstrap";

export default function ImageUploadModal() {
  const { theme, showToast } = useContext(DataContext);
  const textRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const element = document.getElementById("imageUploadModal")!;
    const modal = Modal.getOrCreateInstance(element);
    showToast("Sent");
    modal.hide();
    return event.currentTarget.reset();
  }
  
  return (
    <div className="modal fade text-dark" id="imageUploadModal"
         tabIndex={-1}
         data-bs-backdrop="static"
         aria-labelledby="imageUploadModalTitle"
         aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className={`modal-header ${theme.title==='dark'&&'text-white bg-primary'}`}>
      <h5 className="modal-title h2" id="imageUploadModalTitle">Send a picture</h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <form id="imageUploadForm" onSubmit={handleSubmit}>
        <div className="mb-3">
        <label className="form-label" htmlFor="customFile">Upload</label>
        <input type="file" className="form-control" id="customFile" required/>
        </div> 

        <div className="mb-3">
        <input type="text" 
               ref={textRef} 
               placeholder="Type something..." 
               className="form-control" 
               id="exampleInputEmail1" 
               aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">
          <small>You can add a message along with the text.</small>
        </div>
        </div>
        </form>
      </div>
      
      <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button form="imageUploadForm" type="submit" className="btn btn-primary">Send</button>
      </div>
    </div>
    </div>
    </div>
  )
}



import { useContext } from "react";
import { DataContext } from "../context/MainContext";

export default function AlertModal() {
  const dataContext = useContext(DataContext);

  return (
    <div className="modal fade" 
         id="alertModal" 
         tabIndex={-1} 
         aria-labelledby="exampleModalLabel" 
         aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className={`modal-header ${dataContext.theme.title === 'dark' ? 'bg-primary' : ''}`}>
        <h4 className="modal-title" id="exampleModalLabel"><strong>Alert!!!</strong></h4>
        <button type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close"></button>
      </div>
      <div className="modal-body">{dataContext.alertMsg}</div>
      <div className="modal-footer">
        <button type="button" 
                className="btn btn-primary"
                data-bs-dismiss="modal">Cancel</button>
      </div>
    </div>
    </div>
    </div>   
  )
}
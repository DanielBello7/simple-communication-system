


import { useContext } from "react";
import { DataContext } from "../context/MainContext";

export default function Toast() {
  const dataContext = useContext(DataContext);

  return (
    <div className="toast-container">
    <div className="position-fixed top-0 end-0 p-3" style={{zIndex: "11"}}>
    <div id="liveToast" 
         className={`toast ${dataContext.theme.background}`} 
         role="alert" 
         aria-live="assertive" 
         aria-atomic="true">
      <div className="toast-header bg-primary text-white">
        <img src="" className="rounded me-2" alt="..." />
        <strong className="me-auto">New Message</strong>
        <small>Just now</small>
        <button type="button" 
                className="btn-close white" 
                data-bs-dismiss="toast" 
                aria-label="Close"></button>
      </div>
      <div className={`toast-body ${dataContext.theme.background}`}>
        {dataContext.toastMsg}
      </div>
    </div>
    </div>
    </div>
  )
}
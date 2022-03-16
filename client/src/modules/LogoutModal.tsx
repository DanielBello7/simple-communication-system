


import { useContext } from "react";
import { DataContext } from "../context/MainContext";
import { UserContext } from "../context/UserContext";

export default function LogoutModal() {
  const dataContext = useContext(DataContext);
  const userContext = useContext(UserContext);
  return (
    <div className={`modal fade ${dataContext.theme.title==='dark'?'text-dark':''}`} id="logoutModal" 
         tabIndex={-1} 
         data-bs-backdrop="static" 
         data-bs-keyboard="false"
         aria-labelledby="lgloutModalLabel" 
         aria-hidden="true">
    <div className="modal-dialog">
    <div className="modal-content">
      <div className={`modal-header ${dataContext.theme.title==='dark'?'bg-primary':''} ${dataContext.theme.text}`}>
        <h5 className="modal-title" id="exampleModalLabel">Logout</h5>
        <button type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close"></button>
      </div>
      <div className="modal-body">Are you sure you want to logout?</div>
      <div className="modal-footer">
        <button type="button" 
                className="btn btn-secondary" 
                data-bs-dismiss="modal" 
                onClick={() => userContext?.LogoutUser()}>Logout
        </button>
        <button type="button" 
                className="btn btn-primary" 
                data-bs-dismiss="modal">Cancel
        </button>
      </div>
    </div>
    </div>
    </div>
  )
}



import { useContext } from "react";
import { ConversationsContext } from "../context/ConversationsContext";
import { DataContext } from "../context/MainContext";
import InfoModal from "./InfoModal";

export default function MoreInfoModal() {
  const { theme } = useContext(DataContext);
  const { selectedConversation } = useContext(ConversationsContext);
  return (
    <div className={`modal fade ${theme.title==='dark'?'text-dark':''}`} id="moreInfoModal" 
         tabIndex={-1} 
         data-bs-backdrop="static" 
         data-bs-keyboard="false"
         aria-labelledby="moreInfoModal" 
         aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className={`modal-header ${theme.title==='dark'?'bg-primary':''} ${theme.text}`}>
        <h3 className="modal-title fw-bold" id="moreInfoModal">
          {selectedConversation.recipients.length > 1 ? "Group Information" : "Contact Information"}
        </h3>
        <button type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <InfoModal />
      </div>
      <div className="modal-footer">
        <button type="button" 
                className="btn btn-primary" 
                data-bs-dismiss="modal">Close
        </button>
      </div>
    </div>
    </div>
    </div>
  )
}



import { useContext } from "react";
import { DataContext } from "../context/MainContext";
import { ConversationsContext } from "../context/ConversationsContext"; 
import toUpperFirst from "../lib/toUpperFirst";

export default function DeleteConversationModal() {
  const { theme } = useContext(DataContext);
  const { selectedConversation } = useContext(ConversationsContext);

  const recipient = selectedConversation.recipients.map(recipient => {
    if (typeof recipient === 'string') return recipient;
    return `${toUpperFirst(recipient.first_name)} ${toUpperFirst(recipient.last_name)}`;
  });


  return (
    <div className={`modal fade text-dark`} id="deleteConversationModal"
         tabIndex={-1}
         aria-labelledby="deleteConversationModal"
         aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className={`modal-header ${theme.title==='dark'?'text-white bg-primary':''}`}>
      <h5 className="modal-title h4"
          id="deleteConversationModal">Delete Chat
      </h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div className="modal-body">
      {
        selectedConversation.groupName 
        ? <div>
            <p className="p-0 m-0">Delete <span className="text-danger">"{selectedConversation.groupName}"</span> Group?</p>
            <p className="text-muted" style={{fontSize: '0.7rem'}}>
              Note: You automatically are removed from the group when you delete group chats
            </p>
          </div>
        : <div>
            <p className="p-0 m-0">Delete chat with <span className="text-danger">"{recipient}"</span> ?</p>
            <p className="text-muted" style={{fontSize: '0.7rem'}}>Note: You will lose all your messages</p>
          </div>
      }
      </div>
      
      <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" className="btn btn-danger">Delete</button>
      </div>
    </div>
    </div>
    </div>
  )
}



import { useContext } from "react";
import { Screen } from "../../types/GeneralTypes.types";
import { ConversationsContext } from "../../context/ConversationsContext";
import { DataContext } from "../../context/MainContext";
import toUpperFirst from "../../lib/toUpperFirst";
import { Modal } from "bootstrap";

export default function OpenConversationHeader() {
  const convo = useContext(ConversationsContext);
  const { theme, activeScreen } = useContext(DataContext);

  const showInfo = () => {
    const element = document.getElementById("moreInfoModal")!;
    const modal = Modal.getOrCreateInstance(element, {keyboard: false});
    modal.show();
  }

  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">
        {
          activeScreen === Screen.POST 
          ? "Post"
          : activeScreen === Screen.GENERAL
          ? ""
          : activeScreen === Screen.CHAT
          ? convo.selectedConversation.groupName 
          ? convo.selectedConversation.groupName 
          : convo.selectedConversation.recipients.map(recipient => {
            if (typeof recipient === 'string') return recipient;
            return `${toUpperFirst(recipient.first_name)} ${toUpperFirst(recipient.last_name)}`;
          })
          : ""
        }
      </h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        {
          activeScreen === Screen.CHAT
          ?<div className="btn-group me-2">
            <button type="button" 
                    className="btn btn-sm btn-outline-secondary" 
                    data-bs-toggle="tooltip" 
                    data-bs-placement="top" 
                    title="Not available yet">
            <i className="fas fa-phone" />  
            </button>
            <button type="button" 
                    className="btn btn-sm btn-outline-secondary" 
                    data-bs-toggle="tooltip" 
                    data-bs-placement="top" 
                    title="Not available yet">
            <i className="fas fa-video" />  
            </button>
          </div>
          : null
        }
      <div className="dropdown">
      <button type="button" 
              className="btn btn-sm btn-outline-secondary dropdown-toggle"
              id="dropdownRightMenuButton" 
              data-bs-toggle="dropdown" 
              aria-expanded="false">
        <span data-feather="calendar"></span>More
      </button>
      {
        activeScreen === Screen.CHAT
        ? <ul className={`dropdown-menu dropdown-menu-end ${theme.title === 'dark' ? 'dropdown-menu-dark': ''}`} 
              aria-labelledby="dropdownRightMenuButton">
          <li><button className="btn dropdown-item" onClick={() => showInfo()}>
            {
              convo.selectedConversation.groupName
              ? `Info about ${convo.selectedConversation.groupName}`
              : `Info about ${convo.selectedConversation.recipients.map(recipient => {
                if (typeof recipient === 'string') return recipient;
                return `${toUpperFirst(recipient.first_name)} ${toUpperFirst(recipient.last_name)}`;
              })}`
            }
          </button></li>
          <li><hr className="dropdown-divider"/></li> 
          <li>
            <button className="btn dropdown-item text-danger" 
                    data-bs-toggle="modal" 
                    data-bs-target="#deleteConversationModal">Delete chat</button>
          </li>
        </ul>
        : <ul className={`dropdown-menu dropdown-menu-end ${theme.title === 'dark' ? 'dropdown-menu-dark': ''}`}
              aria-labelledby="dropdownRightMenuButton">
          <li><button className="btn dropdown-item">Like post</button></li>
          <li><button className="btn dropdown-item">Dislike post</button></li>
          <li><hr className="dropdown-divider"/></li>
          <li>
            <button className="btn dropdown-item" 
                    data-bs-toggle="modal" 
                    data-bs-target="#sharePostModal">Share post</button>
          </li>
        </ul>
      }
      
      </div>
    </div>
    </div>
  )
}
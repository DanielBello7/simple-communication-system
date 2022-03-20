


import { useContext } from "react";
import { ConversationsContext } from "../../context/ConversationsContext";
import toUpperFirst from "../../lib/toUpperFirst";
import { Screen } from "./Dashboard";

export type OpenConversationHeaderProps = {
  activeScreen: Screen
}

export default function OpenConversationHeader(props: OpenConversationHeaderProps) {
  const convo = useContext(ConversationsContext);

  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">
        {
          props.activeScreen === Screen.CHAT
          ? convo.selectedConversation.groupName 
          ? convo.selectedConversation.groupName 
          : convo.selectedConversation.recipients.map(recipient => {
            if (typeof recipient === 'string') return recipient;
            return `${toUpperFirst(recipient.first_name)} ${toUpperFirst(recipient.last_name)}`;
          })
          : "Post"
        }
      </h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        {
          props.activeScreen === Screen.CHAT
          ?<div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
            <i className="fas fa-phone" />  
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
            <i className="fas fa-video" />  
            </button>
          </div>
          : null
        }
      <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
        <span data-feather="calendar"></span>More
      </button>
    </div>
    </div>
  )
}
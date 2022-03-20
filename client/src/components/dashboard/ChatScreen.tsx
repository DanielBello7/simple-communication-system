


import { useContext, useRef, useState } from "react";
import { ConversationsContext } from "../../context/ConversationsContext";
import TextBubble from "./TextBubble"
import ComponentLoader from "../ComponentLoader";


export default function ChatScreen() {
  const [chatLoading, setChatLoading] = useState(false);

  const convo = useContext(ConversationsContext);

  const textRef = useRef<HTMLTextAreaElement>(null);

  const messagesOutput = convo.selectedConversation.messages.map((message, index) => {
    let reply = null;
    if(message.reply) reply = convo.selectedConversation.messages.find(msg => msg._id === message.reply);
    return <TextBubble message={message} key={index} reply={reply}/>
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    alert(textRef.current?.value);
    event.currentTarget.reset();
  }

  return (
    <div className="w-100 h-100 mb-3 d-flex flex-column" id="chat-window">
      <div className="w-100 d-flex mb-1 flex-column flex-grow-1 overflow-scroll" id="main-window">
      { chatLoading ? <ComponentLoader /> : messagesOutput }
      </div>
      
      <div className="w-100" id="input-window">
      <form className="w-100 d-flex border border-black border-1 rounded-3" onSubmit={handleSubmit}>
      <div className="form-floating w-100">
      <textarea className="form-control border-0" 
                placeholder="Write Something..." 
                id="floatingTextarea2" 
                required
                ref={textRef}
                style={{height: "100px"}}>
      </textarea>
      <label htmlFor="floatingTextarea2">Write Something...</label>
      </div>
      <button className="btn btn-outline-black text-black chat-sub-but">
      <i className="fas fa-paper-plane fa-lg"/>  
      </button>
      </form>
      </div>
    </div>
  )
}
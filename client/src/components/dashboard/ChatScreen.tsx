
 
 
import { useContext, useRef, useState, useCallback } from "react";
import TextBubble from "./TextBubble"
import ComponentLoader from "../ComponentLoader";
import { DataContext } from "../../context/MainContext";
import { ConversationsContext } from "../../context/ConversationsContext";
import { ContactMessage, Message, PostMessage } from '../../types/ConversationTypes.types';


export default function ChatScreen() {
  const [replyMsg, setReplyMsg] = useState<Message | PostMessage | ContactMessage | null>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const { selectedConversation } = useContext(ConversationsContext);
  const { theme, chatLoading } = useContext(DataContext);


  const setRef = useCallback((node): void => {
    if (node) node.scrollIntoView();
  }, []);

  const showMessage = (id: string | undefined): void => {
    if (id) {
      const element = document.getElementById(id);
      element?.scrollIntoView({behavior: 'smooth'});
      element?.style.setProperty('opacity', '0.3');
      setTimeout(() => {
        element?.style.setProperty('opacity', '1');
      }, 500);
    }
  }
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    alert(textRef.current?.value);
    event.currentTarget.reset();
    setReplyMsg(null);
  }

  const messagesOutput = selectedConversation.messages.map((message, index) => {
    let reply = null;
    const lastMessage = selectedConversation.messages.length - 1 === index;
    if(message.reply) reply = selectedConversation.messages.find(msg => msg._id === message.reply);
    return <TextBubble message={message} 
                       key={index} 
                       reply={reply} 
                       setReplyMsg={setReplyMsg} 
                       showMessage={showMessage}
                       point={lastMessage ? setRef : null}/>
  });

  let replyMessage = selectedConversation.messages.find(msg => msg._id === replyMsg?._id);

  return (
    <div className="w-100 h-100 mb-3 d-flex flex-column" id="chat-window">
      <div className="w-100 d-flex mb-1 flex-column flex-grow-1 overflow-scroll" id="main-window">
      { chatLoading ? <ComponentLoader /> : messagesOutput }
      </div>
      
      <div className="w-100" id="input-window">
      {
        replyMsg 
        ? <span id="close-reply" onClick={() => setReplyMsg(null)}>Clear</span>
        : null
      }
      <form className={`w-100 d-flex ${theme.title==='dark'?'':'border'} rounded-3`} onSubmit={handleSubmit}>
      <div className="form-floating w-100">
      <textarea className={`form-control border-0 ${theme.title==='dark'?'bg-black bg-opacity-25':''}`} 
                placeholder="Write Something..." 
                id="floatingTextarea2" 
                required
                ref={textRef}
                style={{height: "100px", color: 'grey'}}>
      </textarea>
      <label htmlFor="floatingTextarea2 text-truncate" id="label-header">
        <span className="text-truncate">
        { !replyMsg ? 'Write Something...' : `Replying: ${replyMessage?.text || "Message"}` }
        </span>
      </label>
      </div>
      <button className={`btn btn-outline-black ${theme.text} ${theme.title==='dark'&&'bg-primary'} chat-sub-but`}>
      <i className="fas fa-paper-plane fa-lg"/>  
      </button>
      </form>
      </div>
    </div>
  )
}
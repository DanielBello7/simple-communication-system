


import { useContext } from 'react';
import { ContactMessage, Message, MessageType, PostMessage } from '../../types/ConversationTypes.types';
import { DataContext } from '../../context/MainContext';
import PostMessageTextBubble from './PostMessageTextBubble';
import ContactMessageTextBubble from './ContactMessageTextBubble';
import MediaMessageTextBubble from './MediaMessageTextBubble';
import toUpperFirst from '../../lib/toUpperFirst';

type UserTextBubbleProps = {
  message: Message | PostMessage | ContactMessage,
  reply?: Message | PostMessage | ContactMessage | null,
  showMessage: (data: string) => void,
  setReplyState: (data: Message | PostMessage | ContactMessage) => void,
  point?: React.LegacyRef<HTMLDivElement> | null
}

export default function UserTextBubble({ message, reply, showMessage, setReplyState, point }: UserTextBubbleProps) {
  const { theme } = useContext(DataContext);

  if (message.type === MessageType.POST) 
    return <PostMessageTextBubble sender='user' 
                                  message={message} 
                                  reply={reply} 
                                  setReplyState={setReplyState}
                                  showMessage={showMessage}
                                  point={point}/>
  else if (message.type === MessageType.CONTACT) 
    return <ContactMessageTextBubble sender='user' 
                                  message={message} 
                                  reply={reply} 
                                  setReplyState={setReplyState}
                                  showMessage={showMessage}
                                  point={point}/>
  else if (message.type === MessageType.MEDIA) 
    return <MediaMessageTextBubble sender='user' 
                                  message={message} 
                                  reply={reply} 
                                  setReplyState={setReplyState}
                                  showMessage={showMessage}
                                  point={point}/>
  else return (
    <div className="text-bubble-me" key={message._id}>
      { 
        reply 
        ?
        <span className={`text-container-reply-me m-0 mt-4 p-3 ${theme.title==='dark'?'bg-black bg-opacity-50':'bg-light'}`} 
              onClick={() => showMessage(reply?._id)}>
          <p className="reply-text m-0 p-0 text-truncate"><strong>Replied:</strong> {reply?.text}</p>
          {
            typeof reply.sender === 'string' 
            ? reply.sender 
            : `${toUpperFirst(reply.sender.first_name)} ${toUpperFirst(reply.sender.last_name)}`
          }  
        </span>
        : null
      }


      <span className={`text-container bg-primary text-white ${theme.title==='dark'?'border-0':''}`} 
            onClick={() => setReplyState(message)}
            id={message._id}
            ref={point}
            style={{
              borderTopRightRadius: reply?'0px': '10px',
              borderTopLeftRadius: reply?'0px': '10px'
            }}>
      <p className="text">{message.text}</p>
      <p className="text-time text-white">{message.date.toDateString()}</p>
      <p className="text-sender text-dark">Me</p>
      </span>
      </div>
  )
}
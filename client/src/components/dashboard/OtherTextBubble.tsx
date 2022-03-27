


import { useContext } from 'react';
import { Message, MessageType, PostMessage, ContactMessage } from '../../types/ConversationTypes.types';
import { DataContext } from '../../context/MainContext';
import toUpperFirst from '../../lib/toUpperFirst';
import PostMessageTextBubble from './PostMessageTextBubble';
import ContactMessageTextBubble from './ContactMessageTextBubble';
import MediaMessageTextBubble from './MediaMessageTextBubble';

type OtherTextBubbleProps = {
  message: Message | ContactMessage | PostMessage,
  reply?: Message | null | ContactMessage | PostMessage,
  showMessage: (data: string) => void,
  setReplyState: (data: Message | PostMessage | ContactMessage) => void,
  point?: React.LegacyRef<HTMLDivElement> | null
}

export default function OtherTextBubble({ message, reply, showMessage, setReplyState, point }: OtherTextBubbleProps) {
  const { theme } = useContext(DataContext);
  if (message.type === MessageType.POST) 
    return <PostMessageTextBubble sender='other' 
                                  message={message} 
                                  reply={reply} 
                                  showMessage={showMessage} 
                                  setReplyState={setReplyState} 
                                  point={point}/>
  else if (message.type === MessageType.CONTACT) 
    return <ContactMessageTextBubble sender='other' 
                                  message={message} 
                                  reply={reply} 
                                  showMessage={showMessage} 
                                  setReplyState={setReplyState} 
                                  point={point}/>
  else if (message.type === MessageType.MEDIA) 
    return <MediaMessageTextBubble sender='other' 
                                  message={message} 
                                  reply={reply} 
                                  showMessage={showMessage} 
                                  setReplyState={setReplyState} 
                                  point={point}/>
  else return (
    <div className="text-bubble" key={message._id}>
    { 
      reply 
      ?
      <span className={`text-container-reply m-0 mt-4 p-3 bg-light ${theme.title==='dark'?'bg-grey bg-opacity-25':'bg-light'}`} 
            onClick={() => showMessage(reply?._id)}>
        <p className="reply-text m-0 p-0 text-truncate"><strong>Replied:</strong> {reply?.text}</p>
        <p className="reply-text-time m-0 p-0">
        {
          typeof reply.sender === 'string' 
          ? reply.sender 
          : `${toUpperFirst(reply.sender.first_name)} ${toUpperFirst(reply.sender.last_name)}`
        }  
        </p>
      </span>
      : null
    }

    <span className={`text-container ${theme.title==='dark'?'border-0 bg-black bg-opacity-25':''}`} 
          onClick={() => setReplyState(message)} 
          ref={point}
          id={message._id}
          style={{
            borderTopRightRadius: reply?'0px': '10px',
            borderTopLeftRadius: reply?'0px': '10px'
          }}>
      <p className="text">{message.text}</p>
      <p className="text-time">{message.date.toDateString()}</p>
      <p className="text-sender">
        {
          typeof message.sender === 'string' 
          ? message.sender 
          : `${toUpperFirst(message.sender.first_name)} ${toUpperFirst(message.sender.last_name)}`
        }
      </p>
    </span>
    </div>
  )
}
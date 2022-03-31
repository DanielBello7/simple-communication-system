


import { useContext } from "react";
import { DataContext } from "../../context/MainContext";
import { Modal } from "bootstrap";
import toUpperFirst from "../../lib/toUpperFirst";
import { 
  Message, 
  PostMessage, 
  ContactMessage, 
  MediaMessage 
} from '../../types/ConversationTypes.types';

type MediaMessageTextBubbleType = {
  sender: "user" | "other",
  message: MediaMessage,
  reply?: Message | ContactMessage | PostMessage | null,
  showMessage: (data: string) => void,
  setReplyState: (data: Message | PostMessage | ContactMessage) => void,
  point?: React.LegacyRef<HTMLDivElement> | null
}

export default function MediaMessageTextBubble({ sender, message, point, showMessage, reply }: MediaMessageTextBubbleType) {
  const { theme, setModalImage } = useContext(DataContext);
  
  const handleClick = (img: string) => {
    const element = document.getElementById("imageViewerModal")!;
    const imageModal = Modal.getOrCreateInstance(element, {keyboard: false});
    setModalImage(img);
    imageModal.show();
  }

  if(sender === "user"){
    return (
      <div className="img-media-text-me mb-5 media-message-me">
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
      
        <div className={`card rounded-3 ${theme.title==="dark"&&"bg-black bg-opacity-50"}`} 
             id={message._id} 
             ref={point} 
             onClick={() => handleClick(message.media)}>
        <img src={require(`../../img/${message.media}`)} alt="user"/>
        <div className="card-footer text-end mb-0 pb-0">
        <p className="mb-0">{message.text}</p>
        <p className="mt-2 mb-0 text-muted text-end" style={{fontSize: '0.8rem'}}>{message.date.toDateString()}</p>
        <p className="mt-0 text-end" style={{fontSize: '0.8rem'}}>Me</p>
        </div>
        </div>
      </div>
    )
  }
  else return (
    <div className="img-media-text media-message">
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
      <div className={`card rounded-3 ${theme.title==="dark"&&"bg-black bg-opacity-50"}`} 
           id={message._id} 
           ref={point} 
           onClick={() => handleClick(message.media)}>
      <img src={require(`../../img/${message.media}`)} alt="other"/>
      <div className="card-footer mb-0 pb-0">
      <p className="mb-0">{message.text}</p>
      <p className="mt-2 mb-0 text-muted" style={{fontSize: '0.8rem'}}>{message.date.toDateString()}</p>
      <p className="mt-0" style={{fontSize: '0.8rem'}}>
        {
          typeof message.sender === 'string' 
          ? message.sender 
          : `${toUpperFirst(message.sender.first_name)} ${toUpperFirst(message.sender.last_name)}`
        }
      </p>
      </div>
      </div>
    </div>
  )
}
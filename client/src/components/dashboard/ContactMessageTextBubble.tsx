


import { useContext } from "react";
import { DataContext } from "../../context/MainContext";
import { Message, PostMessage, ContactMessage, MessageType } from '../../types/ConversationTypes.types';
import img from '../../img/IMG_2135.JPG';
import toUpperFirst from "../../lib/toUpperFirst";

type ContactMessageTextBubbleType = {
  sender: "user" | "other",
  message: ContactMessage,
  reply?: Message | ContactMessage | PostMessage | null,
  showMessage: (data: string) => void,
  setReplyState: (data: Message | ContactMessage) => void,
  point?: React.LegacyRef<HTMLDivElement> | null
}

export default function ContactMessageTextBubble({ 
  sender, 
  message, 
  reply, 
  showMessage,
  point 
}: ContactMessageTextBubbleType) {
  const { theme } = useContext(DataContext);
  const fullname = `${toUpperFirst(message.contact.first_name)} ${toUpperFirst(message.contact.last_name)}`;
  if(sender === "user"){
    return (
      <div className="contact-card-me">
        { 
          reply 
          ?
          <span className={`text-container-reply-me m-0 mt-4 p-3 ${theme.title==='dark'?'bg-black bg-opacity-50':'bg-light'}`} 
                onClick={() => showMessage(reply?._id)}>
            <p className="reply-text m-0 p-0 text-truncate"><strong>Replied:</strong> 
              { reply?.type === MessageType.POST ? reply.text : reply.text ? reply.text : "Post" }
            </p>
            <p className="reply-text-time m-0 p-0">{reply?.sender}</p>
          </span>
          : null
        }
        <div className={`card ${theme.title==='dark'?'bg-black bg-opacity-50':'bg-light bg-opacity-25'} contact-card-card`} 
             id={message._id}
             ref={point}>
        <div className="row g-0">
          <div className="col-md-4">
          <img src={img} alt="contact-img" className="contact-card-img"/>
          </div>

          <div className="col-md-8">
          <div className="card-body">
          <p className="card-text text-muted m-0">
            <small>Contact card</small>
          </p>
          <h5 className="card-title text-primary h3">{fullname}</h5>
          <p className="card-text">{message.contact.email}</p>
          <button className="btn btn-outline-primary">Add contact</button>
          </div>
          </div>
        </div>
        </div>

        {
          message.text
          ? <div className="w-100 mt-3 d-flex flex-column align-items-end text-end">
            <span className="rounded-3 py-2 px-3 bg-primary text-white"><small>{message.text}</small></span>
            </div>
          : null
        }

        <p className="mt-2 mb-0 text-muted" style={{alignSelf: 'flex-end', fontSize: '0.8rem'}}>{message.date.toDateString()}</p>
        <p className="mt-0" style={{alignSelf: 'flex-end', fontSize: '0.8rem'}}>Me</p>
      </div>
    )
  }
  else return (
    <div className="contact-card">
      { 
        reply 
        ?
        <span className={`text-container-reply m-0 mt-4 p-3 bg-light ${theme.title==='dark'?'bg-grey bg-opacity-25':'bg-light'}`} 
              onClick={() => showMessage(reply?._id)}>
          <p className="reply-text m-0 p-0 text-truncate"><strong>Replied:</strong>
          { reply?.type === MessageType.POST ? reply.text : reply.text ? reply.text : "Post" }
          </p>
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
      <div className={`card ${theme.title==='dark'?'bg-black bg-opacity-50':'bg-light bg-opacity-25'} contact-card-card`} 
           id={message._id}
          ref={point}>
      <div className="row g-0">
        <div className="col-md-4">
        <img src={img} alt="contact-img" className="contact-card-img"/>
        </div>

        <div className="col-md-8">
        <div className="card-body">
        <p className="card-text text-muted m-0">
          <small>Contact card</small>
        </p>
        <h5 className="card-title text-primary h3">{fullname}</h5>
        <p className="card-text">{message.contact.email}</p>
        <button className="btn btn-outline-primary">Add contact</button>
        </div>
        </div>
      </div>
      </div>

      {
        message.text
        ? <div className="w-100 mt-3 d-flex flex-column align-items-start text-start">
          <span className="rounded-3 py-2 px-3 bg-primary text-white"><small>{message.text}</small></span>
          </div>
        : null
      }

      <p className="mt-2 mb-0 text-muted" style={{alignSelf: 'flex-start', fontSize: '0.8rem'}}>{message.date.toDateString()}</p>
      <p className="mt-0" style={{alignSelf: 'flex-start', fontSize: '0.8rem'}}>
        {
          typeof message.sender === 'string' 
          ? message.sender 
          : `${toUpperFirst(message.sender.first_name)} ${toUpperFirst(message.sender.last_name)}`
        }
      </p>
    </div>
  )
}
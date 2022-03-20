


import { useContext } from "react";
import { Message } from "../../types/ConversationTypes.types";
import { UserContext } from '../../context/UserContext';
import toUpperFirst from '../../lib/toUpperFirst';

type TextBubbleProps = {
  message: Message
  reply?: Message | null,
  key: number
}

export default function TextBubble(props: TextBubbleProps){
  const user = useContext(UserContext);

  if (props.message.sender === user?.user?.email){
    return (
      <div className="text-bubble-me" key={props.message._id}>
        { 
          props.reply 
          ?
            <span className="text-container-reply-me m-0 mt-4 p-3 bg-light">
              <p className="reply-text m-0 p-0 text-truncate"><strong>Replied:</strong> {props.reply?.text}</p>
              <p className="reply-text-time m-0 p-0">{props.reply?.sender}</p>
            </span>
          : 
          null
        }


        <span className="text-container bg-primary text-white" style={{
          borderTopRightRadius: props.reply?'0px': '10px',
          borderTopLeftRadius: props.reply?'0px': '10px'
        }}>
        <p className="text">{props.message.text}</p>
        <p className="text-time text-white">{props.message.date.toDateString()}</p>
        <p className="text-sender text-dark">Me</p>
        </span>
      </div>
    )
  } else return (
    <div className="text-bubble" key={props.message._id}>
      { 
          props.reply 
          ?
            <span className="text-container-reply m-0 mt-4 p-3 bg-light">
              <p className="reply-text m-0 p-0 text-truncate"><strong>Replied:</strong> {props.reply?.text}</p>
              <p className="reply-text-time m-0 p-0">
              {
                typeof props.reply.sender === 'string' 
                ? props.reply.sender 
                : `${toUpperFirst(props.reply.sender.first_name)} ${toUpperFirst(props.reply.sender.last_name)}`
              }  
              </p>
            </span>
          : 
          null
        }

      <span className="text-container" style={{
          borderTopRightRadius: props.reply?'0px': '10px',
          borderTopLeftRadius: props.reply?'0px': '10px'
        }}>
      <p className="text">{props.message.text}</p>
      <p className="text-time">{props.message.date.toDateString()}</p>
      <p className="text-sender">
        {
          typeof props.message.sender === 'string' 
          ? props.message.sender 
          : `${toUpperFirst(props.message.sender.first_name)} ${toUpperFirst(props.message.sender.last_name)}`
        }
      </p>
      </span>
    </div>
  )
}
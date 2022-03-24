


import { useContext } from "react";
import { Message } from "../../types/ConversationTypes.types";
import { UserContext } from '../../context/UserContext';
import toUpperFirst from '../../lib/toUpperFirst';
import { DataContext } from '../../context/MainContext';

type TextBubbleProps = {
  message: Message
  reply?: Message | null,
  key: number,
  showMessage: (id: string | undefined) => void,
  point?: React.LegacyRef<HTMLDivElement> | null,
  setReplyMsg: React.Dispatch<React.SetStateAction<Message | null>>
}

export default function TextBubble(props: TextBubbleProps){
  const user = useContext(UserContext);
  const { theme } = useContext(DataContext);
  const setReplyState = (msg: Message): void => props.setReplyMsg(msg);


  if (props.message.sender === user?.user?.email){
    return (
      <div className="text-bubble-me" key={props.message._id}>
      { 
        props.reply 
        ?
        <span className={`text-container-reply-me m-0 mt-4 p-3 ${theme.title==='dark'?'bg-black bg-opacity-50':'bg-light'}`} onClick={() => props.showMessage(props.reply?._id)}>
          <p className="reply-text m-0 p-0 text-truncate"><strong>Replied:</strong> {props.reply?.text}</p>
          <p className="reply-text-time m-0 p-0">{props.reply?.sender}</p>
        </span>
        : null
      }


      <span className={`text-container bg-primary text-white ${theme.title==='dark'?'border-0':''}`} 
            onClick={() => setReplyState(props.message)}
            id={props.message._id}
            ref={props.point}
            style={{
              borderTopRightRadius: props.reply?'0px': '10px',
              borderTopLeftRadius: props.reply?'0px': '10px'
            }}>
      <p className="text">{props.message.text}</p>
      <p className="text-time text-white">{props.message.date.toDateString()}</p>
      <p className="text-sender text-dark">Me</p>
      </span>
      </div>
    )
  } 
  else return (
    <div className="text-bubble" key={props.message._id}>
    { 
      props.reply 
      ?
      <span className={`text-container-reply m-0 mt-4 p-3 bg-light ${theme.title==='dark'?'bg-grey bg-opacity-25':'bg-light'}`} onClick={() => props.showMessage(props.reply?._id)}>
        <p className="reply-text m-0 p-0 text-truncate"><strong>Replied:</strong> {props.reply?.text}</p>
        <p className="reply-text-time m-0 p-0">
        {
          typeof props.reply.sender === 'string' 
          ? props.reply.sender 
          : `${toUpperFirst(props.reply.sender.first_name)} ${toUpperFirst(props.reply.sender.last_name)}`
        }  
        </p>
      </span>
      : null
    }

    <span className={`text-container ${theme.title==='dark'?'border-0 bg-black':''}`} 
            onClick={() => setReplyState(props.message)} 
            ref={props.point}
            id={props.message._id}
            style={{
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
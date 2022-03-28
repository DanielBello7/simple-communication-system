


import { useContext } from "react";
import { PostMessage, ContactMessage, Message } from "../../types/ConversationTypes.types";
import { UserContext } from '../../context/UserContext';
import UserTextBubble from "./UserTextBubble";
import OtherTextBubble from "./OtherTextBubble";
 
type TextBubbleProps = {
  message: Message | PostMessage | ContactMessage,
  reply?: Message | PostMessage | ContactMessage | null,
  showMessage: (id: string | undefined) => void,
  point?: React.LegacyRef<HTMLDivElement> | null,
  setReplyMsg: React.Dispatch<React.SetStateAction<Message | PostMessage | ContactMessage  | null>>
} 

export default function TextBubble(props: TextBubbleProps){
  const user = useContext(UserContext);
  const setReplyState = (msg: Message | PostMessage | ContactMessage ): void => props.setReplyMsg(msg);


  if (props.message.sender === user?.user?.email){
    return <UserTextBubble message={props.message} 
                           point={props.point} 
                           reply={props.reply} 
                           setReplyState={setReplyState} 
                           showMessage={props.showMessage} />
  } 
  else return <OtherTextBubble message={props.message} 
                               setReplyState={setReplyState} 
                               showMessage={props.showMessage}
                               point={props.point} 
                               reply={props.reply}/>
}
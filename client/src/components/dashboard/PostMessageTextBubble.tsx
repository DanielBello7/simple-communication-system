
 

import { useContext } from "react";
import { PostMessage, ContactMessage, Message } from '../../types/ConversationTypes.types';
import { PostsContext } from '../../context/PostsContext';
import MediaPostMsgTextBubble from "./MediaPostMsgTextBubble";
import TextPostMsgTextBubble from "./TextPostMsgTextBubble";
import { PostType } from "../../types/PostType.type";

type PostMessageTextBubbleType = {
  sender: "user" | "other",
  message: PostMessage,
  reply?: Message | ContactMessage | PostMessage | null,
  showMessage: (data: string) => void,
  setReplyState: (data: Message | PostMessage | ContactMessage) => void,
  point?: React.LegacyRef<HTMLDivElement> | null
}

export default function PostMessageTextBubble({ 
  sender, 
  message, 
  reply, 
  showMessage, 
  setReplyState, 
  point
}: PostMessageTextBubbleType) {
  const { state } = useContext(PostsContext);
  const postMsg = state.find(post => post._id === message.post);
  
  if(!postMsg) return null;

  if (sender === 'user'){
    if (message.postType === PostType.MEDIA && postMsg.type === PostType.MEDIA) 
      return <MediaPostMsgTextBubble from="user" 
                                     postMsg={postMsg} 
                                     reply={reply} 
                                     showMessage={showMessage} 
                                     setReplyState={setReplyState} 
                                     point={point} 
                                     message={message}/>
    if (message.postType === PostType.TEXT && postMsg.type === PostType.TEXT)
      return <TextPostMsgTextBubble from="user"
                                    postMsg={postMsg} 
                                    reply={reply} 
                                    showMessage={showMessage} 
                                    setReplyState={setReplyState} 
                                    point={point} 
                                    message={message}/>
    else return null;
  }
  else {
    if (message.postType === PostType.MEDIA && postMsg.type === PostType.MEDIA) 
    return <MediaPostMsgTextBubble from="other" 
                                   postMsg={postMsg} 
                                   reply={reply} 
                                   showMessage={showMessage} 
                                   setReplyState={setReplyState} 
                                   point={point}
                                   message={message}/>
    if (message.postType === PostType.TEXT && postMsg.type === PostType.TEXT)
      return <TextPostMsgTextBubble from="other" 
                                       postMsg={postMsg} 
                                       reply={reply} 
                                       showMessage={showMessage} 
                                       setReplyState={setReplyState}
                                       point={point} 
                                       message={message}/>
    else return null;
  }
}
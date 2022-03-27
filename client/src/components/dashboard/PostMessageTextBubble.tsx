


import { useContext } from "react";
import { Message, PostMessage, ContactMessage } from '../../types/ConversationTypes.types';
import { PostsContext } from '../../context/PostsContext';
import MediaPostMsgTextBubble from "./MediaPostMsgTextBubble";
import TextPostMsgTextBubble from "./TextPostMsgTextBubble";

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

  if (sender==='user'){
    if (message.postType === 'media') 
      return <MediaPostMsgTextBubble from="user" 
                                     postMsg={postMsg} 
                                     reply={reply} 
                                     showMessage={showMessage} 
                                     setReplyState={setReplyState} 
                                     point={point} 
                                     message={message}/>
    else return <TextPostMsgTextBubble from="user"
                                       postMsg={postMsg} 
                                       reply={reply} 
                                       showMessage={showMessage} 
                                       setReplyState={setReplyState} 
                                       point={point} 
                                       message={message}/>
  }
  else {
    if (message.postType === 'media') 
    return <MediaPostMsgTextBubble from="other" 
                                   postMsg={postMsg} 
                                   reply={reply} 
                                   showMessage={showMessage} 
                                   setReplyState={setReplyState} 
                                   point={point} 
                                   message={message}/>
    else return <TextPostMsgTextBubble from="other" 
                                       postMsg={postMsg} 
                                       reply={reply} 
                                       showMessage={showMessage} 
                                       setReplyState={setReplyState} 
                                       point={point} 
                                       message={message}/>
  }
}
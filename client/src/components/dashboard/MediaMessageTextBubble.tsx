


import { useContext } from "react";
import { DataContext } from "../../context/MainContext";
import { Message, PostMessage, ContactMessage, MediaMessage } from '../../types/ConversationTypes.types';

type MediaMessageTextBubbleType = {
  sender: "user" | "other",
  message: MediaMessage,
  reply?: Message | ContactMessage | PostMessage | null,
  showMessage: (data: string) => void,
  setReplyState: (data: Message | PostMessage | ContactMessage) => void,
  point?: React.LegacyRef<HTMLDivElement> | null
}

export default function MediaMessageTextBubble({ sender }: MediaMessageTextBubbleType) {
  const { theme } = useContext(DataContext);
  if(sender === "user"){
    return (
      <div className="img-media-text-me">
        srvvoo
      </div>
    )
  }
  else return (
    <div className="img-media-text">
      ovrorbo 2
    </div>
  )
}



import { useContext } from "react";
import { DataContext } from "../../context/MainContext";
import { Message, PostMessage, ContactMessage } from '../../types/ConversationTypes.types';

type MediaMessageTextBubbleType = {
  sender: "user" | "other",
  message: Message,
  reply?: Message | ContactMessage | PostMessage | null,
  showMessage: (data: string) => void,
  setReplyState: (data: Message) => void,
  point?: React.LegacyRef<HTMLDivElement> | null
}

export default function MediaMessageTextBubble({ sender }: MediaMessageTextBubbleType) {
  const { theme } = useContext(DataContext);
  if(sender === "user"){
    return (
      <div className="img-media-text-me">

      </div>
    )
  }
  else return (
    <div className="img-media-text">

    </div>
  )
}



import OpenConversationHeader from "./OpenConversationHeader";
import DefaultScreen from "./DefaultScreen";
import ChatScreen from "./ChatScreen";
import PostScreen from "./PostScreen";
import { Screen } from './Dashboard';

type OpenConversationProps = {
  activeScreen: Screen,
  setActiveScreen: React.Dispatch<React.SetStateAction<Screen>>
}

export default function OpenConversation(props: OpenConversationProps) {
  if (props.activeScreen === Screen.DEFAULT) return <DefaultScreen />
  else return (
    <main className="col-md-8 ms-sm-auto d-flex flex-column col-lg-9 px-md-4 h-100" id="open-convo">
      <OpenConversationHeader activeScreen={props.activeScreen}/>
      <main className="w-100 h-100 d-flex flex-column flex-grow-1 overflow-scroll" id="open-2">
        {
          props.activeScreen === Screen.CHAT 
          ? <ChatScreen />
          : props.activeScreen === Screen.POST
          ? <PostScreen />
          : <DefaultScreen />
        }
      </main>
    </main>
  )
}
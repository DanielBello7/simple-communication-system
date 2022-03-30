


import { useContext } from "react";
import OpenConversationHeader from "./OpenConversationHeader";
import DefaultScreen from "./DefaultScreen";
import ChatScreen from "./ChatScreen";
import PostScreen from "./PostScreen";
import { Screen } from '../../types/GeneralTypes.types';
import GeneralScreen from "./GeneralScreen";
import { DataContext } from '../../context/MainContext';


export default function OpenConversation() {
  const { activeScreen } = useContext(DataContext);

  if (activeScreen === Screen.DEFAULT) return <DefaultScreen />
  else return (
    <main className="col-md-8 ms-sm-auto d-flex flex-column col-lg-9 px-md-4 h-100" 
          id="open-convo">
      <OpenConversationHeader />
      <main className="w-100 h-100 d-flex flex-column flex-grow-1 overflow-scroll" 
            id="open-2">
        {
          activeScreen === Screen.CHAT 
          ? <ChatScreen />
          : activeScreen === Screen.POST
          ? <PostScreen />
          : activeScreen === Screen.GENERAL
          ? <GeneralScreen />
          : <DefaultScreen />
        }
      </main>
    </main>
  )
}
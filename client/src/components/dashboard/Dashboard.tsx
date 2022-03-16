


import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import OpenConversation from "./OpenConversation";
// import { UserContext } from "../../context/UserContext";
// import { DataContext } from "../../context/MainContext";

export enum Tabs { HOME, CHATS, CONTACTS, USER }

export enum Screen { CHAT, CONTACT, POST, DEFAULT }

export default function Dashboard() {
  // const userContext = useContext(UserContext);
  // const dataContext = useContext(DataContext);

  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.HOME);

  const [activeScreen, setActiveScreen] = useState(Screen.DEFAULT);

  return (
    <div id="main" className="d-flex flex-column">
    <Header />
    <main className="container-fluid p-0 m-0 d-flex flex-grow-1" id="main-container">
      <div className="row d-flex flex-row p-0 m-0" id="innerBox">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} setActiveScreen={setActiveScreen}/>
      <OpenConversation activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>
      </div>
    </main>
    </div>
  )
}

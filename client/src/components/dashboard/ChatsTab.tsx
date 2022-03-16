


import { useState } from 'react';
import { Screen } from './Dashboard';

type ChatsProp = {
  setActiveScreen: React.Dispatch<React.SetStateAction<Screen>>
}

const chats = [
  'Dashboard',
  'Dashboard 1',
  'Dashboard 2',
  'Dashboard 3',
  'Dashboard 4',
  'Dashboard 5',
  'Dashboard 6',
  'Dashboard 7',
  'Dashboard 8',
  'Dashboard 9',
  'Dashboard 10',
  'Dashboard 11',
  'Dashboard 12',
  'Dashboard 13',
  'Dashboard 14',
  'Dashboard 15',
  'Dashboard 16',
]

export default function Chats(props: ChatsProp) {
  const [selected, setSelected] = useState("");

  const handleClick = (chat: string) => {
    props.setActiveScreen(Screen.CHAT);
    setSelected(chat);
  }

  const chatsOutput = chats.map((chat, index) => {
    return (
      <li className="nav-item py-3" onClick={() => handleClick(chat)} id="chat" key={index}>
      <p className={`m-0 p-1 nav-link ${selected === chat ? "active" : ""}`}
              aria-current={selected === chat ? "page" : "false"}>{chat}
      </p>
      </li>
    )
  });

  return (
    <ul className="nav w-100 h-100 d-flex flex-column overflow-scroll" id="scroll-container">
      {chatsOutput}
    </ul>
  )
}



import { useState } from 'react';
import { Screen } from './Dashboard';
type ContactsTabProp = {
  setActiveScreen: React.Dispatch<React.SetStateAction<Screen>>
}

const contacts = [
  'Contact',
  'Contact 1',
  'Contact 2',
  'Contact 3',
  'Contact 4',
  'Contact 5',
  'Contact 6',
  'Contact 7',
  'Contact 8',
  'Contact 9',
  'Contact 10',
  'Contact 11',
  'Contact 12',
  'Contact 13',
  'Contact 14',
  'Contact 15',
  'Contact 16',
]

export default function ContactsTab(props: ContactsTabProp) {
  const [selected, setSelected] = useState("");

  const handleClick = (contact: string) => {
    props.setActiveScreen(Screen.CONTACT);
    setSelected(contact);
  }

  const chatsOutput = contacts.map((contact, index) => {
    return (
      <li className="nav-item py-3" onClick={() => handleClick(contact)} id="chat" key={index}>
      <p className={`m-0 p-1 nav-link ${selected === contact ? "active" : ""}`}
              aria-current={selected === contact ? "page" : "false"}>{contact}
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
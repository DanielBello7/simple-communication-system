


import { useState } from 'react';
import { Screen } from './Dashboard';
type FeedTabProps = {
  setActiveScreen: React.Dispatch<React.SetStateAction<Screen>>
}

const feed = [
  'Feed Item',
  'Feed Item 1',
  'Feed Item 2',
  'Feed Item 3',
  'Feed Item 4',
  'Feed Item 5',
  'Feed Item 6',
  'Feed Item 7',
  'Feed Item 8',
  'Feed Item 9',
  'Feed Item 10',
  'Feed Item 11',
  'Feed Item 12',
  'Feed Item 13',
  'Feed Item 14',
  'Feed Item 15',
  'Feed Item 16',
]


export default function FeedTab(props: FeedTabProps) {
  const [selected, setSelected] = useState("");

  const handleClick = (feed: string) => {
    props.setActiveScreen(Screen.POST);
    setSelected(feed);
  }

  const chatsOutput = feed.map((feed, index) => {
    return (
      <li className="nav-item py-3" onClick={() => handleClick(feed)} id="chat" key={index}>
      <p className={`m-0 p-1 nav-link ${selected === feed ? "active" : ""}`}
              aria-current={selected === feed ? "page" : "false"}>{feed}
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
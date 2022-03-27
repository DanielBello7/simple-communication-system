


import { useState, useContext } from 'react';
import { Screen } from './Dashboard';
import { ConversationsContext } from '../../context/ConversationsContext';
import { ContactsContext } from '../../context/ContactsContext';
import toUpperFirst from '../../lib/toUpperFirst';
import img from '../../img/img-1.jpg';
import img1 from '../../img/users.svg'
import { UserContext } from '../../context/UserContext';
import ComponentLoader from '../ComponentLoader';
import { DataContext } from '../../context/MainContext';

type ChatsProp = {
  setActiveScreen: React.Dispatch<React.SetStateAction<Screen>>
}

export default function Chats(props: ChatsProp) {
  const conversationsContext = useContext(ConversationsContext);
  const contacts = useContext(ContactsContext);
  const userContext = useContext(UserContext);
  const [selected, setSelected] = useState<number | null>(null);
  const [chatsLoading, setChatsLoading] = useState(false);
  const { theme } = useContext(DataContext);

  const handleClick = (chat: number) => {
    props.setActiveScreen(Screen.CHAT);
    setSelected(chat)
    conversationsContext.setSelectedConversation(chat);
  }

  const chatsOutput = conversationsContext.formattedConversations.map((chat, index) => {
    return (
      <div className={`${theme.background} card mb-3 col-11 rounded-3 chat-box-2`} 
           style={{height: '95px', fontSize: '0.9rem'}} 
           onClick={() => handleClick(index)} 
           id="chat" 
           data-bs-toggle="collapse" 
					 data-bs-target="#sidebarMenu" 
					 aria-controls="sidebarMenu" 
           key={chat._id}>
      <div className="p-0 m-0 w-100 h-100 d-flex">
        <div className="col-3 p-0 m-0">
        <img src={chat.groupName ? img1 : img} 
             className="rounded-start p-1" 
             width="100%" 
             height="100%" 
             alt="dp" 
             style={{objectFit: 'cover'}} />
        </div>

        <div className="col-9 p-0 m-0">
        <div className="card-body p-3 d-flex flex-column justify-content-center w-100 h-100">
          <h6 className={`card-title mb-0 fw-bold ${selected === index ? "text-primary" : ""}`}>
            { 
              chat.groupName 
              ? chat.groupName
              : chat.recipients.map(recipient => {
                if (typeof recipient === 'string') return recipient;
                const name = contacts.state.find(contact => contact.email === recipient.email);
                return `${toUpperFirst(name?.first_name)} ${toUpperFirst(name?.last_name)}`
              }).join(', ') 
            }
          </h6>
          <p className="card-text mb-0 text-truncate p-0"><small>
            {
              chat.messages.map((message, index) => {
                if (index === (chat.messages.length -1)) 
                  return `${
                    typeof message.sender === 'string' 
                    ? message.sender === userContext?.user?.email 
                    ? "Me" 
                    : message.sender 
                    : toUpperFirst(message.sender.first_name)}: ${message.text ? message.text : 'Message'
                  }`
                return null;
              })
            }
          </small></p>
          <p className="card-text"><small className="text-muted">
          {
            chat.messages.map((message, index) => {
              if (index === (chat.messages.length -1)) return message.date.toDateString();
              return null;
            })
          }
          </small></p>
        </div>
        </div>
      </div>
      </div>
    )
  });

  return (
    <ul className="nav w-100 h-100 d-flex flex-column overflow-scroll" id="scroll-container">
      { chatsLoading ? <ComponentLoader /> : chatsOutput }
      <div className={`position-sticky w-100 ${conversationsContext.state.length > 6 ? 'bottom-0' : 'top-100'} end-0`}>
      <button className='btn bg-primary mb-3 mx-2 shadow rounded-circle p-0 text-white' 
              style={{width: '50px', height: '50px'}}
              data-bs-toggle="modal" 
              data-bs-target="#newConversationModal"
              id="floatingAction">
      <i className='fas fa-comment fa-sm' />
      </button>  
      </div>
    </ul>
  )
}
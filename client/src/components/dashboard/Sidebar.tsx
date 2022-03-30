


import { useContext } from "react";
import ChatsTab from "./ChatsTab";
import ContactsTab from "./ContactsTab";
import FeedTab from "./FeedTab";
import UserProfileTab from "./UserProfileTab";
import { Tabs } from "../../types/GeneralTypes.types";
import { DataContext } from "../../context/MainContext";

export default function Sidebar() {
  const { theme, activeTab, setActiveTab } = useContext(DataContext);
  
  return (
    <nav id="sidebarMenu" 
         className={`col-md-4 col-lg-3 d-md-flex d-lg-flex p-0 d-md-block ${theme.title === 'dark'? 'bg-black bg-opacity-50': 'bg-light'} sidebar collapse`}>
    <h2 className={`p-3 mb-0 ${theme.text}`}>
    <strong>
      {
        activeTab === Tabs.CHATS 
        ? "Chats"
        : activeTab === Tabs.CONTACTS  
        ? "Contacts"
        : activeTab === Tabs.HOME
        ? "Feed"
        : activeTab === Tabs.USER
        ? "Profile"
        : ""
      }
    </strong>
    </h2>
    <div className="pt-0 overflow-hidden" id="insideSideBar">
      {
        activeTab === Tabs.CHATS 
        ? <ChatsTab />
        : activeTab === Tabs.CONTACTS  
        ? <ContactsTab />
        : activeTab === Tabs.HOME
        ? <FeedTab />
        : activeTab === Tabs.USER
        ? <UserProfileTab />
        : ""
      }
    </div>
    <hr className="m-0 mb-2"/>
    <div id="tab-bar" className="w-100 h-auto p-2 pb-3">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item" onClick={() => setActiveTab(Tabs.HOME)}>
          <button className={`btn nav-link ${activeTab === Tabs.HOME ? 'active' : ''}`} 
             aria-current={activeTab===Tabs.HOME? 'page' : 'false'}
             style={{color: activeTab===Tabs.HOME? 'white' : ''}}>
          <i className="fas fa-house-user fa-lg"/>
          </button>
        </li>
        <li className="nav-item" onClick={() => setActiveTab(Tabs.CHATS)}>
          <button className={`btn nav-link ${activeTab === Tabs.CHATS ? 'active' : ''}`} 
             aria-current={activeTab===Tabs.CHATS? 'page' : 'false'}
             style={{color: activeTab===Tabs.CHATS? 'white' : ''}}>
          <i className="fas fa-comment-dots fa-lg"/>
          </button>
        </li>
        <li className="nav-item" onClick={() => setActiveTab(Tabs.CONTACTS)}>
          <button className={`btn nav-link ${activeTab === Tabs.CONTACTS ? 'active' : ''}`} 
             aria-current={activeTab===Tabs.CONTACTS? 'page' : 'false'}
             style={{color: activeTab===Tabs.CONTACTS? 'white' : ''}}>
          <i className="fas fa-address-book fa-lg"/>
          </button>
        </li>
        <li className="nav-item" onClick={() => setActiveTab(Tabs.USER)}>
          <button className={`btn nav-link ${activeTab === Tabs.USER ? 'active' : ''}`} 
             aria-current={activeTab===Tabs.USER? 'page' : 'false'}
             style={{color: activeTab===Tabs.USER? 'white' : ''}}>
          <i className="fas fa-user-circle fa-lg"/>   
          </button>
        </li>
      </ul>
    </div>
    </nav>
  )
}
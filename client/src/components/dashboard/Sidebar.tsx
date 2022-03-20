


import { useContext } from "react";
import { DataContext } from "../../context/MainContext";
import ChatsTab from "./ChatsTab";
import ContactsTab from "./ContactsTab";
import FeedTab from "./FeedTab";
import UserProfileTab from "./UserProfileTab";
import { Tabs, Screen } from './Dashboard';

type SideBarProps = {
  activeTab: Tabs,
  setActiveTab: React.Dispatch<React.SetStateAction<Tabs>>,
  setActiveScreen: React.Dispatch<React.SetStateAction<Screen>>
}

export default function Sidebar(props: SideBarProps) {
  const dataContext = useContext(DataContext);
  
  return (
    <nav id="sidebarMenu" className="col-md-4 col-lg-3 d-md-flex d-lg-flex p-0 d-md-block bg-light sidebar collapse">
    <h2 className={`p-3 mb-0 ${dataContext.theme.text}`}>
    <strong>
      {
        props.activeTab === Tabs.CHATS 
        ? "Chats"
        : props.activeTab === Tabs.CONTACTS  
        ? "Contacts"
        : props.activeTab === Tabs.HOME
        ? "Feed"
        : props.activeTab === Tabs.USER
        ? "Profile"
        : ""
      }
    </strong>
    </h2>
    <div className="pt-0 overflow-hidden" id="insideSideBar">
      {
        props.activeTab === Tabs.CHATS 
        ? <ChatsTab setActiveScreen={props.setActiveScreen}/>
        : props.activeTab === Tabs.CONTACTS  
        ? <ContactsTab />
        : props.activeTab === Tabs.HOME
        ? <FeedTab setActiveScreen={props.setActiveScreen}/>
        : props.activeTab === Tabs.USER
        ? <UserProfileTab />
        : ""
      }
    </div>
    <hr className="m-0 mb-2"/>
    <div id="tab-bar" className="w-100 h-auto p-2 pb-3">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item" onClick={() => props.setActiveTab(Tabs.HOME)}>
          <button className={`btn nav-link ${props.activeTab === Tabs.HOME ? 'active' : ''}`} 
             aria-current={props.activeTab===Tabs.HOME? 'page' : 'false'}
             style={{color: props.activeTab===Tabs.HOME? 'white' : ''}}>
          <i className="fas fa-house-user fa-lg"/>
          </button>
        </li>
        <li className="nav-item" onClick={() => props.setActiveTab(Tabs.CHATS)}>
          <button className={`btn nav-link ${props.activeTab === Tabs.CHATS ? 'active' : ''}`} 
             aria-current={props.activeTab===Tabs.CHATS? 'page' : 'false'}
             style={{color: props.activeTab===Tabs.CHATS? 'white' : ''}}>
          <i className="fas fa-comment-dots fa-lg"/>
          </button>
        </li>
        <li className="nav-item" onClick={() => props.setActiveTab(Tabs.CONTACTS)}>
          <button className={`btn nav-link ${props.activeTab === Tabs.CONTACTS ? 'active' : ''}`} 
             aria-current={props.activeTab===Tabs.CONTACTS? 'page' : 'false'}
             style={{color: props.activeTab===Tabs.CONTACTS? 'white' : ''}}>
          <i className="fas fa-address-book fa-lg"/>
          </button>
        </li>
        <li className="nav-item" onClick={() => props.setActiveTab(Tabs.USER)}>
          <button className={`btn nav-link ${props.activeTab === Tabs.USER ? 'active' : ''}`} 
             aria-current={props.activeTab===Tabs.USER? 'page' : 'false'}
             style={{color: props.activeTab===Tabs.USER? 'white' : ''}}>
          <i className="fas fa-user-circle fa-lg"/>   
          </button>
        </li>
      </ul>
    </div>
    </nav>
  )
}
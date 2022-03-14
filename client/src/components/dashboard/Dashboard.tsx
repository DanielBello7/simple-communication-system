


import { useContext } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import OpenConversation from "./OpenConversation";
import { UserContext } from "../../context/UserContext";
import { DataContext } from "../../context/MainContext";

export default function Dashboard() {
  const userContext = useContext(UserContext);
  const dataContext = useContext(DataContext);

  const handleToast = () => {
    dataContext.showToast('Hello, world! This is a toast message');
  }

  return (
    <div className="w-100 h-100" id="main">
      <Header />
      <h1>Dashboard</h1>
      <Sidebar />
      <OpenConversation />
      <button className="btn btn-primary" 
              data-bs-toggle="modal" 
              data-bs-target="#alertModal">
        Launch demo modal
      </button>

      <button type="button" 
              className="btn btn-primary" 
              id="liveToastBtn" 
              onClick={() => handleToast()}>Show live toast
      </button>


      <button onClick={() => dataContext.changeTheme()}>Change Theme</button>
      <button onClick={() => userContext?.LogoutUser()}>Logout</button>
    </div>
  )
}

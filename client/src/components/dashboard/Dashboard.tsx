



import Header from "./Header";
import Sidebar from "./Sidebar";
import OpenConversation from "./OpenConversation";
import OffCanvas from '../../modules/OffCanvas';
import Toast from '../../modules/Toast';
import Modals from '../../modules/Modals';

function Dashboard() {
  return (
    <div id="main" className="d-flex flex-column">
    <Header />
    <main className="container-fluid p-0 m-0 d-flex flex-grow-1" 
          id="main-container">
      <div className="row d-flex flex-row p-0 m-0" 
           id="innerBox">
      <Sidebar />
      <OpenConversation />
      <Modals />
      <Toast />
      <OffCanvas />
      </div>
    </main>
    </div>
  )
}

export default Dashboard;
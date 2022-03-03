


import React, { useContext } from 'react';
import UserAccount from './components/UserAccount';
import Dashboard from './components/dashboard/Dashboard';
import Modals from './modules/Modals';
import LoadingScreen from './components/LoadingScreen';
import { UserContext } from './context/UserContext';
import { DataContext } from './context/MainContext';
import { ConversationsContextProvider } from './context/ConversationsContext';
import { ContactsContextProvider } from './context/ContactsContext';
import { SocketContextProvider } from './context/SocketContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const userContext = useContext(UserContext);
  const dataContext = useContext(DataContext);
  const dashboard = (
    <SocketContextProvider>
    <ContactsContextProvider>
    <ConversationsContextProvider>
      <Dashboard />
    </ConversationsContextProvider>
    </ContactsContextProvider>
    </SocketContextProvider>
  );

  const userAccount = (
    <BrowserRouter>
    <UserAccount />
    </BrowserRouter>
  );
  
  return (
    <React.Fragment>
    {dataContext.isLoading ? <LoadingScreen /> : null}
    <Modals />
    {userContext?.user ? dashboard : userAccount}
    </React.Fragment>
  );
}
export default App;
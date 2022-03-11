


import React, { useContext } from 'react';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';
import Modals from './modules/Modals';
import LoadingScreen from './components/LoadingScreen';
import { UserContext } from './context/UserContext';
import { DataContext } from './context/MainContext';

function App() {
  const userContext = useContext(UserContext);
  const dataContext = useContext(DataContext);
  return (
    <React.Fragment>
    {dataContext.isLoading ? <LoadingScreen /> : null}
    <Modals />
    {userContext?.user ? <Dashboard /> : <Login />}
    </React.Fragment>
  );
}
export default App;
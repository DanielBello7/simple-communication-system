


import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { DataContext } from './MainContext';
import { UserContextType, UserData, UserType } from '../types/UserType.type';

type UserContextProps = {
  children: React.ReactNode
}

export const UserContext = React.createContext<UserContextType | null>(null);

export function UserContextProvider(props: UserContextProps){
  const dataContext = useContext(DataContext);

  const [user, setUser] = useLocalStorage<UserType | null>('user', null);

  function LoginUser(email: string, password: string): void {
    dataContext.setLoading(true);
    const userData = { email: email, password: password }
    setUser(userData);
    return dataContext.setLoading(false);
  }

  function LogoutUser(): void {
    dataContext.setLoading(true);
    setUser(null);
    if (dataContext.theme.title === 'dark') dataContext.changeTheme();
    return dataContext.setLoading(false);
  }

  function createAccount(data: UserData): void {
    dataContext.setLoading(true);
    dataContext.showAlert('Gotten');
    return dataContext.setLoading(false);
  }

  return (
    <UserContext.Provider value={{
      user, 
      LoginUser, 
      LogoutUser,
      createAccount
    }}>
      {props.children}
    </UserContext.Provider>
  )
}
export const UserContextConsumer = UserContext.Consumer;
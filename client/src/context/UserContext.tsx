


import React, { useContext } from 'react';
import { UserType } from '../types/UserType.type';
import useLocalStorage from '../hooks/useLocalStorage';
import { DataContext } from './MainContext';

type UserContextProps = {
  children: React.ReactNode
}

type UserContextType = {
  user: UserType | null,
  LoginUser: Function,
  LogoutUser: Function
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
    return dataContext.setLoading(false);
  }

  return (
    <UserContext.Provider value={{user, LoginUser, LogoutUser}}>
      {props.children}
    </UserContext.Provider>
  )
}
export const UserContextConsumer = UserContext.Consumer;
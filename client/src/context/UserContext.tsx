


import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { DataContext } from './MainContext';
import { UserContextType, UserData, UserType } from '../types/UserType.type';

type UserContextProps = {
  children: React.ReactNode
}

export const UserContext = React.createContext<UserContextType>({} as UserContextType);

export function UserContextProvider(props: UserContextProps){
  const [user, setUser] = useLocalStorage<UserType | null>('user', null);
  const dataContext = useContext(DataContext);

  function LoginUser(email: string, password: string): void {
    dataContext.setLoading(true);
    const userData: UserType = { 
      email: email, 
      password: password, 
      bio: 'Some quick example text to build on the card title and make up the bulk of the cards content.', 
      first_name: 'Goke', 
      last_name: 'Bello' 
    }
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
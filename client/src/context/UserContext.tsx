


import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { DataContext } from './MainContext';
import { UpdateType, UserContextType, UserData, UserType } from '../types/UserType.type';

type UserContextProps = {
  children: React.ReactNode
}

export const UserContext = React.createContext<UserContextType>({} as UserContextType);

export function UserContextProvider(props: UserContextProps){
  const [user, setUser] = useLocalStorage<UserType | null>('user', null);
  const { setLoading, showAlert, showToast, theme, changeTheme, } = useContext(DataContext);

  function LoginUser(email: string, password: string): void {
    setLoading(true);
    const userData: UserType = { 
      email: email, 
      password: password, 
      bio: 'Some quick example text to build on the card title and make up the bulk of the cards content.', 
      first_name: 'Goke', 
      last_name: 'Bello' 
    }
    setUser(userData);
    return setLoading(false);
  }

  function LogoutUser(): void {
    setLoading(true);
    setUser(null);
    if (theme.title === 'dark') changeTheme();
    return setLoading(false);
  }

  function UpdateUserInfo(data: UpdateType): void {
    setLoading(true)
    setUser((prevState: UserType) => {
      return {
        ...prevState, 
        first_name: data.firstname, 
        last_name: data.lastname,
        bio: data.bio
      }
    })
    showToast('Account Updated');
    setLoading(false);
  }

  function createAccount(data: UserData): void {
    setLoading(true);
    showAlert('Gotten');
    return setLoading(false);
  }

  return (
    <UserContext.Provider value={{
      user, 
      LoginUser, 
      LogoutUser,
      UpdateUserInfo,
      createAccount
    }}>
      {props.children}
    </UserContext.Provider>
  )
}
export const UserContextConsumer = UserContext.Consumer;
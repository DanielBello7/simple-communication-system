


import React, { useState } from 'react';
import { UserType } from '../types/UserType.type';
// import useLocalStorage from '../hooks/useLocalStorage';

export type UserContextType = {
  user: UserType | null,
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>
}

export const UserContext = React.createContext<UserContextType | null>(null);

type UserContextProps = {
  children: React.ReactNode
}

export function UserContextProvider(props: UserContextProps){
  const [user, setUser] = useState<UserType | null>(null);
  // const [user, setUser] = useLocalStorage('user', {});

  return (
    <UserContext.Provider value={{user, setUser}}>
      {props.children}
    </UserContext.Provider>
  )
}
export const UserContextConsumer = UserContext.Consumer;



import React, { useState} from 'react';

export type SocketContextPropType = {
  children: React.ReactNode
}

export type SocketContextType = {
  socket: {} | null,
  setSocket: React.Dispatch<React.SetStateAction<{} | null>>
}

const SocketContext = React.createContext<SocketContextType | null>(null);

export function SocketContextProvider(props: SocketContextPropType) {
  const [socket, setSocket] = useState<{} | null>(null);
  return (
    <SocketContext.Provider value={{socket, setSocket}}>
      {props.children}
    </SocketContext.Provider>
  )
}
export const SocketContextConsumer = SocketContext.Consumer;
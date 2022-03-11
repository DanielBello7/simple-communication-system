


import React, { useState } from 'react';

type DataContextProps = {
  children: React.ReactNode
}

type DataContextType = {
  isLoading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  address: string,
  alertMsg: string,
  showAlert: (msg: string) => void
}

const address = "http://localhost:5050";

export const DataContext = React.createContext<DataContextType>({} as DataContextType)

export function DataContextProvider(props: DataContextProps) {
  const [isLoading, setLoading] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  function showAlert(msg: string): void {
    setAlertMsg(msg);
  }
  return (
    <DataContext.Provider value={{
      isLoading,
      setLoading,
      address,
      alertMsg,
      showAlert
    }}>
      {props.children}
    </DataContext.Provider>
  )
}
export const DataContextConsumer = DataContext.Consumer;
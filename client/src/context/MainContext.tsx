


import React, { useState } from 'react';

type DataContextProps = {
  children: React.ReactNode
}

type DataContextType = {
  isLoading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const DataContext = React.createContext<DataContextType>({} as DataContextType)

export function DataContextProvider(props: DataContextProps) {
  const [isLoading, setLoading] = useState(!false);
  return (
    <DataContext.Provider value={{
      isLoading,
      setLoading
    }}>
      {props.children}
    </DataContext.Provider>
  )
}
export const DataContextConsumer = DataContext.Consumer;
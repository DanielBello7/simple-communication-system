


import React, { useState } from "react";

type GlobalContextProps = {
  children: React.ReactNode
}

type GlobalContextType = {
  globalState: boolean,
  setGlobalState: React.Dispatch<React.SetStateAction<boolean>>
}

export const GlobalContext = React.createContext<GlobalContextType>({} as GlobalContextType);

export function GlobalContexProvider({ children }: GlobalContextProps) {
  const [globalState, setGlobalState] = useState(false);
  return (
    <GlobalContext.Provider value={{
      globalState,
      setGlobalState
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const GlobalContexConsumer = GlobalContext.Consumer;
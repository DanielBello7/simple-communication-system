


import React, { useState } from 'react';
import { DarkTheme, LightTheme, Theme } from '../modules/Themes';
import { Modal, Toast } from 'bootstrap';

type DataContextProps = {
  children: React.ReactNode
}

type DataContextType = {
  isLoading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  address: string,
  alertMsg: string,
  toastMsg: string,
  showAlert: (msg: string) => void,
  showToast: (msg: string) => void,
  theme: Theme,
  changeTheme: Function,
  setMode: React.Dispatch<React.SetStateAction<boolean>>
}

const address = "http://localhost:5050";

export const DataContext = React.createContext<DataContextType>({} as DataContextType)

export function DataContextProvider(props: DataContextProps) {
  const [isLoading, setLoading] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [toastMsg, setToastMsg] = useState("");
  const [isLight, setIsLight] = useState(true);

  if (isLight) {
    document.body.classList.remove(`${DarkTheme.text}`);
    document.body.classList.remove(`${DarkTheme.background}`);
  }
  else document.body.className += ` ${DarkTheme.background} ${DarkTheme.text}`;

  const changeTheme = () => {
    setIsLight(prevState => !prevState);
  }

  function showAlert(msg: string): void {
    setAlertMsg(msg);
    const element = document.getElementById("alertModal")!;
    const modal = Modal.getOrCreateInstance(element, {keyboard: false});
    return modal.show();
  }
  
  function showToast(msg: string): void {
    setToastMsg(msg);
    var toastLiveExample = document.getElementById('liveToast')!
    var toast = Toast.getOrCreateInstance(toastLiveExample, {animation: true, autohide: true});
    return toast.show();
  }

  return (
    <DataContext.Provider value={{
      isLoading,
      setLoading,
      address,
      alertMsg,
      showAlert,
      toastMsg,
      theme: isLight ? LightTheme : DarkTheme,
      changeTheme,
      showToast,
      setMode: setIsLight
    }}>
      {props.children}
    </DataContext.Provider>
  )
}
export const DataContextConsumer = DataContext.Consumer;
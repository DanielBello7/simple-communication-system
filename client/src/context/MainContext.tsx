


import React, { useState } from 'react';
import { DarkTheme, LightTheme, Theme } from '../modules/Themes';
import { Modal, Toast } from 'bootstrap';
import { Screen, Tabs } from '../types/GeneralTypes.types';

type DataContextProps = {
  children: React.ReactNode
}

type DataContextType = {
  isLoading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  address: string,
  alertMsg: string,
  isLight: boolean,
  toastMsg: string,
  showAlert: (msg: string) => void,
  showToast: (msg: string) => void,
  theme: Theme,
  changeTheme: Function,
  search: Function,
  setMode: React.Dispatch<React.SetStateAction<boolean>>,
  activeScreen: Screen,
  setActiveScreen: React.Dispatch<React.SetStateAction<Screen>>,
  activeTab: Tabs,
  setActiveTab: React.Dispatch<React.SetStateAction<Tabs>>,
  chatLoading: boolean,
  setChatLoading: React.Dispatch<React.SetStateAction<boolean>>,
  chatsLoading: boolean,
  setChatsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  contactsLoading: boolean,
  setContactsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  feedLoading: boolean,
  setFeedLoading: React.Dispatch<React.SetStateAction<boolean>>,
  commentsLoading: boolean,
  setCommentsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  postLoading: boolean,
  setPostLoading: React.Dispatch<React.SetStateAction<boolean>>,
  modalImage: string | null,
  setModalImage:  React.Dispatch<React.SetStateAction<string | null>>
}

const address = "http://localhost:5050";

export const DataContext = React.createContext<DataContextType>({} as DataContextType)

export function DataContextProvider(props: DataContextProps) {
  const [isLoading, setLoading] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [toastMsg, setToastMsg] = useState("");
  const [isLight, setIsLight] = useState(true);
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.DEFAULT);
  const [activeTab, setActiveTab] = useState(Tabs.HOME);
  const [chatLoading, setChatLoading] = useState(false);
  const [chatsLoading, setChatsLoading] = useState(false);
  const [contactsLoading, setContactsLoading] = useState(false);
  const [feedLoading, setFeedLoading] = useState(false);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

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

  function search(item: string): void {
    showAlert(`You searched for ${item}`);
  }

  return (
    <DataContext.Provider value={{
      isLoading,
      setLoading,
      postLoading,
      setPostLoading,
      commentsLoading,
      setCommentsLoading,
      contactsLoading,
      modalImage,
      setModalImage,
      setContactsLoading,
      address,
      feedLoading,
      setFeedLoading,
      chatsLoading,
      setChatsLoading,
      chatLoading,
      setChatLoading,
      alertMsg,
      showAlert,
      toastMsg,
      theme: isLight ? LightTheme : DarkTheme,
      changeTheme,
      showToast,
      setMode: setIsLight,
      search,
      isLight,
      activeScreen,
      setActiveScreen,
      activeTab,
      setActiveTab
    }}>
      {props.children}
    </DataContext.Provider>
  )
}
export const DataContextConsumer = DataContext.Consumer;
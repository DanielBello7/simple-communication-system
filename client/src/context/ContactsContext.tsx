


import React, { useReducer } from 'react';
import {
  ContactsActions, 
  ContactsContextPropsType, 
  ContactsContextType, 
  InitialStateType, 
  ReducerActionType 
} from '../types/ContactsType.type';

const initialState: InitialStateType = {count: 0}

function reducer(state: InitialStateType, action: ReducerActionType) {
  switch(action.type){
    case ContactsActions.ADD:
      return {count: state.count + 1}
    case ContactsActions.DELETE:
      return {count: state.count - 1}
    default: 
      return state;
  }
}

const ContactsContext = React.createContext<ContactsContextType>({} as ContactsContextType);

export function ContactsContextProvider(props: ContactsContextPropsType) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContactsContext.Provider value={{state, dispatch}}>
      {props.children}
    </ContactsContext.Provider>
  )
}
export const ContactsContextConsumer = ContactsContext.Consumer;
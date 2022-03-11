


import React, { useReducer, useContext } from 'react';
import {
  ContactsActions, 
  ContactsContextPropsType, 
  ContactsContextType, 
  InitialStateType, 
  ReducerActionType 
} from '../types/ContactsType.type';
import { DataContext } from './MainContext';

const initialState: InitialStateType = []

const ContactsContext = React.createContext<ContactsContextType>({} as ContactsContextType);

export function ContactsContextProvider(props: ContactsContextPropsType) {
  const dataContext = useContext(DataContext);

  function reducer(state: InitialStateType, action: ReducerActionType) {
    switch(action.type){
      case ContactsActions.CREATE:
        if (state.includes(action.payload)) return state;
        return [...state, {...action.payload}];
      case ContactsActions.DELETE:
        const newContacts = state.filter(contact => contact !== action.payload);
        return [...newContacts];
      case ContactsActions.MODIFY:
        state.forEach(contact => {
          if (contact.email === action.payload.email) contact = action.payload;
        });
        return state;
      default: 
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContactsContext.Provider value={{state, dispatch}}>
      {props.children}
    </ContactsContext.Provider>
  )
}
export const ContactsContextConsumer = ContactsContext.Consumer;
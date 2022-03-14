


import React, { useReducer, useState } from 'react';
import {
  ContactsActions, 
  ContactsContextPropsType, 
  ContactsContextType, 
  InitialStateType, 
  ReducerActionType 
} from '../types/ContactsType.type';

const initialState: InitialStateType = []

export const ContactsContext = React.createContext<ContactsContextType>({} as ContactsContextType);

export function ContactsContextProvider(props: ContactsContextPropsType) {
  const [selectedContact, setSelectedContact] = useState(0);

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
    <ContactsContext.Provider value={{
      state, 
      dispatch,
      setSelectedContact,
      selectedContact: state[selectedContact]
    }}>
      {props.children}
    </ContactsContext.Provider>
  )
}
export const ContactsContextConsumer = ContactsContext.Consumer;
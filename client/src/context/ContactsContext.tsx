


import React, { useReducer, useState } from 'react';
import {
  ContactsActions, 
  ContactsContextPropsType, 
  ContactsContextType, 
  InitialStateType, 
  ReducerActionType,
  contactGroups,
  GroupedContact
} from '../types/ContactsType.type';
import { people } from '../temp/Contacts';

const initialState: InitialStateType = people;

export const ContactsContext = React.createContext<ContactsContextType>({} as ContactsContextType);

export function ContactsContextProvider(props: ContactsContextPropsType) {
  const [selectedContact, setSelectedContact] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

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

  const groupedContacts = contactGroups.map(group => {
    let box: GroupedContact[] = [];
    state.forEach((contact, index) => {
      const first_title = contact.first_name[0].toLocaleLowerCase();
      if (group === first_title) box.push({...contact, id: index});
    })
    return {groupTitle: group, groupChildren: box}
  });

  
  return (
    <ContactsContext.Provider value={{
      state, 
      dispatch,
      groupedContacts,
      setSelectedContact,
      selectedContact: state[selectedContact]
    }}>
      {props.children}
    </ContactsContext.Provider>
  )
}
export const ContactsContextConsumer = ContactsContext.Consumer;
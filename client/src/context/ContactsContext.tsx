


import React, { useReducer, useState, useContext } from 'react';
import { DataContext } from './MainContext';
import {
  ContactsActions, 
  ContactsContextPropsType, 
  ContactsContextType, 
  InitialStateType, 
  ReducerActionType,
  contactGroups,
  GroupedContact,
  Contact
} from '../types/ContactsType.type';
import { people } from '../temp/Contacts';

const initialState: InitialStateType = people;

export const ContactsContext = React.createContext<ContactsContextType>({} as ContactsContextType);

export function ContactsContextProvider(props: ContactsContextPropsType) {
  const { setLoading } = useContext(DataContext);
  const [selectedContact, setSelectedContact] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state: InitialStateType, action: ReducerActionType) {
    switch(action.type){
      case ContactsActions.CREATE:
        let check = false;
        state.forEach(contact => { if (contact.email === action.payload.email) check = true; });
        if (check) return state;
        return [...state, {...action.payload}];
      case ContactsActions.DELETE:
        const newContacts = state.filter(contact => contact !== action.payload);
        return [...newContacts];
      case ContactsActions.MODIFY:
        const update = state.map(contact => {
          if (contact.email === action.payload.email) 
            contact = action.payload;
          return contact;
        });
        return [...update];
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

  const createNewContact = async (data: Contact) => {
    setLoading(true);
    dispatch({type: ContactsActions.CREATE, payload: data});
    setLoading(false);
  }

  const deleteContact = async (data: Contact) => {
    setLoading(true);
    dispatch({type: ContactsActions.DELETE, payload: data});
    setLoading(false);
  }

  const updateContact = async (data: Contact) => {
    setLoading(true);
    dispatch({type: ContactsActions.MODIFY, payload: data});
    setLoading(false);
  }

  
  return (
    <ContactsContext.Provider value={{
      state, 
      createNewContact,
      deleteContact,
      updateContact,
      groupedContacts,
      setSelectedContact,
      selectedContact: state[selectedContact]
    }}>
      {props.children}
    </ContactsContext.Provider>
  )
}
export const ContactsContextConsumer = ContactsContext.Consumer;
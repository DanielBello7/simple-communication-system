


import React, { useContext, useReducer, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { 
  InitialStateType,
  ConversationActions,
  ConversationsContextPropsType, 
  ReducerActionType, 
  ConversationsContextType,
  Conversation
} from '../types/ConversationTypes.types';
import { ContactsContext } from './ContactsContext';
import { chats } from '../temp/Conversations';

const initialState: InitialStateType = chats;

function reducer(state: InitialStateType, action: ReducerActionType) {
  switch (action.type){
    case ConversationActions.CREATE_CONVERSATION:
      const newConversation: Conversation = {
        _id: uuid(),
        recipients: [],
        messages: []
      }
      return [...state, newConversation];
    case ConversationActions.DELETE_CONVERSATION:
      const newConversations = state.filter(conversation => conversation._id !== action.payload);
      return [...newConversations];
    case ConversationActions.ADD_MESSAGE:
      state.map(conversation => {
        if (conversation._id === action.payload) 
          return { conversation, messages: [conversation.messages, {...action.message}]}
        return conversation;
      });
      return state;
    case ConversationActions.DELETE_MESSAGE:
      state.map(conversation => {
        if (conversation._id === action.payload){
          const newMessages = conversation.messages.filter(message => message._id !== action.message?._id);
          return {...conversation, messages: [...newMessages]}
        }
        return conversation;
      });
      return state;
    default:
      return state;
  }
}

export const ConversationsContext = React.createContext<ConversationsContextType>({} as ConversationsContextType);



export function ConversationsContextProvider(props: ConversationsContextPropsType) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [selectedConversation, setSelectedConversation] = useState(0);

  const contactsContext = useContext(ContactsContext);

  const formattedConversations = state.map(conversation => {
    const recipients = conversation.recipients.map(recipient => {
      const contact = contactsContext.state.find(contact => contact.email === recipient);
      const name = contact || recipient;
      return name;
    });

    const messages = conversation.messages.map(message => {
      const contact = contactsContext.state.find(contact => contact.email === message.sender);
      const name = contact || message.sender;
      return {...message, sender: name}  
    });

    return {...conversation, recipients, messages}
  });

  return (
    <ConversationsContext.Provider value={{
        state, 
        dispatch, 
        formattedConversations,
        setSelectedConversation,
        selectedConversation: formattedConversations[selectedConversation]
      }}>
      {props.children}
    </ConversationsContext.Provider>
  )
}
export const ConversationsContextConsumer = ConversationsContext.Consumer;
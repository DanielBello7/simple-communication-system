


import React, { useContext, useReducer, useCallback } from 'react';
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

const initialState: InitialStateType = [];


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

  const contactsContext = useContext(ContactsContext);

  const formattedConversations = state.map((conversation, index) => conversation);

  return (
    <ConversationsContext.Provider value={{state, dispatch, formattedConversations}}>
      {props.children}
    </ConversationsContext.Provider>
  )
}
export const ConversationsContextConsumer = ConversationsContext.Consumer;
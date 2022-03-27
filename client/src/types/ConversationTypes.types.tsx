


import { Contact } from './ContactsType.type'

export enum ConversationActions { CREATE_CONVERSATION, ADD_MESSAGE, DELETE_CONVERSATION, DELETE_MESSAGE }

export enum MessageType { MEDIA, TEXT, POST, CONTACT }

export type Message = {
  _id: string,
  type: MessageType.MEDIA | MessageType.TEXT 
  text: string,
  date: Date,
  sender: string | Contact,
  isSent: boolean,
  isRead: boolean,
  isDelivered: boolean,
  media?: string,
  reply?: string
}

export type PostMessage = {
  _id: string,
  post: string,
  type: MessageType.POST,
  postType: 'text' | 'media',
  text?: string,
  date: Date,
  reply?: string
  sender: string | Contact,
  isSent: boolean,
  isRead: boolean,
  isDelivered: boolean,
}

export type ContactMessage = {
  _id: string,
  contact: Contact,
  type: MessageType.CONTACT,
  text?: string,
  date: Date,
  reply?: string,
  sender: string | Contact,
  isSent: boolean,
  isRead: boolean,
  isDelivered: boolean,
}

export type Conversation = {
  _id: string,
  groupName?: string,
  recipients: (string | Contact)[] ,
  messages: (Message|PostMessage|ContactMessage)[]
}

export type InitialStateType = Conversation[];

export type ConversationsContextPropsType = {
  children: React.ReactNode
}

export type ReducerActionType = {
  type: ConversationActions.CREATE_CONVERSATION | ConversationActions.DELETE_CONVERSATION | ConversationActions.ADD_MESSAGE | ConversationActions.DELETE_MESSAGE,
  payload: string,
  message?: Message,
}

export type ConversationsContextType = {
  state: InitialStateType,
  dispatch: React.Dispatch<ReducerActionType>,
  formattedConversations: Conversation[],
  selectedConversation: Conversation,
  setSelectedConversation: React.Dispatch<React.SetStateAction<number>>
}
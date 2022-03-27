


import { Contact } from './ContactsType.type';
import { PostType } from './PostType.type';
import { MediaType } from './GeneralTypes.types';

export enum ConversationActions { CREATE_CONVERSATION, ADD_MESSAGE, DELETE_CONVERSATION, DELETE_MESSAGE }

export enum MessageType { MEDIA, TEXT, POST, CONTACT }

type MainMessage = {
  _id: string,
  date: Date,
  isSent: boolean,
  isDelivered: boolean,
  isRead: boolean,
  sender: string | Contact,
  reply?: string,
  text?: string
  type: MessageType.TEXT | MessageType.CONTACT | MessageType.MEDIA | MessageType.POST
}

export interface TextMessage extends MainMessage {
  text: string,
  type: MessageType.TEXT
}

export interface MediaMessage extends MainMessage {
  text?: string,
  type: MessageType.MEDIA,
  media: string,
  mediaType: MediaType.AUDIO | MediaType.IMAGE | MediaType.VIDEO
}

export interface PostTextMessageType extends MainMessage {
  text?: string,
  type: MessageType.POST,
  postType: PostType.TEXT,
  post: string
}

export interface PostMediaMessageType extends MainMessage {
  text?: string,
  type: MessageType.POST,
  post: string,
  postType: PostType.MEDIA,
  mediaType: MediaType.AUDIO | MediaType.IMAGE | MediaType.VIDEO
}

export interface ContactMessage extends MainMessage {
  text?: string,
  type: MessageType.CONTACT,
  contact: Contact
}

export type Message = TextMessage | MediaMessage;

export type PostMessage = PostTextMessageType | PostMediaMessageType;


export type Conversation = {
  _id: string,
  groupName?: string,
  recipients: (string | Contact)[] ,
  messages: (Message | PostMessage | ContactMessage)[]
}

export type InitialStateType = Conversation[];

export type ConversationsContextPropsType = {
  children: React.ReactNode
}

export type ReducerActionType = {
  type: ConversationActions.CREATE_CONVERSATION | ConversationActions.DELETE_CONVERSATION | ConversationActions.ADD_MESSAGE | ConversationActions.DELETE_MESSAGE,
  payload: string,
  message?: MainMessage,
}

export type ConversationsContextType = {
  state: InitialStateType,
  dispatch: React.Dispatch<ReducerActionType>,
  formattedConversations: Conversation[],
  selectedConversation: Conversation,
  setSelectedConversation: React.Dispatch<React.SetStateAction<number>>
}
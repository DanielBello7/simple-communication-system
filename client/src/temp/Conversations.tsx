


import { Conversation, MessageType } from '../types/ConversationTypes.types';

export const chats: Conversation[] = [
  {
    _id: 'aouevaouve-akeoauveuv-akeakeiv',
    recipients: ['david@gmail.com'],
    messages: [
      {
        _id: 'ouavuvsova',
        type: MessageType.TEXT,
        text: 'Hey you. You good?',
        date: new Date(),
        sender: 'gokebello@gmail.com',
        isSent: true,
        isRead: true,
        isDelivered: true,
      },
      {
        _id: 'ouavusvs',
        type: MessageType.TEXT,
        text: 'Yeah i am good. Just tired.',
        date: new Date(),
        sender: 'david@gmail.com',
        isSent: true,
        isRead: true,
        isDelivered: true,
      },
      {
        _id: 'ouavosuvaovs',
        type: MessageType.TEXT,
        text: 'Really? Tell me. what is wrong',
        date: new Date(),
        sender: 'gokebello@gmail.com',
        isSent: true,
        isRead: true,
        isDelivered: true
      },
      {
        _id: 'oavoavev',
        type: MessageType.TEXT,
        text: 'It is nothing really. Dont worry about it',
        date: new Date(),
        sender: 'david@gmail.com',
        isSent: true,
        isRead: true,
        isDelivered: true,
        reply: 'ouavosuvaovs'
      },
      {
        _id: 'aoueoauveova',
        type: MessageType.TEXT,
        text: 'Hey cmmon, i know you. Talk',
        date: new Date(),
        sender: 'gokebello@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true,
        reply: 'oavoavev'
      },
      {
        _id: 'ueaeouuuuee',
        type: MessageType.TEXT,
        text: 'Dont say things bro',
        date: new Date(),
        sender: 'gokebello@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true,
        reply: 'ouavuvsova'
      },
    ]
  },
  {
    _id: 'aieaouebvaev',
    recipients: ['anita@gmail.com', 'benson@gmail.com'],
    groupName: "Physics Classmates",
    messages: [
      {
        _id: 'aoubeoaibve',
        type: MessageType.TEXT,
        text: 'Hey',
        date: new Date(),
        sender: 'gokebello@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true
      },
      {
        _id: 'aobeiabeeaeae',
        type: MessageType.TEXT,
        text: 'Hi',
        date: new Date(),
        sender: 'anita@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true
      },
      {
        _id: 'apbebaoeibvaobeviabea',
        type: MessageType.TEXT,
        text: 'Hey cmmon, i know you. Talk',
        date: new Date(),
        sender: 'benson@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true
      }
    ]
  },
  {
    _id: 'aouebvobaeoibave',
    recipients: ['anita@gmail.com'],
    messages: [
      {
        _id: 'aoubeoaibveqoubq3q93q',
        type: MessageType.TEXT,
        text: 'Hey',
        date: new Date(),
        sender: 'gokebello@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true
      },
      {
        _id: 'aobeiabeeaeaeq803yq3',
        type: MessageType.TEXT,
        text: 'Hi',
        date: new Date(),
        sender: 'anita@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true
      },
      {
        _id: 'apbebaoeibvaobeviabea08qy9q',
        type: MessageType.TEXT,
        text: 'Where are you?',
        date: new Date(),
        sender: 'anita@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true,
        reply: 'aoubeoaibveqoubq3q93q'
      }
    ]
  }
]
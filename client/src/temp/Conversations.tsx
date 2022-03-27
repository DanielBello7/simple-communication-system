


import { Conversation, MessageType } from '../types/ConversationTypes.types';
import { PostType } from '../types/PostType.type';
import { MediaType } from '../types/GeneralTypes.types'

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
        isDelivered: true,
        isRead: true
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
  },
  {
    _id: 'yiaeiaieyaie',
    recipients: ['juliet@gmail.com'],
    messages: [
      {
        _id: 'aoueoavoooaoao',
        type: MessageType.TEXT,
        text: 'Hey Daniel',
        date: new Date(),
        sender: 'juliet@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true
      },
      {
        _id: 'ao9oq0081308aeaeq803yq3',
        type: MessageType.TEXT,
        text: 'Hi, How are you?',
        date: new Date(),
        sender: 'gokebello@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true,
        reply: 'aoueoavoooaoao'
      },
      {
        _id: 'ii0183018308bcoauevcae',
        type: MessageType.POST,
        text: 'Can you see this?',
        date: new Date(),
        sender: 'juliet@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true,
        reply: 'ao9oq0081308aeaeq803yq3',
        post: 'lauboue0001',
        postType: PostType.MEDIA,
        mediaType: MediaType.IMAGE 
      },
      {
        _id: '901030801083180',
        type: MessageType.TEXT,
        text: 'Yeah i saw it?',
        date: new Date(),
        sender: 'gokebello@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true,
      },
      {
        _id: 'iiei9993kdkdk',
        type: MessageType.POST,
        text: 'Yeah see this one sef',
        date: new Date(),
        sender: 'gokebello@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true,
        reply: 'ii0183018308bcoauevcae',
        post: 'aoubevoabeobvuo2u4o24o20482',
        postType: PostType.MEDIA,
        mediaType: MediaType.IMAGE
      }
    ]
  },
  {
    _id: '942-94-240810',
    recipients: ['andrew@gmail.com'],
    messages: [
      {
        _id: '20482048ippiepwirwpir',
        contact: {
          email: 'jessica@gmail.com',
          first_name: 'jessica',
          last_name: 'jones'
        },
        type: MessageType.CONTACT,
        date: new Date(),
        sender: 'andrew@gmail.com',
        isSent: true,
        isRead: true,
        isDelivered: true,
      },
      {
        _id: '840284028473071',
        type: MessageType.TEXT,
        text: 'Guy hafa',
        date: new Date(),
        sender: 'gokebello@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true
      },
      {
        _id: 'iiei9993kdkdk',
        type: MessageType.POST,
        text: 'See me',
        date: new Date(),
        sender: 'gokebello@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true,
        post: 'pahepivh902480284',
        postType: PostType.TEXT
      }
    ]
  },
  {
    _id: '0482ourbouvbrob92929',
    recipients: ['charles@gmail.com'],
    messages: [
      {
        _id: '3838498595375937hah',
        type: MessageType.TEXT,
        text: 'Beo you good?',
        date: new Date(),
        sender: 'gokebello@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true
      },
      {
        _id: '917492497294729',
        type: MessageType.TEXT,
        text: 'Yeah i am',
        date: new Date(),
        sender: 'charles@gmail.com',
        isSent: true,
        isDelivered: true,
        isRead: true,
      },
      {
        _id: 'euueuriroiroprppeo',
        type: MessageType.MEDIA,
        text: 'See this babe',
        date: new Date(),
        sender: 'charles@gmail.com',
        isDelivered: true,
        isRead: true,
        isSent: true,
        media: 'IMG_2132.JPG',
        mediaType: MediaType.IMAGE
      },
      {
        _id: '90824h2ih4ib242',
        type: MessageType.TEXT,
        text: 'Mad. The babe make',
        date: new Date(),
        sender: 'gokebello@gmail.com',
        isDelivered: true,
        isRead: true,
        isSent: true,
        reply: 'euueuriroiroprppeo'
      },
      {
        _id: 'ubebavevbaeoubv',
        type: MessageType.MEDIA,
        text: 'See this one',
        date: new Date(),
        sender: 'gokebello@gmail.com',
        isDelivered: true,
        isRead: true,
        isSent: true,
        media: 'IMG_2134.JPG',
        mediaType: MediaType.IMAGE
      },
      {
        _id: 'qpieqpurqrwri',
        type: MessageType.MEDIA,
        text: '',
        date: new Date(),
        sender: 'gokebello@gmail.com',
        isDelivered: true,
        isRead: true,
        isSent: true,
        media: 'IMG_5696.JPG',
        mediaType: MediaType.IMAGE
      }
    ]
  }
]



import { Post, PostType, MediaType } from "../types/PostType.type";

export const posts_data: Post[] = [
  {
    _id: '8130717ouabeovbua',
    createdBy: {
      email: 'gokebello@gmail.com',
      first_name: 'goke',
      last_name: 'bello'
    },
    date: new Date(),
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: PostType.TEXT,
    dislikes: 10,
    likes: 2,
    comments: [
      {
        createdBy: {email: 'demien@gmail.com', name: 'Demien Johnson'},
        date: new Date(),
        text: 'I really love this'
      },
      {
        createdBy: {email: 'joshua@gmail.com', name: 'Joshua Ijomi'},
        date: new Date(),
        text: 'Mhen true talk'
      },
      {
        createdBy: {email: 'damola@gmail.com', name: 'Damola Ogbomoso'},
        date: new Date(),
        text: 'Say more of this please'
      },
    ]
  },
  {
    _id: 'pahepivh902480284',
    createdBy: {
      email: 'benjamin@gmail.com',
      first_name: 'benjamin',
      last_name: 'udor'
    },
    date: new Date(),
    text: "Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.",
    type: PostType.TEXT,
    likes: 200,
    dislikes: 10,
    comments: [
      {
        createdBy: {email: 'prince@gmail.com', name: 'Prince Wadak'},
        date: new Date(),
        text: 'Where did you get this from?'
      },
      {
        createdBy: {email: 'abba@gmail.com', name: 'Abbah Abbey'},
        date: new Date(),
        text: 'Is that how it starts?'
      },
      {
        createdBy: {email: 'Abram@gmail.com', name: 'Uyo Abram'},
        date: new Date(),
        text: 'Get the F out of here'
      },
    ]
  },
  {
    _id: 'lauboue0001',
    createdBy: {
      email: 'benjamin@gmail.com',
      first_name: 'benjamin',
      last_name: 'udor'
    },
    date: new Date(),
    text: "Card titles are used by adding .card-title to a <h*> tag. In the same way, links are added and placed next to each other by adding .card-link to an <a> tag.",
    type: PostType.MEDIA,
    media: 'img-2.jpeg',
    mediaType: MediaType.IMAGE,
    likes: 290,
    dislikes: 2,
    comments: [
      {
        createdBy: {email: 'precious@gmail.com', name: 'Precious Adegunle'},
        date: new Date(),
        text: 'Hey can you guys talk more'
      },
      {
        createdBy: {email: 'esther@gmail.com', name: 'Esther Adeniyi'},
        date: new Date(),
        text: 'Say whatever you want'
      },
      {
        createdBy: {email: 'ayo@gmail.com', name: 'Ayo Tunde'},
        date: new Date(),
        text: 'Hey follow back i just got here'
      },
      {
        createdBy: {email: 'agatha@gmail.com', name: 'Agatha Ameh'},
        date: new Date(),
        text: 'i find this displeasing'
      },
      {
        createdBy: {email: 'bashir@gmail.com', name: 'Ahmed Bashir'},
        date: new Date(),
        text: 'Dont fight it abeg'
      },
      {
        createdBy: {email: 'micheal@gmail.com', name: 'Micheal Ogbe'},
        date: new Date(),
        text: 'Dont talk this'
      },
      {
        createdBy: {email: 'bianca@gmail.com', name: 'Bianca Mohammadu'},
        date: new Date(),
        text: 'Bend your things'
      },
    ]
  },
  {
    _id: '914740274;akdac',
    createdBy: {
      email: 'anita@gmail.com',
      first_name: 'anita',
      last_name: 'ogaba'
    },
    date: new Date(),
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: PostType.TEXT,
    likes: 2000,
    dislikes: 100,
    comments: [
      {
        createdBy: {email: 'joshua@gmail.com', name: 'Joshua Ijomi'},
        date: new Date(),
        text: 'Mhen true talk'
      }
    ]
  },
  {
    _id: '974047204cboabeoaobe',
    createdBy: {
      email: 'joy@gmail.com',
      first_name: 'joy',
      last_name: 'ogbor'
    },
    date: new Date(),
    text: "Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks,",
    type: PostType.TEXT,
    likes: 120,
    dislikes: 123,
    comments: [
      {
        createdBy: {email: 'joshua@gmail.com', name: 'Joshua Ijomi'},
        date: new Date(),
        text: 'Mhen true talk'
      },
      {
        createdBy: {email: 'damola@gmail.com', name: 'Damola Ogbomoso'},
        date: new Date(),
        text: 'Say more of this please'
      },
    ]
  },
  {
    _id: 'aoubevoabeobvuo2u4o24o20482',
    createdBy: {
      email: 'glory@gmail.com',
      first_name: 'glory',
      last_name: 'bello'
    },
    date: new Date(),
    text: "text styles, and a list group—all wrapped in a fixed-width card.",
    type: PostType.MEDIA,
    media: 'img-3.jpeg',
    mediaType: MediaType.VIDEO,
    likes: 100,
    dislikes: 22,
  },
  {
    _id: 'auebaoebv0181-8-13boaube',
    createdBy: {
      email: 'gokebello@gmail.com',
      first_name: 'goke',
      last_name: 'bello'
    },
    date: new Date(),
    text: "Add an optional header and/or footer within a card. Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: PostType.MEDIA,
    media: 'img-4.jpeg',
    mediaType: MediaType.IMAGE,
    likes: 200,
    dislikes: 3030,
    comments: [
      {
        createdBy: {email: 'gokebello@gmail.com', name: 'Goke Bello'},
        date: new Date(),
        text: 'Mhen true talk'
      },
      {
        createdBy: {email: 'gokebello@gmail.com', name: 'Goke Bello'},
        date: new Date(),
        text: 'Say more of this please'
      },
    ]
  }
]
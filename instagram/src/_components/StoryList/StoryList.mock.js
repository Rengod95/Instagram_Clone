import { rest } from 'msw';
import { storyListUrl } from './StoryList.hooks';

export const storyList = [
  {
    id: 1,
    username: 'imnotmoon',
    userProfile: 'profile.png',
    sources: ['1.png', '2.png', '3.png'],
    uploadAt: '2022-06-07T13:30:32.803+0900',
    visited: false,
  },
  {
    id: 2,
    username: 'imnotmoon',
    userProfile: 'profile.png',
    sources: ['1.png', '2.png', '3.png'],
    uploadAt: '2022-06-07T13:30:32.803+0900',
    visited: false,
  },
  {
    id: 4,
    username: 'imnotmoon',
    userProfile: 'profile.png',
    sources: ['1.png', '2.png', '3.png'],
    uploadAt: '2022-06-07T13:30:32.803+0900',
    visited: false,
  },
  {
    id: 7,
    username: 'imnotmoon',
    userProfile: 'profile.png',
    sources: ['1.png', '2.png', '3.png'],
    uploadAt: '2022-06-07T13:30:32.803+0900',
    visited: false,
  },
  {
    id: 11,
    username: 'imnotmoon',
    userProfile: 'profile.png',
    sources: ['1.png', '2.png', '3.png'],
    uploadAt: '2022-06-07T13:30:32.803+0900',
    visited: false,
  },
  {
    id: 13,
    username: 'imnotmoon',
    userProfile: 'profile.png',
    sources: ['1.png', '2.png', '3.png'],
    uploadAt: '2022-06-07T13:30:32.803+0900',
    visited: false,
  },
  {
    id: 16,
    username: 'imnotmoon',
    userProfile: 'profile.png',
    sources: ['1.png', '2.png', '3.png'],
    uploadAt: '2022-06-07T13:30:32.803+0900',
    visited: false,
  },
  {
    id: 19,
    username: 'imnotmoon',
    userProfile: 'profile.png',
    sources: ['1.png', '2.png', '3.png'],
    uploadAt: '2022-06-07T13:30:32.803+0900',
    visited: false,
  },
  {
    id: 31,
    username: 'imnotmoon',
    userProfile: 'profile.png',
    sources: ['1.png', '2.png', '3.png'],
    uploadAt: '2022-06-07T13:30:32.803+0900',
    visited: false,
  },
  {
    id: 33,
    username: 'imnotmoon',
    userProfile: 'profile.png',
    sources: ['1.png', '2.png', '3.png'],
    uploadAt: '2022-06-07T13:30:32.803+0900',
    visited: false,
  },
];

export const storyListSuccess = rest.get(storyListUrl, (req, res, ctx) => res(ctx.json(storyList)));

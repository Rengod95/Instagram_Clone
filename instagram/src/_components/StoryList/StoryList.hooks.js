import axios from 'axios';
import { useQuery } from 'react-query';

export const storyListUrl = '/api/story';
const getStories = () => axios.get(storyListUrl).then((res) => res.data);
export const useStories = (options = {}) =>
  useQuery(['story'], getStories, {
    ...options,
    keepPreviousData: true,
  });

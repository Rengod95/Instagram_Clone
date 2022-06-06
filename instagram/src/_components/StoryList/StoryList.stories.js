import React from 'react';
import { StoryList } from './StoryList';
import { storyListSuccess } from './StoryList.mock';

export default {
  title: 'storylist/StoryList',
  component: StoryList,
};

export const Default = (args) => <StoryList {...args} />;
Default.parameters = {
  msw: {
    handlers: {
      story: [storyListSuccess],
    },
  },
};

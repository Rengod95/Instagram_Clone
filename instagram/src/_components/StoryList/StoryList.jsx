import React from 'react';
import './StoryList.scss';
import { useStories } from './StoryList.hooks';
import { StoryListItem } from './StoryListItem';

export const StoryList = () => {
  const { data = [] } = useStories();
  console.log(data);
  return (
    <section className="story_list">
      <ul className="story_list_list">
        {data.map((item) => (
          <StoryListItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

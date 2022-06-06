import React from 'react';
import './StoryList.scss';
import { useStories } from './StoryList.hooks';

export const StoryList = () => {
  const { data = [] } = useStories();
  console.log(data);
  return (
    <section className="story_list">
      <ul className="story_list_list">
        {data.map((item) => (
          <li key={item.id}>{item.username}</li>
        ))}
      </ul>
    </section>
  );
};

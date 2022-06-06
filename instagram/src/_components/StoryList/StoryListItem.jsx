import React, { useCallback } from 'react';

export const StoryListItem = ({ id, username, userProfile, sources, uploadAt, visited }) => {
  const onClick = useCallback(() => {}, []);
  console.log(id, sources, uploadAt, visited);
  return (
    <div onClick={onClick}>
      <img src={userProfile} alt={username} />
      <span>{username}</span>
    </div>
  );
};

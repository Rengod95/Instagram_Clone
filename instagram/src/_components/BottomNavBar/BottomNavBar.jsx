import React, { useMemo } from 'react';
import './BottomNavBar.scss';
import { BottomNavBarItem } from './BottomNavBarItem';
import { HomeIcon, NewIcon, LikesIcon, SearchIcon } from './icons';
import { useLocation } from 'react-router-dom';

const bottomNavBarItems = [
  { icon: HomeIcon, to: '/' },
  { icon: SearchIcon, to: '/search' },
  { icon: NewIcon, to: '/new' },
  { icon: LikesIcon, to: '/likes' },
  { imageSrc: '', to: '/profile/1' },
];

export const BottomNavBar = () => {
  const { pathname } = useLocation();
  const path = useMemo(() => '/' + pathname.split('/')[1], [pathname]);
  return (
    <div className="bottom_nav_bar">
      <ul className="bottom_nav_bar_list">
        {bottomNavBarItems.map((item) => (
          <BottomNavBarItem key={item.to} {...item} active={item.to === path} />
        ))}
      </ul>
    </div>
  );
};

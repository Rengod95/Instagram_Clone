import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNavBarItem.scss';

export const BottomNavBarItem = ({ icon, to, imageSrc, active }) =>
  icon ? (
    <Link to={to}>
      <div className="bottom_nav_bar_item">{icon({ active })}</div>
    </Link>
  ) : (
    <Link to={to}>
      <div className="bottom_nav_bar_item">
        <img src={imageSrc} width="30px" height="30px" />
      </div>
    </Link>
  );

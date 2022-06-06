import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import './Header.scss';
import { CameraIcon } from './icons';

export const Header = () => (
  <div className="header">
    <NavLink to="new" className="header_new">
      <CameraIcon />
    </NavLink>
    <Logo />
  </div>
);

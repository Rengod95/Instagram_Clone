import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import './Header.scss';

export const Header = () => (
  <div className="header">
    <NavLink to="new" className="header_new">
      <div>new</div>
    </NavLink>
    <Logo />
  </div>
);

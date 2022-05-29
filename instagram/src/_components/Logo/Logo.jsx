import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import './Logo.scss';

export const Logo = () => (
  <NavLink to="/" className="logo">
    <img src={logo} width="50%" height="50%" />
  </NavLink>
);

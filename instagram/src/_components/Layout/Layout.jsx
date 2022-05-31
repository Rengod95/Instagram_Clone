import React from 'react';
import { Header } from './Header';
import './Layout.scss';
import { BottomNavBar } from '../BottomNavBar/BottomNavBar';

export const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    {children}
    <BottomNavBar />
  </div>
);

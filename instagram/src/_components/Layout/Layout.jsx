import React from 'react';
import { BottomNavBar } from './BottomNavBar';
import { Header } from './Header';
import './Layout.scss';

export const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    {children}
    <BottomNavBar />
  </div>
);

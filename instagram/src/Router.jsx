import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './_pages/LoginPage';
import { MainPage } from './_pages/MainPage';
import { NewArticlePage } from './_pages/NewArticlePage';
import { ProfilePage } from './_pages/ProfilePage';
import { SearchPage } from './_pages/SearchPage';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="profile/:profileId" element={<ProfilePage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="new" element={<NewArticlePage />} />
    </Routes>
  </BrowserRouter>
);

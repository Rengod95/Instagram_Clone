import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import '../App.scss';

Routes.propTypes = { children: PropTypes.node };
export const withRouter = (Story) => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Story />} />
    </Routes>
  </BrowserRouter>
);

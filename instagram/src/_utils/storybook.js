import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as PropTypes from 'prop-types';

Routes.propTypes = { children: PropTypes.node };
export const withRouter = (Story) => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Story />} />
    </Routes>
  </BrowserRouter>
);

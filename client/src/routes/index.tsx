import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

export const AppRoutes: React.FC<any> = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home/>} />
    </Routes>
  );
};

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AboutPage from '../pages/AboutPage';
import AdminPage from '../pages/AdminPage';
import HomePage from '../pages/HomePage';

const MainRoutes = () => {

  const PUBLIC_ROUTES=[
    {
      link: '/',
      element: <HomePage/>,
      id:1,
    }, 
    {
      link: '/adminPage',
      element: <AdminPage/>,
      id:2,
    },
    {
      link: '/about',
      element: <AboutPage/>,
      id:2,
    },  
  ]
  return (
    <>
    <Routes>

    {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}


    </Routes>
    </>
  );
};

export default MainRoutes;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/authorization/Login';
import Register from '../components/authorization/Register';

import AboutPage from '../pages/AboutPage';
import AdminPage from '../pages/AdminPage';
import EditProductPage from '../pages/EditProductPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProductPage from '../pages/ProductPage';

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
      id:3,
    },  
    {
      link: '/store',
      element: <ProductPage/>,
      id:4,
    },  
    {
     link: '/edit/:id',
      element: <EditProductPage />,
      id: 5,
    },
    {
      link: '/login',
       element: <Login />,
       id: 6,
     }
     ,
     {
      link: '/register',
       element: <Register />,
       id: 7,
     },
     {
      link: '/*',
       element: <NotFoundPage />,
       id: 8,
     }
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
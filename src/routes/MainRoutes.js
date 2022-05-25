import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Login from '../components/authorization/Login';
import Register from '../components/authorization/Register';
import { useAuth } from '../context/AuthContextProvider';

import AboutPage from '../pages/AboutPage';
import AdminPage from '../pages/AdminPage';
import CardPage from '../pages/CardPage';
import EditProductPage from '../pages/EditProductPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProductPage from '../pages/ProductPage';

import {ADMIN} from '../helpers/Consts'
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CreditCard from '../components/CreditCard/CreditCard';
import PasswordRecovery from '../components/authorization/PasswordRecovery';
import ContactUsPage from '../pages/ContactUsPage';
const MainRoutes = () => {

  const { userName } = useAuth();
  


  const PUBLIC_ROUTES=[
    {
      link: '/',
      element: <HomePage/>,
      id:1,
    }, 
    // {
    //   link: '/adminPage',
    //   element: <AdminPage/>,
    //   id:2,
    // },
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
    // {
    //  link: '/edit/:id',
    //   element: <EditProductPage />,
    //   id: 5,
    // },
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
     },
     {
      link: '/card',
       element: <CardPage />,
       id: 9,
     },
     {
      link: '/product/:id',
       element: <ProductDetailsPage />,
       id: 10,
     },
     {
      link: '/payment',
       element: <CreditCard />,
       id: 11,
     },
     {
      link: '/recovery',
       element: <PasswordRecovery />,
       id: 12,
     },
     {
      link: '/contact_us',
       element: <ContactUsPage />,
       id: 13,
     }
  ]



  const PRIVATE_ROUTES = [
     {
      link: '/adminPage',
      element: <AdminPage/>,
      id:1,
    },
    {
       link: '/edit/:id',
        element: <EditProductPage />,
        id: 2,
      },
  ];
  return (
    <>
     <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}

{userName ===ADMIN
          ? (PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={item.element}
                key={item.id}
              />
            )))
          : null}



      </Routes>
    </>
  );
};

export default MainRoutes;
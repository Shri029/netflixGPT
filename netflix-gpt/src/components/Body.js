import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import Webinar from './Webinar';
import Webinar1 from './Webinar1';
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/', 
            element: <Login/>,
        },
        {
            path: '/browse',
            element: <Browse/>,
        },
        {
            path: '/webinar',
            element: <Webinar/>,
        },
        {
            path: '/webinar1',
            element: <Webinar1/>,
        }
    ]);

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { Booth } from './pages/booth';
import { FoodTruck } from './pages/foodTruck';
import { Stage } from './pages/stage';
import { Information } from './pages/information';
import LostItem from './pages/information/lostItem';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/stage',
        element: <Stage />,
      },
      {
        path: '/booth',
        element: <Booth />,
      },
      {
        path: '/foodTruck',
        element: <FoodTruck />,
      },
      {
        path: '/information',
        element: <Information />,
      },
      {
        path: '/lostitem',
        element: <LostItem />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

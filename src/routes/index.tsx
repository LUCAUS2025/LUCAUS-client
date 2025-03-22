import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { Booth } from './pages/booth';
import { FoodTruck } from './pages/foodTruck';
import { Stage } from './pages/stage';
import { Information } from './pages/information';
import Guide from './pages/stage/guide';

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
        path: '/guide/:tab',
        element: <Guide />,
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
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

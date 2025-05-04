import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { Booth } from './pages/booth';
import { FoodTruck } from './pages/foodTruck';
import { Stage } from './pages/stage';
import { Information } from './pages/information';
import Guide from './pages/stage/guide';
import { BoothDetail } from './pages/booth/BoothDetail';
import LostItem from './pages/information/lostitem';
import Notice from './pages/information/notice';
import NoticeDetail from './pages/information/notice-detail';
import BarrierFree from './pages/information/barrierfree';
import { FoodTruckDetail } from './pages/foodTruck/FoodTruckDetail';
import Entry from './pages/information/entry';
import StampEntrance from './pages/stamp';
import StampBoard from './pages/stamp/stampBoard';
import Signup from './pages/stamp/auth/signup/Signup';
import Login from './pages/stamp/auth/login/Login';

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
        path: '/booth/:dayBoothNum',
        element: <BoothDetail />,
      },
      {
        path: '/foodTruck',
        element: <FoodTruck />,
      },
      {
        path: '/foodTruck/:dayFoodTruckNum',
        element: <FoodTruckDetail />,
      },
      {
        path: '/information',
        element: <Information />,
      },
      {
        path: '/lostitem',
        element: <LostItem />,
      },
      {
        path: '/notice',
        element: <Notice />,
      },
      {
        path: '/notice/:id',
        element: <NoticeDetail />,
      },
      {
        path: '/barrierfree',
        element: <BarrierFree />,
      },
      {
        path: '/entry',
        element: <Entry />,
      },
      {
        path: '/stamp/auth',
        element: <StampEntrance />,
      },
      {
        path: '/stamp/board',
        element: <StampBoard />,
      },
      {
        path: '/stamp/signup',
        element: <Signup />,
      },
      {
        path: '/stamp/login',
        element: <Login />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

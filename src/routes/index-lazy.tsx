import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';

// React.lazy를 사용하여 동적 로드 설정
const Booth = React.lazy(() => import('./pages/booth'));
const FoodTruck = React.lazy(() => import('./pages/foodTruck'));
const Stage = React.lazy(() => import('./pages/stage'));
const Information = React.lazy(() => import('./pages/information'));
const Guide = React.lazy(() => import('./pages/stage/guide'));
const BoothDetail = React.lazy(() => import('./pages/booth/BoothDetail'));
const LostItem = React.lazy(() => import('./pages/information/lostitem'));
const Notice = React.lazy(() => import('./pages/information/notice'));
const NoticeDetail = React.lazy(() => import('./pages/information/notice-detail'));
const BarrierFree = React.lazy(() => import('./pages/information/barrierfree'));

// Suspense로 로딩 상태 처리
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
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Stage />
          </Suspense>
        ),
      },
      {
        path: '/guide/:tab',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Guide />
          </Suspense>
        ),
      },
      {
        path: '/booth',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Booth />
          </Suspense>
        ),
      },
      {
        path: '/booth/:id',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BoothDetail />
          </Suspense>
        ),
      },
      {
        path: '/foodTruck',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <FoodTruck />
          </Suspense>
        ),
      },
      {
        path: '/information',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Information />
          </Suspense>
        ),
      },
      {
        path: '/lostitem',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LostItem />
          </Suspense>
        ),
      },
      {
        path: '/notice',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Notice />
          </Suspense>
        ),
      },
      {
        path: '/notice/:id',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NoticeDetail />
          </Suspense>
        ),
      },
      {
        path: '/barrierfree',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BarrierFree />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

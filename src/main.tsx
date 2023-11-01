import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';
import Homepage from './pages/Homepage/Homepage.tsx';
import Gamepasspage from './pages/Gamepasspage/Gamepasspage.tsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.tsx';
import ProfileChallengesPage from './pages/ProfileChallengePage/ProfileChallengesPage.tsx';
import ProfileManage from './pages/ProfileManagePage/ProfileManage.tsx';
import ProfileChangeAvatarPage from './pages/ProfileChangeAvatarPage/ProfileChangeAvatarPage.tsx';
import RaffleWinnersPage from './pages/RaffleWinnersPage/RaffleWinnersPage.tsx';
import RafflesPage from './pages/RafflesPage/RafflesPage.tsx';
import ChallengePage from './pages/ChallengePage/ChallengePage.tsx';
import ProductPage from './pages/ProductPage/ProductPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/gamepass',
        element: <Gamepasspage />,
      },
      {
        path: '/product/:type',
        element: <ProductPage />,
      },
      {
        path: '/raffles',
        element: <RafflesPage />,
      },
      {
        path: '/raffles/winners',
        element: <RaffleWinnersPage />,
      },
      {
        path: '/challenge/:type',
        element: <ChallengePage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/profile/challenges',
        element: <ProfileChallengesPage />,
      },
      {
        path: '/profile/manage',
        element: <ProfileManage />,
      },
      {
        path: '/profile/manage/change-avatar',
        element: <ProfileChangeAvatarPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

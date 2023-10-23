import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';
import Homepage from './pages/Homepage/Homepage.tsx';
import Gamepasspage from './pages/Gamepasspage/Gamepasspage.tsx';
import GoProductPage from './pages/GoProductPage/GoProductPage.tsx';
import LaptopProductPage from './pages/LaptopProductPage/LaptopProductPage.tsx';
import DesktopProductPage from './pages/DesktopProductPage/DesktopProductPage.tsx';
import ChallengePageCS from './pages/ChallengePageCS/ChallengePageCS.tsx';
import ChallengePageF1 from './pages/ChallengePageF1/ChallengePageF1.tsx';
import ChallengePageFG from './pages/ChallengePageFG/ChallengePageFG.tsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.tsx';
import ProfileChallengesPage from './pages/ProfileChallengePage/ProfileChallengesPage.tsx';
import ProfileManage from './pages/ProfileManagePage/ProfileManage.tsx';
import ProfileChangeAvatarPage from './pages/ProfileChangeAvatarPage/ProfileChangeAvatarPage.tsx';

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
        path: '/lenovo-legion-go',
        element: <GoProductPage />,
      },
      {
        path: '/lenovo-legion-9i-gaming-laptop',
        element: <LaptopProductPage />,
      },
      {
        path: '/lenovo-legion-t5-gaming-desktop',
        element: <DesktopProductPage />,
      },
      {
        path: '/cs2-challenge',
        element: <ChallengePageCS />,
      },
      {
        path: '/fg-challenge',
        element: <ChallengePageFG />,
      },
      {
        path: '/f1-challenge',
        element: <ChallengePageF1 />,
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

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.tsx';
import Gamepasspage from './pages/Gamepasspage/Gamepasspage.tsx';
import GoProductPage from './pages/GoProductPage/GoProductPage.tsx';
import LaptopProductPage from './pages/LaptopProductPage/LaptopProductPage.tsx';
import DesktopProductPage from './pages/DesktopProductPage/DesktopProductPage.tsx';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

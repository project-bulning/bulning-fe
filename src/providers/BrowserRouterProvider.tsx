import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';
import LoginPage from '@pages/LoginPage.tsx';
import MainPage from '@pages/MainPage.tsx';
import LoginAuthPage from '@pages/LoginAuthPage';

const router = createBrowserRouter([
  {
    path: routePaths.MAIN,
    element: (
      <MainPage />
    ),
  },
  {
    path: routePaths.LOGIN,
    element: (
      <LoginPage />
    ),
  },
  {
    path: routePaths.LOGIN_AUTH,
    element: (
      <LoginAuthPage />
    ),
  },
]);

function BrowserRouterProvider() {
  return (
    <RouterProvider router={router} />
  );
}

export default BrowserRouterProvider;

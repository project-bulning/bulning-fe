import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';
import LoginPage from '@pages/login/LoginPage';
import MainPage from '@pages/MainPage.tsx';
import LoginAuthPage from '@pages/login/LoginAuthPage';
import MembershipPage from '@pages/login/MembershipPage';
import HuntingList from '@pages/hunting/HuntingList';
import BugInputPage from '@pages/helpee/BugInputPage';

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
  {
    path: routePaths.MEMBERSHIP,
    element: (
      <MembershipPage />
    ),
  },
  {
    path: routePaths.BUG_REPORT,
    element: (
      <HuntingList />
    ),
  },
  {
    path: routePaths.BUG,
    element: (
      <BugInputPage />
    ),
  },
]);

function BrowserRouterProvider() {
  return (
    <RouterProvider router={router} />
  );
}

export default BrowserRouterProvider;

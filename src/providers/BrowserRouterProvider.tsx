import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';
import LoginPage from '@pages/login/LoginPage';
import MainPage from '@pages/MainPage.tsx';
import LoginAuthPage from '@pages/login/LoginAuthPage';
import MembershipPage from '@pages/login/MembershipPage';
import HuntingList from '@pages/hunting/HuntingList';
import BugInputPage from '@pages/helpee/BugInputPage';
import HuntingListDetailPage from '@pages/hunting/HuntingListDetailPage';
import HunterInfoInputPage from '@pages/hunting/HunterInfoInputPage';
import DealWaitingPage from '@pages/afterHunting/DealWaitingPage';
import InfoSentAwaitPage from '@pages/hunterMatching/InfoSentAwaitPage';
import HunterApprovalPage from '@pages/hunterMatching/HunterApprovalPage';
import DealProcessPage from '@pages/afterHunting/DealProcessPage';
import HuntCancelledPage from '@pages/hunterMatching/HuntCancelledPage.tsx';

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
    path: routePaths.BUG_REPORT_DETAIL,
    element: (
      <HuntingListDetailPage />
    ),
  },
  {
    path: routePaths.BUG,
    element: (
      <BugInputPage />
    ),
  },
  {
    path: routePaths.HUNTER_INFO,
    element: (
      <HunterInfoInputPage />
    ),
  },
  {
    path: routePaths.INFO_SENT,
    element: (
      <InfoSentAwaitPage />
    ),
  },
  {
    path: routePaths.HUNT_CANCELLED,
    element: (
      <HuntCancelledPage />
    ),
  },
  {
    path: routePaths.HUNTER_APPROVAL,
    element: (
      <HunterApprovalPage />
    ),
  },
  {
    path: routePaths.DEAL_WAITING,
    element: (
      <DealWaitingPage />
    ),
  },
  {
    path: routePaths.DEAL_PROCESS,
    element: (
      <DealProcessPage />
    ),
  },
]);

function BrowserRouterProvider() {
  return (
    <RouterProvider router={router} />
  );
}

export default BrowserRouterProvider;

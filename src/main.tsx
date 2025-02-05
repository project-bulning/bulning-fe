import { createRoot } from 'react-dom/client';
import { CurrentUserProvider } from '@providers/CurrentUserProvider.tsx';
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import BrowserRouterProvider from '@providers/BrowserRouterProvider.tsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(

  <CurrentUserProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouterProvider />
    </ThemeProvider>
    <Toaster position="bottom-center" />
  </CurrentUserProvider>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { UserProvider } from '@providers/UserProvider.tsx';
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import BrowserRouterProvider from '@providers/BrowserRouterProvider.tsx';

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <UserProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouterProvider />
      </ThemeProvider>
    </UserProvider>
  </StrictMode>,
);

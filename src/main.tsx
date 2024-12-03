import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CurrentUserProvider } from '@providers/CurrentUserProvider.tsx';
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import BrowserRouterProvider from '@providers/BrowserRouterProvider.tsx';

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <CurrentUserProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouterProvider />
      </ThemeProvider>
    </CurrentUserProvider>
  </StrictMode>,
);

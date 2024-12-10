import { CSSObject } from '@emotion/react';
import { breakPoints } from '@styles/breakpoints';

export type ButtonVariants = 'default' | 'dark' | 'primary';

export type TagVariants = 'default' | 'primary';

export type Colors = {
  primary: {
    main: string;
    lighten: string;
    darken: string;
    passive: string;
  };
  text: {
    prominent: string;
    moderate: string;
    subtle: string;
  };
  background: {
    main: string;
    lighten: string;
    darken: string;
    passive: string;
  };
  border: {
    subtle: string;
    prominent: string;
  };
  absolute: {
    black: string;
    white: string;
  };
  other: {
    link: string;
    success: string;
    warn: string;
    error: string;
  };
  brand: {
    background: string;
    text: string;
    primary: string;
  };
};

export type Corners = {
  small: string;
  medium: string;
  big: string;
  round: string;
};

export type BreakpointKey = keyof typeof breakPoints;

export type ResponsiveStyle = Partial<Record<BreakpointKey, CSSObject>>;

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    corners: Corners;
  }
}

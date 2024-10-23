import { breakPoints } from '@styles/breakpoints';
import { css } from '@emotion/react';
import { ResponsiveStyle } from '@/styles';

function generateRandomId() {
  return `id-${Math.random().toString(36).substring(2, 11)}-${Date.now()}`;
}

function serializeResponsiveStyle(style: ResponsiveStyle) {
  const merged = (Object.keys(style) as (keyof ResponsiveStyle)[])
    .map((breakpoint) => `
      @media screen and (min-width: ${breakPoints[breakpoint]}) {
        ${style[breakpoint]}
      }
    `)
    .join(' ');
  return css(merged);
}

export {
  generateRandomId,
  serializeResponsiveStyle,
};

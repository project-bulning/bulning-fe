import { css, CSSObject } from '@emotion/react';
import { breakPoints } from '@styles/breakpoints';
import { BreakpointKey } from '@/styles';

type ResponsiveHeights = string | Partial<Record<BreakpointKey, string>>;

interface SpacingProps {
  height?: ResponsiveHeights;
  cssOverride?: CSSObject;
}

function Spacing({
  height, cssOverride,
}: SpacingProps) {
  const gridStyle = css`
    width: 100%;
  `;
  const columnStyle = getSpacingHeight(height);
  return (
    <div css={[gridStyle, columnStyle, cssOverride]} />
  );
}

export default Spacing;

function getSpacingHeight(heights?: ResponsiveHeights) {
  if (typeof heights === 'string' || !heights) {
    return css`height: ${heights || '0'}`;
  }

  const merged = (Object.keys(heights) as BreakpointKey[]).map((breakpoint) => (`
      @media screen and (min-width: ${breakPoints[breakpoint]}) {
        height: ${heights[breakpoint]};
      }  
    `))
    .join(' ');
  console.log(merged);
  return css(merged);
}

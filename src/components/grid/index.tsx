import { css, CSSObject } from '@emotion/react';
import { ReactNode } from 'react';
import { breakPoints } from '@styles/breakpoints';
import { BreakpointKey } from '@/styles';

type ResponsiveColumns = number | Partial<Record<BreakpointKey, number>>;

interface GridProps {
  children?: ReactNode;
  columns?: ResponsiveColumns;
  gap?: string;
  cssOverride?: CSSObject;
}

function Grid({
  children, columns, gap, cssOverride,
}: GridProps) {
  const gridStyle = css`
    display: grid;
    gap: ${gap};
  `;
  const columnStyle = getGridColumnStyle(columns);
  return (
    <div css={[gridStyle, columnStyle, cssOverride]}>
      {children}
    </div>
  );
}

export default Grid;

function getGridColumnStyle(columns?: ResponsiveColumns) {
  if (typeof columns === 'number' || !columns) {
    return css`grid-template-columns: repeat(${columns || 1}, 1fr)`;
  }

  const merged = (Object.keys(columns) as BreakpointKey[]).map((breakpoint) => (`
      @media screen and (min-width: ${breakPoints[breakpoint]}) {
        grid-template-columns: repeat(${columns[breakpoint]}, 1fr);
      }  
    `))
    .join(' ');
  return css(merged);
}
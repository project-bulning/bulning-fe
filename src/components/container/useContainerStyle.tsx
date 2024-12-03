import { css } from '@emotion/react';
import type { ContainerProps } from '@components/container/index';

function useContainerStyle({
  direction, justify, align, width, height, gap, padding, boxSizing,
}: ContainerProps) {
  const containerStyle = css`
    display: flex;
    flex-direction: ${direction || 'row'};
    justify-content: ${justify || 'flex-start'};
    align-items: ${align || 'stretch'};
    width: ${width || '100%'};
    height: ${height || 'auto'};
    gap: ${gap || '0'};
    padding: ${padding || '0'};
    box-sizing: ${boxSizing || 'border-box'};
  `;
  return {
    containerStyle,
  };
}

export default useContainerStyle;

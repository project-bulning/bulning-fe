import { css } from '@emotion/react';

function useStarRatingStyle(size: 'small' | 'medium' | 'large') {
  const sizeMap = {
    small: '16px',
    medium: '24px',
    large: '28px',
  };

  const fontSize = sizeMap[size];

  const starContainerStyle = css`
      display: flex;
      gap: ${size === 'small' ? '1px' : '4px'};
      cursor: pointer;
  `;

  const starStyle = (index: number, value: number, readOnly: boolean) => css`
      font-size: ${fontSize};
      color: ${value >= (index + 1) ? '#F5CF70' : '#D9D9D9'};
      pointer-events: ${readOnly ? 'none' : 'auto'};
  `;

  return {
    starContainerStyle, starStyle,
  };
}

export default useStarRatingStyle;

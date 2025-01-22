import { css, useTheme } from '@emotion/react';

function useBannerStyle() {
  const theme = useTheme();

  const bannerStyle = css`
      padding: 22px 26px 16px 26px;
      background-color: ${theme.colors.background.light_blue};
      border-radius: 8px;
`;

  return {
    bannerStyle,
  };
}

export default useBannerStyle;

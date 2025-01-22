import { css, useTheme } from '@emotion/react';

function useBottomSheetStyle() {
  const theme = useTheme();

  const backgroundOverlay = (isVisible: boolean) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background: ${theme.colors.background.passive};
    transition: opacity 0.5s ease;
    opacity: ${isVisible ? 1 : 0};
  `;

  const modalStyle = (isVisible: boolean) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    padding-bottom: 10px;
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    background: ${theme.colors.background.main};
    border-radius: 16px 16px 0 0;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
    z-index: 1001;
    transition: transform 0.5s ease;
    transform: ${isVisible ? 'translateY(0)' : 'translateY(100%)'};
  `;

  const contentWrapperStyle = css`
    width: 100%;
    box-sizing: border-box;
    padding: 40px 24px 10px 24px;
`;

  const contentStyle = css`
    width: 100%;
`;
  return {
    modalStyle,
    backgroundOverlay,
    contentWrapperStyle,
    contentStyle,
  };
}

export default useBottomSheetStyle;

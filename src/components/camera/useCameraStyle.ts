import { css, useTheme } from '@emotion/react';
import { breakPoints } from '@styles/breakpoints';

function useCameraStyle() {
  const theme = useTheme();
  const wrapperStyle = css`
    width: 100dvw;
    height: 100dvh;
    background: ${theme.colors.background.passive};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
  `;
  const cameraAreaStyle = css`
    width: 100%;
    height: 100%;
    max-width: 720px;
    max-height: 960px;
    object-fit: cover;
  `;
  const cameraUiWrapperStyle = css`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
  `;
  const buttonContainerStyle = css`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.background.passive};
    @media (min-width: ${breakPoints.md}) {
      width: 100%;
      height: 120px;
    }
  `;
  const cameraButtonStyle = css`
    background: ${theme.colors.background.main};
    width: 60px;
    height: 60px;
    border-radius: ${theme.corners.round};
    border: 3px solid ${theme.colors.background.main};
    &:hover {
      background-color: ${theme.colors.background.passive};
      border: 3px solid ${theme.colors.background.main};
    }
    @media (min-width: ${breakPoints.md}) {
      width: 100px;
      height: 100px;
    }
  `;

  return {
    wrapperStyle, cameraAreaStyle, buttonContainerStyle, cameraUiWrapperStyle, cameraButtonStyle,
  };
}

export default useCameraStyle;

import { css, useTheme } from '@emotion/react';

function useSelectStyle() {
  const theme = useTheme();

  const selectContainerStyle = (
    css`
      position: relative;
      width: 100%;
    `
  );

  const selectStyle = (
    css`
      outline: none;
      border: 1px solid ${theme.colors.border.subtle};
      border-radius: ${theme.corners.small};
      background-color: #F2F3F6;
      height: 40px;
      padding: 8px;
      font-size: 15px;
      &::after {
        color: ${theme.colors.text.subtle};
      }
    `
  );

  const selectIconStyle = (
    css`
      position: absolute;
    `
  );

  return { selectIconStyle, selectContainerStyle, selectStyle };
}

export default useSelectStyle;

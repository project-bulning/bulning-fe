import { css, useTheme } from '@emotion/react';

function useAfterHuntingPageStyle() {
  const theme = useTheme();

  const headingStyle = css`
      line-height: 30px;
      margin-top: 96px;
      margin-bottom: 37px;
  `;

  const priceStyle = css`
      display: block;
      width: 110px;
      height: 40px;
      font-size: 20px;
      text-align: right;
      padding: 7px;
      border-radius: 8px;
      background-color: #F2F3F6;
  `;

  const ulStyle = css`
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      color: ${theme.colors.text.explain_gray};
      margin-top: 25px;
  `;

  const btnPositionStyle = css`
      display: block;
      position: fixed;
      bottom: 10px;
      padding: 0 20px;
      left: 0;
      right: 0;
      width: 100%;
      text-align: center;
  `;

  const explainStyle = css`
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: -0.32px;
      margin-bottom: 12px;
      color: ${theme.colors.text.explain_gray};
  `;

  return {
    headingStyle,
    priceStyle,
    ulStyle,
    btnPositionStyle,
    explainStyle,
  };
}

export default useAfterHuntingPageStyle;

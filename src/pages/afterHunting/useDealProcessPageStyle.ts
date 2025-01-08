import { css } from '@emotion/react';

function useBugInputPageStyle() {
  const headingStyle = css`
      display: block;
      font-size: 22px;
      line-height: 30px;
      letter-spacing: -0.32px;
      margin-top: 96px;
      margin-bottom: 37px;
  `;

  const priceStyle = css`
      display: block;
      width: 110px;
      height: 40px;
      font-size: 20px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: -0.32px;
      text-align: right;
      padding: 7px;
      border-radius: 8px;
      background-color: #F2F3F6;
  `;

  const ulStyle = css`
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: -0.32px;
      color: #9B9B9B;
      margin-top: 25px;
  `;

  const btnPositionStyle = css`
      display: block;
      position: fixed;
      bottom: 10px;
      padding: 0px 20px;
      left: 0;
      right: 0; /* 옵션: 요소를 화면의 전체 너비로 고정 */
      width: 100%; /* 필요에 따라 너비를 조정 */
      text-align: center; /* 텍스트나 내용 정렬 */
  `;

  const explainStyle = css`
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: -0.32px;
      margin-bottom: 12px;
      color: #9B9B9B;
  `;

  return {
    headingStyle,
    priceStyle,
    ulStyle,
    btnPositionStyle,
    explainStyle,
  };
}

export default useBugInputPageStyle;

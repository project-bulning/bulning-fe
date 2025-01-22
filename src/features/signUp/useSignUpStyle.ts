import { css } from '@emotion/react';

function useSignUpStyle() {
  const allCheckStyle = css`
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(116, 115, 115, 0.4);
  `;

  const detailStyle = css`
      cursor: pointer;
  `;

  const closeBottomSheetStyle = css`
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(116, 115, 115, 0.4);
  `;

  const closeTextStyle = css`
      cursor: pointer;
  `;

  const scrollContainerStyle = css`
      max-height: 70vh;
      overflow-y: auto;
`;

  return {
    allCheckStyle,
    detailStyle,
    closeBottomSheetStyle,
    closeTextStyle,
    scrollContainerStyle,
  };
}

export default useSignUpStyle;

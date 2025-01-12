import { css } from '@emotion/react';

function useSignUpStyle() {
  const allCheckStyle = css`
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(116, 115, 115, 0.4);
  `;

  const scrollContainerStyle = css`
  max-height: 70vh;
  overflow-y: auto;
`;

  return {
    allCheckStyle,
    scrollContainerStyle,
  };
}

export default useSignUpStyle;

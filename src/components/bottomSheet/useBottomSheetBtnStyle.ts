import { CSSObject } from '@emotion/react';

function useBottomSheetBtnStyle() {
  const rejectBtnStyle: CSSObject = {
    fontSize: '11px',
    color: '#9B9B9B',
    fontWeight: '600',
    lineHeight: '20px',
    letterSpacing: '-0.32px',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textUnderlinePosition: 'from-font',
  };

  return {
    rejectBtnStyle,
  };
}

export default useBottomSheetBtnStyle;

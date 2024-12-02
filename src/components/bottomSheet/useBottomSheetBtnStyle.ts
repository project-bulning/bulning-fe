import { CSSObject } from '@emotion/react';

function useBottomSheetBtnStyle() {
  const BtnStyle: CSSObject = {
    width: ' 100%',
    height: '50px',
    fontSize: '16px',
    marginTop: '25px',
    borderRadius: '8px',
  };

  const RejectBtnStyle: CSSObject = {
    fontSize: '11px',
    fontWeight: '600',
    lineHeight: '20px',
    letterSpacing: '-0.32px',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textUnderlinePosition: 'from-font',
  };

  return {
    BtnStyle,
    RejectBtnStyle,
  };
}

export default useBottomSheetBtnStyle;

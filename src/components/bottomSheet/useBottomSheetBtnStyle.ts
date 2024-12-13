import { CSSObject } from '@emotion/react';

function useBottomSheetBtnStyle() {
  const BtnStyle: CSSObject = {
    width: ' 100%',
    height: '50px',
    fontSize: '16px',
    marginTop: '25px',
    borderRadius: '8px',
  };

  const CancelBtnStyle: CSSObject = {
    backgroundColor: '#EBEBEB',
    border: 'none',
    width: ' 100%',
    height: '50px',
    fontSize: '16px',
    marginTop: '25px',
    borderRadius: '8px',
  };

  const RejectBtnStyle: CSSObject = {
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
    BtnStyle,
    CancelBtnStyle,
    RejectBtnStyle,
  };
}

export default useBottomSheetBtnStyle;

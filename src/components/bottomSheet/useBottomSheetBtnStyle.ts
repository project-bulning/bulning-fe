import { CSSObject } from '@emotion/react';

function useBottomSheetBtnStyle() {
  const btnStyle: CSSObject = {
    width: ' 100%',
    height: '50px',
    fontSize: '16px',
    marginTop: '25px',
    borderRadius: '8px',
  };

  const cancelBtnStyle: CSSObject = {
    backgroundColor: '#EBEBEB',
    border: 'none',
    width: ' 100%',
    height: '50px',
    fontSize: '16px',
    marginTop: '25px',
    borderRadius: '8px',
  };

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
    btnStyle,
    cancelBtnStyle,
    rejectBtnStyle,
  };
}

export default useBottomSheetBtnStyle;

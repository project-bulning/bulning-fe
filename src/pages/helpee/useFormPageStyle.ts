import { CSSObject, useTheme } from '@emotion/react';

function useFormPageStyle() {
  const theme = useTheme();

  const inputTextStyle: CSSObject = {
    flexDirection: 'column',
    gap: '3px',
    label: {
      marginBottom: '4px',
      padding: 0,
      color: 'black',
      fontSize: '16px',
    },
    input: {
      backgroundColor: '#F2F3F6',
      fontSize: '14px',
    },
  };

  const inputSelectStyle: CSSObject = {
    flexDirection: 'column',
    gap: '10px',
    label: {
      marginBottom: '10px',
      padding: 0,
      color: 'black',
      fontSize: '18px',
    },
    select: {
      backgroundColor: '#F2F3F6',
      fontSize: '16px',
      width: '100%',
    },
  };

  const inputBtnStyle: CSSObject = {
    flexDirection: 'column',
    alignItems: 'flex-start',
    div: {
      gap: '18px',
    },

  };

  const ulStyle: CSSObject = {
    color: theme.colors.text.moderate,
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: '-0.32px',
    listStyleType: 'inherit',
  };

  const selectedBtnStyle: CSSObject = {
    ...inputBtnStyle,
    color: 'white !important',
    backgroundColor: theme.colors.primary.main,
  };

  return {
    inputTextStyle,
    inputSelectStyle,
    inputBtnStyle,
    ulStyle,
    selectedBtnStyle,
  };
}

export default useFormPageStyle;

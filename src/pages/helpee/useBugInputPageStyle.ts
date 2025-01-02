import { CSSObject, useTheme } from '@emotion/react';

function useBugInputPageStyle() {
  const theme = useTheme();

  const inputTextStyle: CSSObject = {
    flexDirection: 'column',
    input: {
      backgroundColor: '#F2F3F6',
      fontSize: '15px',
    },
    label: {
      marginTop: '20px',
      padding: 0,
      color: 'black',
      fontSize: '16px',
    },
  };

  const inputBtnStyle: CSSObject = {
    flexDirection: 'column',
    marginTop: '20px',
    button: {
      border: `0.5px solid ${theme.colors.primary.darken}`,
      padding: '4px 15px',
      color: theme.colors.primary.darken,
      fontSize: '14px',

      '&:hover': {
        backgroundColor: theme.colors.primary.darken,
        color: 'white',
      },
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
    color: 'white !important',
    backgroundColor: theme.colors.primary.darken,
  };

  return {
    inputTextStyle,
    inputBtnStyle,
    ulStyle,
    selectedBtnStyle,
  };
}

export default useBugInputPageStyle;

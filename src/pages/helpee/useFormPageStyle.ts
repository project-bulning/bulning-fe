import { CSSObject, useTheme } from '@emotion/react';

function useFormPageStyle() {
  const theme = useTheme();

  const inputTextStyle: CSSObject = {
    flexDirection: 'column',
    gap: '10px',
    label: {
      marginTop: '24px',
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
      marginTop: '24px',
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
    marginTop: '20px',
    div: {
      gap: '15px',
    },
    button: {
      border: `0.5px solid ${theme.colors.primary.main}`,
      padding: '4px 15px',
      color: theme.colors.primary.main,
      fontSize: '14px',
      '&:hover': {
        backgroundColor: theme.colors.primary.main,
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

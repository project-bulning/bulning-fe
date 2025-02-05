import { css, useTheme } from '@emotion/react';
import { ButtonVariants } from '@/styles';

interface UseButtonStyleProps {
  variant?: ButtonVariants;
}

function useButtonStyle({ variant = 'default' }: UseButtonStyleProps) {
  const globalTheme = useTheme();

  const variantStyles = {
    default: {
      fontSize: '16px',
      height: '50px',
      padding: '0',
      backgroundColor: globalTheme.colors.primary.main,
      color: globalTheme.colors.text.darken_white,
      border: 'none',
      borderRadius: '8px',
      hoverBackgroundColor: globalTheme.colors.background.btn_default_hover,
      hoverColor: globalTheme.colors.text.darken_white,
      hoverBorderColor: 'transparent',
      disabledBackgroundColor: globalTheme.colors.background.disabled,
      disabledColor: globalTheme.colors.text.explain_gray,
    },
    select: {
      fontSize: '14px',
      height: 'auto',
      padding: '5px 15px',
      backgroundColor: globalTheme.colors.background.main,
      color: globalTheme.colors.primary.main,
      border: `0.5px solid ${globalTheme.colors.primary.main}`,
      borderRadius: '100px',
      hoverBackgroundColor: globalTheme.colors.primary.main,
      hoverColor: 'white',
      hoverBorderColor: globalTheme.colors.border.prominent,
      disabledBackgroundColor: globalTheme.colors.background.darken,
      disabledColor: globalTheme.colors.text.subtle,
    },
    secondary: {
      fontSize: '16px',
      height: '50px',
      padding: '0',
      backgroundColor: globalTheme.colors.primary.lighten,
      color: globalTheme.colors.text.btn_secondary,
      border: 'none',
      borderRadius: '8px',
      hoverBackgroundColor: globalTheme.colors.primary.lighten,
      hoverColor: globalTheme.colors.text.subtle,
      hoverBorderColor: 'transparent',
      disabledBackgroundColor: globalTheme.colors.primary.passive,
      disabledColor: globalTheme.colors.text.subtle,
    },
  };

  const styles = variantStyles[variant];

  const buttonStyle = css`
    width: 100%;
    white-space: nowrap;
    height: ${styles.height};
    font-size: ${styles.fontSize};  
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    padding: ${styles.padding};
    border-radius: ${styles.borderRadius};
    color: ${styles.color};
    border: ${styles.border};
    background-color: ${styles.backgroundColor};
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    cursor: pointer;
    gap: 5px;
    
    &:hover {
      width: 100%;
      background-color: ${styles.hoverBackgroundColor};
      color: ${styles.hoverColor};
      border: 1px solid ${styles.hoverBorderColor};
    }

    &:disabled, &:disabled:hover {
        background-color: #EBEBEB;
        color: #9B9B9B;
        border: 1px solid transparent;
        cursor: default;
    }
  `;

  const buttonIconStyle = css`
    width: 16px;
    height: 16px;
  `;

  return {
    buttonStyle,
    buttonIconStyle,
  };
}

export default useButtonStyle;

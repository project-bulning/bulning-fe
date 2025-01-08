import { css, useTheme } from '@emotion/react';
import { ButtonVariants } from '@/styles';

interface UseButtonStyleProps {
  variant?: ButtonVariants;
}

function useButtonStyle({ variant = 'default' }: UseButtonStyleProps) {
  const globalTheme = useTheme();

  const variantStyles = {
    default: {
      fontSize: '18px',
      height: '50px',
      padding: '0',
      backgroundColor: globalTheme.colors.primary.main,
      color: globalTheme.colors.absolute.white,
      border: 'none',
      borderRadius: '8px',
      hoverBackgroundColor: globalTheme.colors.absolute.black,
      hoverColor: globalTheme.colors.primary.main,
      hoverBorderColor: 'transparent',
      disabledBackgroundColor: globalTheme.colors.primary.passive,
      disabledColor: globalTheme.colors.text.subtle,
    },
    select: {
      fontSize: '14px',
      height: '21px',
      padding: '4px 15px',
      backgroundColor: globalTheme.colors.background.main,
      color: globalTheme.colors.primary.main,
      border: `0.5px solid ${globalTheme.colors.primary.main}`,
      borderRadius: '100px',
      hoverBackgroundColor: globalTheme.colors.background.darken,
      hoverColor: globalTheme.colors.text.prominent,
      hoverBorderColor: globalTheme.colors.border.prominent,
      disabledBackgroundColor: globalTheme.colors.background.darken,
      disabledColor: globalTheme.colors.text.subtle,
    },
    secondary: {
      fontSize: '18px',
      height: '50px',
      padding: '0',
      backgroundColor: globalTheme.colors.primary.lighten,
      color: globalTheme.colors.text.prominent,
      border: 'none',
      borderRadius: '8px',
      hoverBackgroundColor: globalTheme.colors.absolute.black,
      hoverColor: globalTheme.colors.primary.main,
      hoverBorderColor: 'transparent',
      disabledBackgroundColor: globalTheme.colors.primary.passive,
      disabledColor: globalTheme.colors.text.subtle,
    },
  };

  const styles = variantStyles[variant];

  const buttonStyle = css`
    width: 100%;
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
      background-color: ${styles.hoverBackgroundColor};
      color: ${styles.hoverColor};
      border: 1px solid ${styles.hoverBorderColor};
    }

    &:disabled, &:disabled:hover {
      background-color: ${styles.disabledBackgroundColor};
      color: ${styles.disabledColor};
      border: 1px solid transparent;
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

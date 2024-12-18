import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}

function IconButton({ icon, onClick, ariaLabel }: IconButtonProps) {
  const buttonStyle = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
  `;

  return (
    <button
      css={buttonStyle}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
}

export default IconButton;

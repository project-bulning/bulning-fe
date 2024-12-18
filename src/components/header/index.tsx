import { ReactNode } from 'react';
import { css } from '@emotion/react';
import { Heading } from '@components/text';
import AlertIcon from '@assets/icons/alarm.svg?react';

export interface HeaderProps {
  leftItem?: ReactNode;
  title?: string;
  hideAlertIcon?: boolean;
}

function Header({ leftItem, title, hideAlertIcon }: HeaderProps) {
  const headerStyle = css`
    display: flex;
    box-sizing: border-box;
    padding: 0 25px;
    width: 100%;
    height: 80px;
    justify-content: space-between;
    align-items: center;
  `;
  return (
    <header css={headerStyle}>
      {leftItem || <div />}
      <Heading.H4 weight="bold">
        {title}
      </Heading.H4>
      {hideAlertIcon ? <div /> : <AlertIcon />}
    </header>
  );
}

export default Header;

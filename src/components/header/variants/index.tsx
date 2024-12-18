import Header, { HeaderProps } from '@components/header';
import CloseIcon from '@assets/icons/close.svg?react';
import BackwardIcon from '@assets/icons/backward.svg?react';
import IconButton from '@components/iconButton';
import routePaths from '@constants/routePaths';
import { css, useTheme } from '@emotion/react';

type HeaderWithIconProps = Omit<HeaderProps, 'leftItem'> & {
  iconType: 'close' | 'backward';
  onClick?: () => void;
};

export function HeaderWithLogo({ ...rest }: Omit<HeaderProps, 'leftItem'>) {
  const theme = useTheme();
  const logoStyle = css`
    text-decoration: none;
    color: ${theme.colors.text.prominent};
    font-size: 22px;
    font-weight: bold;
    user-select: none;
  `;
  return (
    <Header
      {...rest}
      leftItem={(
        <a
          href={routePaths.MAIN}
          css={logoStyle}
        >
          BULNING
        </a>
      )}
    />
  );
}

export function HeaderWithIcon({ iconType, onClick, ...rest }: HeaderWithIconProps) {
  const iconButton = (
    <IconButton
      icon={iconType === 'close' ? <CloseIcon /> : <BackwardIcon />}
      onClick={onClick}
      ariaLabel={iconType}
    />
  );
  return (
    <Header leftItem={iconButton} {...rest} />
  );
}

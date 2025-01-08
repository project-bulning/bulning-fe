import { css, useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import Container from '@components/container';
import HomeIcon from '@assets/icons/home.svg';
import CoinIcon from '@assets/icons/coin.svg';
import ProfileIcon from '@assets/icons/profile.svg';
import { Paragraph } from '@components/text';
import routePaths from '@constants/routePaths';

function Navbar() {
  const theme = useTheme();

  const textStyle = css`
      color: ${theme.colors.primary.darken};
      text-align: center;
      font-size: 12px;
      font-weight: bold;
  `;

  const navbarStyle = css`
      position: fixed;
      bottom: 0;
      left: 0;
      background-color: #F7FAFE;
      z-index: 10;
      width: 100%;
  `;

  const linkStyle = css`
      text-decoration: none;
      height: 100%;
      width: 100%;
  `;

  return (
    <Container height="80px" justify="space-between" css={navbarStyle}>
      <Link to={routePaths.MAIN} css={linkStyle}>
        <Container height="100%" justify="center" direction="column" gap="8px">
          <Container justify="center">
            <img src={HomeIcon} alt="Home" />
          </Container>
          <Paragraph css={textStyle}>홈</Paragraph>
        </Container>
      </Link>
      <Link to={routePaths.MAIN} css={linkStyle}>
        <Container height="100%" justify="center" direction="column" gap="8px">
          <Container justify="center">
            <img src={CoinIcon} alt="Coin" />
          </Container>
          <Paragraph css={textStyle}>사냥</Paragraph>
        </Container>
      </Link>
      <Link to={routePaths.MAIN} css={linkStyle}>
        <Container height="100%" justify="center" direction="column" gap="8px">
          <Container justify="center">
            <img src={ProfileIcon} alt="Profile" />
          </Container>
          <Paragraph css={textStyle}>프로필</Paragraph>
        </Container>
      </Link>
    </Container>
  );
}

export default Navbar;

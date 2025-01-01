import { css } from '@emotion/react';
import Container from '@components/container';
import HomeIcon from '@assets/icons/home.svg';
import CoinIcon from '@assets/icons/coin.svg';
import ProfileIcon from '@assets/icons/profile.svg';
import { Paragraph } from '@components/text';

function Navbar() {
  const textStyle = css`
      color: #012962;
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
  `;

  return (
    <Container height="80px" direction="row" justify="space-between" css={navbarStyle}>
      <Container height="100%" justify="center" direction="column" gap="8px">
        <Container justify="center">
          <img src={HomeIcon} alt="Home" />
        </Container>
        <Paragraph css={textStyle}>홈</Paragraph>
      </Container>
      <Container height="100%" justify="center" direction="column" gap="8px">
        <Container justify="center">
          <img src={CoinIcon} alt="Coin" />
        </Container>
        <Paragraph css={textStyle}>사냥</Paragraph>
      </Container>
      <Container height="100%" justify="center" direction="column" gap="8px">
        <Container justify="center">
          <img src={ProfileIcon} alt="Profile" />
        </Container>
        <Paragraph css={textStyle}>프로필</Paragraph>
      </Container>
    </Container>
  );
}

export default Navbar;

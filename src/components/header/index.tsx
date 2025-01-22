import { css } from '@emotion/react';
import Container from '@components/container';
import { Heading } from '@components/text';
import AlarmIcon from '@assets/icons/alarm-lighter.svg';
import { Link } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';

function Header() {
  const imgStyle = css`
    height: 30px;
    width: 30px;
  `;

  return (
    <Container justify="space-between" align="center" padding="16px 0px">
      <Heading.H3 weight="semi-bold">BULNING</Heading.H3>
      <Link to={routePaths.MAIN}>
        <img src={AlarmIcon} alt="alarm" css={imgStyle} />
      </Link>
    </Container>
  );
}

export default Header;

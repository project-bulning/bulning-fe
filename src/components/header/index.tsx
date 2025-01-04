import { css } from '@emotion/react';
import Container from '@components/container';
import { Heading } from '@components/text';
import AlarmIcon from '@assets/icons/alarm-lighter.svg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleNavigateAlarm = ():void => {
    navigate('/');
  };

  const buttonStyle = css`
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
  `;

  const imgStyle = css`
    height: 30px;
    width: 30px;
  `;

  return (
    <Container justify="space-between" align="center" padding="16px 0px">
      <Heading.H3 weight="semi-bold">BULNING</Heading.H3>
      <button type="button" css={buttonStyle} onClick={handleNavigateAlarm}>
        <img src={AlarmIcon} alt="alarm" css={imgStyle} />
      </button>
    </Container>
  );
}

export default Header;

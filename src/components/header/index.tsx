import { css } from '@emotion/react';
import Container from '@components/container';
import { Heading } from '@components/text';
import AlarmIcon from '@assets/icons/alarm-lighter.svg';
import AlarmCheck from '@assets/icons/alarm-check.svg';
import { Link } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';
import { useEffect, useState } from 'react';
import { getUserAlarmInfo } from '@/api/user';
import { UserAlarmResponse } from '@/types/user/alarm';

function Header() {
  const [alarmActive, setAlarmActive] = useState<boolean>(false);
  const [alarmData, setAlarmData] = useState<UserAlarmResponse | null>(null);

  useEffect(() => {
    const fetchAlarmInfo = async () => {
      try {
        const data = await getUserAlarmInfo();
        setAlarmData(data);
        setAlarmActive(data !== null);
      } catch (error) {
        console.error('Error fetching user alarm info:', error);
      }
    };

    fetchAlarmInfo();
  }, []);

  const imgStyle = css`
    height: 30px;
    width: 30px;
  `;

  return (
    <Container justify="space-between" align="center" padding="16px 0px">
      <Heading.H3 weight="semi-bold">BULNING</Heading.H3>
      <Link to={routePaths.NOTIFICATION} state={{ alarmData }}>
        <img src={alarmActive ? AlarmCheck : AlarmIcon} alt="alarm" css={imgStyle} />
      </Link>
    </Container>
  );
}

export default Header;

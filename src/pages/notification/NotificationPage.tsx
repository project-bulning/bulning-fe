import { DefaultPaddedContainer } from '@components/container/variants';
import { Link, useLocation } from 'react-router-dom';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import ArrowBack from '@assets/icons/arrow-back.svg';
import routePaths from '@constants/routePaths.ts';
import { useEffect } from 'react';
import { UserAlarmResponse } from '@/types/user/alarm';

function NotificationPage() {
  const location = useLocation();
  const { alarmData } = location.state as { alarmData: UserAlarmResponse | null } || { alarmData: null };

  useEffect(() => {
    console.log(`alarmData:${alarmData}`);
  }, [alarmData]);

  return (
    <DefaultPaddedContainer>
      <Container direction="column" gap="30px">
        <Container height="40px" justify="space-between" align="center">
          <Link to={routePaths.MAIN}>
            <img src={ArrowBack} alt="뒤로가기" />
          </Link>
          <Heading.H3_5>알림</Heading.H3_5>
          <div css={{ width: '30px' }} />
        </Container>
        {
          alarmData ? (
            <Container>
              안녕
            </Container>
          )
            : (
              <Container direction="column" padding="300px 0px" justify="center" align="center" gap="10px">
                <Paragraph variant="small">아직 알림이 없어요</Paragraph>
                <Paragraph variant="small">지금 사냥을 시작해 보세요!</Paragraph>
              </Container>
            )
        }
      </Container>
    </DefaultPaddedContainer>
  );
}

export default NotificationPage;

import { DefaultPaddedContainer } from '@components/container/variants';
import { Link, useLocation } from 'react-router-dom';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import ArrowBack from '@assets/icons/arrow-back.svg';
import ViewDetail from '@assets/icons/view-details.svg';
import routePaths from '@constants/routePaths.ts';
import { useEffect } from 'react';
import { css, useTheme } from '@emotion/react';
import { UserAlarmResponse } from '@/types/user/alarm';

function NotificationPage() {
  const location = useLocation();
  // eslint-disable-next-line max-len
  const { alarmData } = location.state as { alarmData: UserAlarmResponse | null } || { alarmData: null };

  useEffect(() => {
    console.log(`alarmData:${alarmData}`);
  }, [alarmData]);

  const theme = useTheme();

  const notificationStyle = css`
      padding: 20px 10px;
      background-color: ${theme.colors.background.light_blue};
      border-radius: 20px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  `;

  const redDotStyle = css`
    position: relative;
    top: -20px;
    left: -10px;
    width: 10px;
    height: 10px;
    background-color: ${theme.colors.other.link};
    border-radius: 100%;
  `;

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
            <div>
              {
                (alarmData.role === 'helpee' && alarmData.status === 'PEDNING')
                  ? (
                    <Link to={routePaths.HUNTER_APPROVAL.replace(':userId', String(alarmData.hunterId))}>
                      <Container css={notificationStyle}>
                        <div css={redDotStyle} />
                        <Container direction="column" gap="10px">
                          <Paragraph variant="small" weight="semi-bold">벌레를 잡아줄 사람이 나타났어요</Paragraph>
                          <Paragraph variant="small">우리 동네 헌터의 정보를 빠르게 확인해보세요</Paragraph>
                        </Container>
                        <img src={ViewDetail} alt="바로가기" />
                      </Container>
                    </Link>
                  ) : (
                    <Link to={routePaths.CHAT}>
                      <Container css={notificationStyle}>
                        <div css={redDotStyle} />
                        <Container direction="column" gap="10px">
                          <Paragraph variant="small" weight="semi-bold">헬피가 사냥을 수락했어요</Paragraph>
                          <Paragraph variant="small">1대1로 대화하며 빠르게 도움을 제공하세요</Paragraph>
                        </Container>
                        <img src={ViewDetail} alt="바로가기" />
                      </Container>
                    </Link>
                  )
              }
            </div>
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

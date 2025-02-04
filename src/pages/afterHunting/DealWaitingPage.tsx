import { DefaultPaddedContainer } from '@components/container/variants';
import Button from '@components/button';
import { Heading } from '@components/text';
import Container from '@components/container';
import useAfterHuntingPageStyle from '@pages/afterHunting/useAfterHuntingPageStyle';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';
import { getMyInfo } from '@/api/user';

function DealWaitingPage() {
  const {
    headingStyle,
    btnPositionStyle,
  } = useAfterHuntingPageStyle();

  const navigate = useNavigate();
  const [status, setStatus] = useState<boolean>(false);
  const [matchId, setMatchId] = useState<number | null>(null);
  const [isHelper, setIsHelper] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getMyInfo();
        if (userInfo.match) {
          setMatchId(userInfo.match.id);
          setIsHelper(userInfo.match.helper_id === userInfo.id);
        }
      } catch (error) {
        console.error('사용자 정보를 가져오는 데 실패했습니다.', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleNavigate = () => {
    if (isHelper && matchId !== null) {
      navigate(`${routePaths.REVIEW}/${matchId}`);
    } else {
      navigate(routePaths.MAIN);
    }
  };

  useEffect(() => {
    // TODO: api로 거래 완료 상태 받아와서 처리
    const changeStatus = () => {
      setTimeout(() => { setStatus(true); }, 3000);
    };

    changeStatus();
  }, []);

  return (
    <DefaultPaddedContainer>
      <Container direction="column" css={headingStyle}>
        <Heading.H3_5 weight="semi-bold">상대방의 완료 여부를</Heading.H3_5>
        <Heading.H3_5 weight="semi-bold">기다리고 있어요</Heading.H3_5>
      </Container>
      <Container css={btnPositionStyle}>
        <Button variant={status ? 'default' : 'secondary'} onClick={handleNavigate}>완료했어요</Button>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default DealWaitingPage;

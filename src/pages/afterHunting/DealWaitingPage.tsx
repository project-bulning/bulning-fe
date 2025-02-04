import { DefaultPaddedContainer } from '@components/container/variants';
import Button from '@components/button';
import { Heading } from '@components/text';
import Container from '@components/container';
import useAfterHuntingPageStyle from '@pages/afterHunting/useAfterHuntingPageStyle';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';

function DealWaitingPage() {
  const {
    headingStyle,
    btnPositionStyle,
  } = useAfterHuntingPageStyle();

  const navigate = useNavigate();
  const [matchId, setMatchId] = useState<number | null>(null);

  const [tradeCompleted, setTradeCompleted] = useState<boolean>(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data?.type === 'TRADE_COMPLETED') {
          console.log('거래 완료 알림이 수신됨:', event.data);
          setTradeCompleted(true);
          setMatchId(event.data.matchId);
        }
      });
    }
  }, []);

  const handleNavigate = () => {
    navigate(routePaths.REVIEW.replace(':matchId', String(matchId)));
  };

  return (
    <DefaultPaddedContainer>
      <Container direction="column" css={headingStyle}>
        <Heading.H3_5 weight="semi-bold">상대방의 완료 여부를</Heading.H3_5>
        <Heading.H3_5 weight="semi-bold">기다리고 있어요</Heading.H3_5>
      </Container>
      <Container css={btnPositionStyle}>
        <Button
          variant={tradeCompleted ? 'default' : 'secondary'}
          disabled={!tradeCompleted}
          onClick={handleNavigate}
        >
          완료했어요
        </Button>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default DealWaitingPage;

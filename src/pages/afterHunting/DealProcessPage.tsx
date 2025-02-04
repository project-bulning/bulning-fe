import { DefaultPaddedContainer } from '@components/container/variants';
import Button from '@components/button';
import { Heading, Paragraph } from '@components/text';
import Container from '@components/container';
import useAfterHuntingPageStyle from '@pages/afterHunting/useAfterHuntingPageStyle';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';
import { getMyInfo } from '@/api/user';
import { getHuntingPrice } from '@/api/afterHunting';

function DealProcessPage() {
  const {
    headingStyle,
    priceStyle,
    ulStyle,
    btnPositionStyle,
    explainStyle,
  } = useAfterHuntingPageStyle();

  const [matchId, setMatchId] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    async function fetchMyInfo() {
      try {
        const data = await getMyInfo();
        setMatchId(data?.match?.id ?? null);
      } catch (error) {
        console.error('Error fetching my info:', error);
      }
    }

    fetchMyInfo();
  }, []);

  useEffect(() => {
    async function fetchBugReport() {
      try {
        if (matchId === null) return;
        const data = await getHuntingPrice(matchId);
        setPrice(data);
      } catch (error) {
        console.error('Error fetching bug report:', error);
      }
    }

    if (matchId !== null) {
      fetchBugReport();
    }
  }, [matchId]);

  const formatPrice = (rawPrice: number) => new Intl.NumberFormat('en-US').format(rawPrice);

  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate(routePaths.DEAL_WAITING);
  };

  return (
    <DefaultPaddedContainer>
      <Container direction="column" css={headingStyle}>
        <Container>
          <Heading.H3_5 weight="semi-bold">계좌이체나 현금</Heading.H3_5>
          <Heading.H3_5>으로</Heading.H3_5>
        </Container>
        <Container>
          <Heading.H3_5>거래를 진행해주세요</Heading.H3_5>
        </Container>
      </Container>
      <Container gap="22px" align="center" justify="center">
        <Heading.H4>계약 금액</Heading.H4>
        <Container css={priceStyle}>
          {price ? formatPrice(price) : ''}
        </Container>
      </Container>
      <Container css={ulStyle}>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          <li>상호 간 합의 하에 거래 금액을 변경할 수 있습니다.</li>
          <li>헌터가 벌레를 잡지 못했을 때는 돈을 지불하지 않아도 됩니다.</li>
          <li>헌터가 벌레를 빠르게, 잘 잡았을 경우 추가금을 제공할 수 있습니다.</li>
        </ul>
      </Container>
      <Container css={btnPositionStyle}>
        <Paragraph css={explainStyle}>계좌이체의 경우 송금 내역을 확인 후 버튼을 눌러주세요.</Paragraph>
        <Button onClick={handleBtnClick}>완료했어요</Button>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default DealProcessPage;

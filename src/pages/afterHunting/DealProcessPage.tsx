import { DefaultPaddedContainer } from '@components/container/variants';
import Button from '@components/button';
import { Heading, Paragraph } from '@components/text';
import Container from '@components/container';
import useDealProcessPageStyle from '@pages/afterHunting/useDealProcessPageStyle';
import { useState, useEffect } from 'react';
import mockBugReport from 'mock/bug-report';
import { useNavigate } from 'react-router-dom';
import { BugReport } from '@/types/bug-report';

function DealProcessPage() {
  const {
    headingStyle,
    priceStyle,
    ulStyle,
    btnPositionStyle,
    explainStyle,
    btnStyle,
  } = useDealProcessPageStyle();

  const [bugReportData, setBugReportData] = useState<BugReport>();

  useEffect(() => {
    setBugReportData(mockBugReport);
  }, []);

  const formatPrice = (price: number) => new Intl.NumberFormat('en-US').format(price);

  const navigate = useNavigate();

  const handleNavigate = () => {
    // TODO: api 연결 후 조건에 따라 AH-03(대기페이지) 또는 AH-04로 이동
    navigate('/');
  };

  return (
    <DefaultPaddedContainer>
      <Container direction="column" css={headingStyle}>
        <Container>
          <Heading.H3_5 weight="semi-bold">계좌이체</Heading.H3_5>
          나
          <div style={{ width: '8px' }} />
          <Heading.H3_5 weight="semi-bold">현금</Heading.H3_5>
          으로
        </Container>
        <div>거래를 진행해주세요</div>
      </Container>
      <Container gap="22px" align="center" justify="center">
        <Heading.H4>계약 금액</Heading.H4>
        <Container css={priceStyle}>
          {bugReportData ? formatPrice(bugReportData.price) : '0'}
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
        <Button variant="primary" css={btnStyle} onClick={handleNavigate}>완료했어요</Button>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default DealProcessPage;

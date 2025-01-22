import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import Button from '@components/button';
import { useTheme } from '@emotion/react';
import arrowBack from '@assets/icons/arrow-back.svg';
import location from '@assets/icons/location.svg';
import routePaths from '@constants/routePaths.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import KakaoMap from '@components/kakaoMap';
import Spacing from '@components/spacing';
import { DetailedBugReport } from '@/types/bug-report';
import { getBugReportDetail } from '@/api/bugReports';

function HuntingListDetailPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [bugReport, setBugReport] = useState<DetailedBugReport | null>(null);

  useEffect(() => {
    if (id) {
      getBugReportDetail(Number(id))
        .then((data) => setBugReport(data.bug_report))
        .catch((error) => {
          console.error('Error fetching bug report details:', error);
          navigate(routePaths.MAIN);
        });
    }
  }, [id, navigate]);

  const handleBtnClick = () => {
    navigate(routePaths.HUNTER_INFO);
  };
  return (
    <DefaultPaddedContainer>
      <Container direction="column" padding="10px 0 10px 0">
        <img src={arrowBack} alt="back" css={{ width: '32px', height: '32px' }} />
        <img src={arrowBack} alt="back" css={{ width: '100%', height: '142px', marginTop: '54px' }} />
        <Container direction="column" padding="35px 0 30px 0" gap="10px">
          <Heading.H5 weight="medium">{bugReport?.name}</Heading.H5>
          <Heading.H5 weight="medium">{bugReport?.title}</Heading.H5>
          <Container>
            <Paragraph variant="xsmall">10분 전</Paragraph>
            <Paragraph color={theme.colors.text.moderate}>&#183;</Paragraph>
            <img src={location} alt="location" css={{ width: '18px', height: '18px', marginTop: '-3px' }} />
            <Paragraph variant="xsmall">500m</Paragraph>
          </Container>
          <Paragraph variant="large" weight="semi-bold" css={{ marginTop: '8px' }}>
            {bugReport?.price}
            원
          </Paragraph>
        </Container>
        <div
          css={{
            position: 'relative',
            left: 'calc(-50vw + 50%)',
            width: '100vw',
            height: '10px',
            backgroundColor: theme.colors.background.darken,
          }}
        />
        <Container padding="23px 0 21px 0">
          <Container direction="column" gap="15px" width="100px" css={{ color: theme.colors.text.subtle }}>
            <Paragraph variant="small" weight="semi-bold">종류</Paragraph>
            <Paragraph variant="small" weight="semi-bold">크기</Paragraph>
            <Paragraph variant="small" weight="semi-bold">보유 물품</Paragraph>
          </Container>
          <Container direction="column" gap="15px">
            <Paragraph variant="small">바퀴벌레</Paragraph>
            <Paragraph variant="small">약 500원 동전 크기</Paragraph>
            <Paragraph variant="small">에프킬라</Paragraph>
          </Container>
        </Container>
        <Container height="0.5px" css={{ background: 'rgba(180, 180, 181, 0.40)' }} />
        <Container direction="column" padding="20px 0 0 0" gap="5px">
          <Paragraph variant="small" weight="semi-bold" css={{ color: theme.colors.text.subtle }}>설명</Paragraph>
          <Paragraph variant="small" css={{ lineHeight: '20px', marginBottom: '10px' }}>지금 바퀴벌레가 나왔는데 보수 더 드릴 수 있으니까 최대한 빨리 와서 잡아주실 분 구해요...... 중문이 있는 집이라서 주방에 가둬놨어요</Paragraph>
          <KakaoMap
            latitude={bugReport?.latitude}
            longitude={bugReport?.longitude}
            type="range"
            width="342px"
            height="152px"
            css={{ borderRadius: '8px', marginBottom: '15px' }}
          />
          <Spacing height="5px" />
          <Paragraph variant="small" weight="medium">부산광역시 금정구 장전1동</Paragraph>
          <Paragraph variant="xsmall">부산대역에서 도보 5분</Paragraph>
        </Container>
        <Button css={{ marginTop: '15px' }} onClick={handleBtnClick}>매칭 시작하기</Button>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default HuntingListDetailPage;

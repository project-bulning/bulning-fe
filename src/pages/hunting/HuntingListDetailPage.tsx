import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import Button from '@components/button';
import { useTheme } from '@emotion/react';
import arrowBack from '@assets/icons/arrow-back.svg';
import locationIcon from '@assets/icons/location.svg';
import routePaths from '@constants/routePaths.ts';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import KakaoMap from '@components/kakaoMap';
import Spacing from '@components/spacing';
import { DetailedBugReport } from '@/types/bug-report';
import { getBugReportDetail } from '@/api/bugReports';

function HuntingListDetailPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;
  const distance = location.state?.distance;
  const [bugReport, setBugReport] = useState<DetailedBugReport | null>(null);

  useEffect(() => {
    if (!id) {
      console.error('ID가 제공되지 않았습니다.');
      navigate(routePaths.MAIN);
      return;
    }
    getBugReportDetail(Number(id))
      .then((data) => {
        if (data) {
          setBugReport(data);
        } else {
          console.error('bug_report 데이터가 없습니다.');
        }
      })
      .catch((error) => {
        console.error('Error fetching bug report details:', error);
      });
  }, [id, navigate]);

  const handleBtnClick = () => {
    navigate(routePaths.HUNTER_INFO, { state: { id } });
  };
  return (
    <DefaultPaddedContainer>
      <Container direction="column" padding="10px 0 10px 0">
        <img src={arrowBack} alt="back" css={{ width: '32px', height: '32px' }} />
        <img src={bugReport?.bug_image_url || ''} alt="back" css={{ width: '100%', height: '180px', marginTop: '30px' }} />
        <Container direction="column" padding="35px 0 30px 0" gap="10px">
          <Heading.H5 weight="medium">{bugReport?.name}</Heading.H5>
          <Heading.H5 weight="medium">{bugReport?.title}</Heading.H5>
          <Container>
            <Paragraph variant="xsmall">10분 전</Paragraph>
            <Paragraph color={theme.colors.text.moderate}>&#183;</Paragraph>
            <img src={locationIcon} alt="location" css={{ width: '18px', height: '18px', marginTop: '-3px' }} />
            <Paragraph variant="xsmall">{distance}</Paragraph>
          </Container>
          <Paragraph variant="large" weight="semi-bold" css={{ marginTop: '8px' }}>
            {`${bugReport?.price}원`}
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
            <Paragraph variant="small">{bugReport?.bug_type}</Paragraph>
            <Paragraph variant="small">{bugReport?.bug_size}</Paragraph>
            <Paragraph variant="small">{bugReport?.equipment}</Paragraph>
          </Container>
        </Container>
        <Container height="0.5px" css={{ background: 'rgba(180, 180, 181, 0.40)' }} />
        <Container direction="column" padding="20px 0 0 0" gap="5px">
          <Paragraph variant="small" weight="semi-bold" css={{ color: theme.colors.text.subtle }}>설명</Paragraph>
          <Paragraph variant="small" css={{ lineHeight: '20px', marginBottom: '10px' }}>{bugReport?.note}</Paragraph>
          {bugReport?.latitude && bugReport?.longitude && (
            <KakaoMap
              latitude={bugReport.latitude}
              longitude={bugReport.longitude}
              type="range"
              width="342px"
              height="152px"
              css={{ borderRadius: '8px', marginBottom: '15px' }}
            />
          )}
          <Spacing height="5px" />
          <Paragraph variant="small" weight="medium">{bugReport?.location}</Paragraph>
          <Paragraph variant="xsmall">{bugReport?.location_detail}</Paragraph>
        </Container>
        <Button css={{ marginTop: '15px' }} onClick={handleBtnClick}>매칭 시작하기</Button>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default HuntingListDetailPage;

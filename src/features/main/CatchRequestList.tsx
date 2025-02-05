import { useState, useEffect } from 'react';
import { Heading, Paragraph } from '@components/text';
import Container from '@components/container';
import Grid from '@components/grid';
import { DefaultPaddedContainer } from '@components/container/variants';
import viewDetails from '@assets/icons/view-details.svg';
import { Link } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';
import HuntingListItem from '@pages/hunting/HuntingListItem';
import Spinner from '@components/fallback/Spinner.tsx';
import { BugReport } from '@/types/bug-report';
import { getBugReportList } from '@/api/bugReports';

function CatchRequestList() {
  const [requests, setRequests] = useState<BugReport[]>([]);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error('Error getting location:', error);
          },
          { enableHighAccuracy: true },
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchRequests = async () => {
      if (latitude !== null && longitude !== null) {
        setIsLoading(true);
        try {
          const responsesInfo = await getBugReportList({
            currentLatitude: latitude,
            currentLongitude: longitude,
          });

          setRequests(responsesInfo.bug_reports);
        } catch (error) {
          console.error('Error fetching bug report list:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchRequests();
  }, [latitude, longitude]);

  return (
    <div>
      {
      isLoading
        ? (
          <Container justify="center" padding="100px 0px">
            <Spinner />
          </Container>
        )
        : (
          <DefaultPaddedContainer>
            {
            requests.length === 0
              ? (
                <Container justify="center" padding="100px 0px">
                  <Paragraph>아직 내 근처에 사냥이 없어요</Paragraph>
                  <Paragraph>사냥 정보를 실시간 알림으로 보내드릴게요</Paragraph>
                </Container>
              )
              : (
                <Container direction="column">
                  <Link to={routePaths.BUG_REPORT} css={{ textDecoration: 'none', color: 'inherit' }}>
                    <Container justify="flex-start" align="center" gap="6px" css={{ marginBottom: '10px' }}>
                      <Heading.H3 css={{ fontWeight: 600 }}>우리동네 사냥 정보</Heading.H3>
                      <img src={viewDetails} alt="상세보기" css={{ marginBottom: '4px' }} />
                    </Container>
                  </Link>
                  <Container justify="flex-end" />
                  <Container direction="column" justify="center" align="center">
                    <Grid
                      columns={{
                        initial: 1,
                        xs: 1,
                        md: 1,
                        lg: 1,
                      }}
                      css={{
                        width: '100%',
                        maxWidth: '100%',
                      }}
                    >
                      {
                        requests.slice(0, 5).map((request) => (
                          <HuntingListItem
                            isUrgencyIcon={true}
                            key={`notice-item-${request.id}`}
                            request={request}
                          />
                        ))
                      }
                    </Grid>
                  </Container>
                </Container>
              )
          }
          </DefaultPaddedContainer>
        )
    }
    </div>
  );
}

export default CatchRequestList;

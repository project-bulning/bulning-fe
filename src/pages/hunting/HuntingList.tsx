import { useState, useEffect } from 'react';
import { Heading } from '@components/text';
import Container from '@components/container';
import Grid from '@components/grid';
import { DefaultPaddedContainer } from '@components/container/variants';
import search from '@assets/icons/search.svg';
import alarmLight from '@assets/icons/alarm-lighter.svg';
import HuntingListItem from '@pages/hunting/HuntingListItem';
import Button from '@components/button';
import routePaths from '@constants/routePaths.ts';
import { Link } from 'react-router-dom';
import { getBugReportList } from '@/api/bugReports';
import { BugReport } from '@/types/bug-report';

function HuntingList() {
  const [requests, setRequests] = useState<BugReport[]>([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

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
        try {
          const responsesInfo = await getBugReportList({
            currentLatitude: latitude,
            currentLongitude: longitude,
          });

          setRequests(responsesInfo.bug_reports);
        } catch (error) {
          console.error('Error fetching bug report list:', error);
        }
      }
    };

    fetchRequests();
  }, [latitude, longitude]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };
  return (
    <DefaultPaddedContainer>
      <Container direction="column">
        <Container justify="space-between" align="center">
          <Container>
            <Heading.H5 css={{ fontWeight: 600 }}>가까운 순</Heading.H5>
          </Container>
          <Container width="auto" gap="8px" align="center">
            <img src={search} alt="검색하기" css={{ width: '21px', height: '21px' }} />
            <img src={alarmLight} alt="알림보기" css={{ width: '30px', height: '30px' }} />
          </Container>
        </Container>
        <Container justify="flex-end" />
        <Container direction="column">
          <Grid
            columns={{
              initial: 1,
              xs: 1,
              md: 1,
              lg: 1,
            }}
            css={{ gridTemplateRows: 'repeat(10, 1fr)' }}
          >
            {requests.slice(0, visibleCount).map((request) => (
              <Link
                to={{ pathname: routePaths.BUG_REPORT_DETAIL }}
                key={request.id}
                state={{ id: request.id, distance: request.distance }}
                css={{ textDecoration: 'none', color: 'inherit' }}
              >
                <HuntingListItem
                  request={request}
                />
              </Link>
            ))}
          </Grid>
          {visibleCount < requests.length && (
          <Container justify="center" css={{ marginTop: '16px' }}>
            <Button onClick={handleLoadMore}>더보기</Button>
          </Container>
          )}
        </Container>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default HuntingList;

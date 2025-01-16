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
import { CatchRequest } from '@/types/request';
import { mockRequestList } from '@/mock/request';

function HuntingList() {
  const [requests, setRequests] = useState<CatchRequest[]>([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    setRequests(mockRequestList);
  }, []);

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
              <Link to={routePaths.BUG_REPORT_DETAIL} css={{ textDecoration: 'none', color: 'inherit' }}>
                <HuntingListItem
                  key={`notice-item-${request.id}`}
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

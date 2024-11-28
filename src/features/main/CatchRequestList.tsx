import { useState, useEffect } from 'react';
import { Heading } from '@components/text';
import Container from '@components/container';
import Grid from '@components/grid';
import CatchRequestListItem from '@features/main/CatchRequestListItem';
import { DefaultPaddedContainer } from '@components/container/variants';
import viewDetails from '@assets/icons/view-details.svg';
import { CatchRequest } from '@/types/request';
import { mockRequestList } from '@/mock/request';

function CatchRequestList() {
  const [requests, setRequests] = useState<CatchRequest[]>([]);

  useEffect(() => {
    setRequests(mockRequestList);
  }, []);

  return (
    <DefaultPaddedContainer>
      <Container direction="column">
        <Container justify="flex-start" align="center" gap="6px" css={{ marginBottom: '10px' }}>
          <Heading.H3 css={{ fontWeight: 600 }}>우리동네 사냥 정보</Heading.H3>
          <img src={viewDetails} alt="상세보기" css={{ marginBottom: '4px' }} />
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
            {
              requests.map((request) => (
                <CatchRequestListItem
                  key={`notice-item-${request.id}`}
                  request={request}
                />
              ))
                            }
          </Grid>
        </Container>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default CatchRequestList;

import { Heading } from '@components/text';
import Container from '@components/container';
import Grid from '@components/grid';
import { DefaultPaddedContainer } from '@components/container/variants';
import viewDetails from '@assets/icons/view-details.svg';
import { Link } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';
import HuntingListItem from '@pages/hunting/HuntingListItem';
import { BugReport } from '@/types/bug-report';

interface CatchRequestListProps {
  requests: BugReport[];
}

function CatchRequestList({ requests }: CatchRequestListProps) {
  return (
    <DefaultPaddedContainer>
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
    </DefaultPaddedContainer>
  );
}

export default CatchRequestList;

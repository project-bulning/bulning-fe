import { Paragraph } from '@components/text';
import { CSSObject } from '@emotion/react';
import Container from '@components/container';
import urgency from '@assets/icons/urgency.svg';
import location from '@assets/icons/location.svg';
import { CatchRequest } from '@/types/request';

interface RequestItemProps {
  request: CatchRequest;
}

function CatchRequestListItem({ request }: RequestItemProps) {
  const paragraphStyle: CSSObject = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  };

  return (
    <Container width="342px" height="118px" padding="19px 35px 19px 12px" gap="10px" css={{ borderBottom: '0.5px solid #4D5D75' }}>
      <img src={request.image_url} alt="image_url" css={{ width: '80px', height: '80px' }} />
      <Container direction="column" justify="flex-start" align="flex-start" gap="7px">
        <Container justify="flex-start" gap="2px">
          <img src={urgency} alt="urgency" css={{ width: '18px', height: '18px' }} />
          <Paragraph variant="medium" css={{ ...paragraphStyle }}>{request.title}</Paragraph>
        </Container>
        <Container justify="space-between" css={{ marginLeft: '19px' }}>
          <Paragraph variant="small" color="#5A5A5A" css={{ ...paragraphStyle }}>{request.location}</Paragraph>
          <Paragraph variant="small" color="#5A5A5A">&#183;</Paragraph>
          <img src={location} alt="urgency" css={{ width: '18px', height: '18px' }} />
          <Paragraph variant="small" color="#5A5A5A" css={{ ...paragraphStyle }}>{request.how_far}</Paragraph>
          <Paragraph variant="small" color="#5A5A5A">&#183;</Paragraph>

          <Paragraph variant="small" color="#5A5A5A" css={{ ...paragraphStyle }}>{request.how_long}</Paragraph>
        </Container>
        <Paragraph variant="small" weight="bold" css={{ ...paragraphStyle, marginLeft: '19px' }}>
          {request.price}
          원
        </Paragraph>
      </Container>
    </Container>
  );
}

export default CatchRequestListItem;

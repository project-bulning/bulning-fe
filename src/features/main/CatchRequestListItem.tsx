import { Paragraph } from '@components/text';
import { CSSObject, useTheme } from '@emotion/react';
import Container from '@components/container';
import urgency from '@assets/icons/urgency.svg';
import location from '@assets/icons/location.svg';
import { CatchRequest } from '@/types/request';

interface RequestItemProps {
  request: CatchRequest;
}

function CatchRequestListItem({ request }: RequestItemProps) {
  const theme = useTheme();

  const paragraphStyle: CSSObject = {
    display: 'inline-block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  };

  const subParagraphStyle: CSSObject = {
    ...paragraphStyle,
    color: `${theme.colors.text.moderate}`,
    fontSize: '12px',
  };

  return (
    <Container padding="19px 35px 19px 12px" gap="10px" css={{ borderBottom: '0.5px solid rgba(77, 93, 117, 0.50)', minWidth: '342px', minHeight: '118px' }}>
      <img src={request.image_url} alt="image_url" css={{ width: '80px', height: '80px' }} />
      <Container
        direction="column"
        justify="flex-start"
        align="flex-start"
        gap="7px"
        css={{
          overflow: 'hidden',
        }}
      >
        <Container justify="flex-start" gap="2px">
          <img src={urgency} alt="urgency" css={{ width: '21px', height: '21px' }} />
          <Paragraph css={{ ...paragraphStyle, fontWeight: 500 }}>{request.title}</Paragraph>
        </Container>
        <Container justify="space-between" css={{ paddingLeft: '19px' }}>
          <Paragraph css={{ ...subParagraphStyle, flex: 2 }}>{request.location}</Paragraph>
          <Paragraph color={theme.colors.text.moderate}>&#183;</Paragraph>
          <img src={location} alt="urgency" css={{ width: '18px', height: '18px' }} />
          <Paragraph css={{ ...subParagraphStyle, flex: 1 }}>{request.how_far}</Paragraph>
          <Paragraph color={theme.colors.text.moderate}>&#183;</Paragraph>
          <Paragraph css={{ ...subParagraphStyle, flex: 1.2 }}>{request.how_long}</Paragraph>
        </Container>
        <Paragraph variant="small" css={{ ...paragraphStyle, paddingLeft: '19px', fontWeight: 600 }}>
          {request.price}
          원
        </Paragraph>
      </Container>
    </Container>
  );
}

export default CatchRequestListItem;

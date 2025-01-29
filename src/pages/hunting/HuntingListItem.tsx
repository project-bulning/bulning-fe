import { Paragraph } from '@components/text';
import { CSSObject, useTheme } from '@emotion/react';
import Container from '@components/container';
import location from '@assets/icons/location.svg';
import { BugReport } from '@/types/bug-report';

interface HuntingItemProps {
  request: BugReport;
}

function HuntingListItem({ request }: HuntingItemProps) {
  const theme = useTheme();

  const paragraphStyle: CSSObject = {
    display: 'inline-block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    paddingLeft: '19px',
  };

  const subParagraphStyle: CSSObject = {
    ...paragraphStyle,
    paddingLeft: '0',
    color: `${theme.colors.text.moderate}`,
    fontSize: '12px',
  };

  return (
    <Container padding="19px 35px 19px 0" gap="10px" css={{ maxWidth: '350px', borderBottom: '0.5px solid rgba(77, 93, 117, 0.50)' }}>
      <img src={request.bug_image_url || ''} alt="image_url" css={{ width: '80px', height: '80px', flexShrink: 0 }} />
      <Container
        direction="column"
        justify="center"
        align="stretch"
        gap="7px"
        css={{
          overflow: 'hidden',
        }}
      >
        <Container justify="flex-start" gap="2px">
          <Paragraph weight="medium" css={{ ...paragraphStyle }}>{request.title}</Paragraph>
        </Container>
        <Container justify="flex-start" align="center" gap="2px" css={{ paddingLeft: '19px' }}>
          <Paragraph css={{ ...subParagraphStyle }}>{request.location}</Paragraph>
          <Paragraph color={theme.colors.text.moderate}>&#183;</Paragraph>
          <img src={location} alt="location" css={{ width: '18px', height: '18px' }} />
          <Paragraph css={{ ...subParagraphStyle }}>{`${request.distance} m`}</Paragraph>
          <Paragraph color={theme.colors.text.moderate}>&#183;</Paragraph>
          <Paragraph css={{ ...subParagraphStyle }}>{`${request.created_at}분 전`}</Paragraph>
        </Container>
        <Paragraph variant="small" weight="semi-bold" css={{ ...paragraphStyle }}>
          {request.price}
          원
        </Paragraph>
      </Container>
    </Container>
  );
}

export default HuntingListItem;

import { Paragraph } from '@components/text';
import { CSSObject, useTheme } from '@emotion/react';
import Container from '@components/container';
import urgency from '@assets/icons/urgency.svg';
import location from '@assets/icons/location.svg';
import { BugReport } from '@/types/bug-report';

interface HuntingItemProps {
  request: BugReport;
}

function CatchRequestListItem({ request }: HuntingItemProps) {
  const theme = useTheme();

  const titleStyle: CSSObject = {
    display: 'block',
    overflow: 'inherit',
    whiteSpace: 'nowrap',
    width: '60px',
    textOverflow: 'ellipsis',
  };

  const paragraphStyle: CSSObject = {
    display: 'inline-block',
    overflow: 'inherit',
    whiteSpace: 'nowrap',
    width: 'fit-content',
    maxWidth: '60px',
    textOverflow: 'ellipsis',
  };

  const subParagraphStyle: CSSObject = {
    ...paragraphStyle,
    color: `${theme.colors.text.moderate}`,
    fontSize: '12px',
  };

  return (
    <Container
      padding="19px 35px 19px 12px"
      gap="10px"
      width="100%"
      css={{
        borderBottom: '0.5px solid rgba(77, 93, 117, 0.50)',
      }}
    >
      {request.bug_image_url ? (
        <img src={request.bug_image_url} alt="image_url" css={{ width: '80px', height: '80px' }} />
      ) : (
        <Container
          css={{
            width: '80px',
            height: '80px',
            minWidth: '80px',
            backgroundColor: '#f0f0f0',
          }}
        />
      )}
      <Container
        direction="column"
        justify="flex-start"
        align="flex-start"
        gap="7px"
        css={{
          overflow: 'hidden',
        }}
      >
        <Container gap="2px" width="20px">
          <img src={urgency} alt="urgency" css={{ width: '21px', height: '21px' }} />
          <Paragraph weight="medium" css={{ ...titleStyle }}>{request.title}</Paragraph>
        </Container>
        <Container justify="space-between" align="center" gap="1px" css={{ paddingLeft: '19px', maxWidth: '130px' }}>
          <Paragraph css={{ ...subParagraphStyle }}>{request.location}</Paragraph>
          <Paragraph color={theme.colors.text.moderate}>&#183;</Paragraph>
          <Container align="center" width="fit-content">
            <img src={location} alt="location" css={{ width: '18px', height: '18px' }} />
            <Paragraph css={{ ...subParagraphStyle }}>
              {request.distance}
              m
            </Paragraph>
          </Container>
          <Paragraph color={theme.colors.text.moderate}>&#183;</Paragraph>
          <Paragraph css={{ ...subParagraphStyle }}>{request.created_at}</Paragraph>
        </Container>
        <Paragraph variant="small" weight="semi-bold" css={{ ...paragraphStyle, paddingLeft: '19px' }}>
          {request.price}
          원
        </Paragraph>
      </Container>
    </Container>
  );
}

export default CatchRequestListItem;

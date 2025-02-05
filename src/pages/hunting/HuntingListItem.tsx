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
    paddingLeft: '0',
    color: `${theme.colors.text.moderate}`,
    fontSize: '12px',
  };

  return (
    <Container
      padding="19px 35px 19px 0"
      gap="10px"
      width="100%"
      css={{ borderBottom: '0.5px solid rgba(77, 93, 117, 0.50)' }}
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
        justify="center"
        align="stretch"
        gap="7px"
        css={{
          overflow: 'hidden',
        }}
      >
        <Container>
          <Paragraph weight="medium" css={{ ...titleStyle }}>{request.title}</Paragraph>
        </Container>
        <Container justify="flex-start" align="center" gap="2px">
          <Paragraph css={{ ...subParagraphStyle }}>{request.location}</Paragraph>
          <Paragraph color={theme.colors.text.moderate}>&#183;</Paragraph>
          <img src={location} alt="location" css={{ width: '18px', height: '18px' }} />
          <Paragraph css={{ ...subParagraphStyle }}>{`${request.distance} m`}</Paragraph>
          <Paragraph color={theme.colors.text.moderate}>&#183;</Paragraph>
          <Paragraph css={{ ...subParagraphStyle }}>{`${request.created_at}`}</Paragraph>
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

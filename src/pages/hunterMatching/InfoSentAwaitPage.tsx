import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import Button from '@components/button';
import { useTheme } from '@emotion/react';

function InfoSentAwaitPage() {
  const theme = useTheme();
  return (
    <DefaultPaddedContainer>
      <Container direction="column" justify="space-between" padding="96px 0 10px 0" height="100dvh">
        <Container direction="column" gap="5px">
          <Heading.H3_5 weight="medium">헬피에게 정보를 보냈어요</Heading.H3_5>
          <Heading.H3_5 weight="medium">이 화면에서 잠시만 기다려주세요</Heading.H3_5>
        </Container>
        <Container direction="column" align="center" gap="13px">
          <Paragraph css={{ fontSize: '12px', color: `${theme.colors.text.subtle}` }}>헬피가 사냥에 동의하면 버튼이 활성화돼요</Paragraph>
          <Button>확인</Button>
        </Container>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default InfoSentAwaitPage;

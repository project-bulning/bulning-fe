import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import { useTheme } from '@emotion/react';

function LoginPage() {
  const theme = useTheme();
  return (
    <DefaultPaddedContainer>
      <Container height="100%" direction="column" justify="space-between" css={{ minHeight: '700px' }}>
        <Container direction="column" align="flex-start" css={{ marginTop: '89px' }}>
          <Heading.H3 css={{ fontWeight: '600', lineHeight: '38px' }}>우리 동네 벌레잡이 매칭 서비스</Heading.H3>
          <Heading.H2 css={{ fontWeight: '600', lineHeight: '38px' }}>BULNING</Heading.H2>
          <Container justify="flex-start" align="flex-start" css={{ fontSize: '72px' }}>🐛</Container>
        </Container>
        <Container direction="column">
          <Paragraph variant="small" color={theme.colors.text.moderate}>SNS 계정으로 간편 가입하기</Paragraph>
          <Container
            height="50px"
            width="100%"
            css={{
              borderRadius: '8px', backgroundColor: '#FEE500', fontSize: '18px', marginTop: '15px',
            }}
          >
            카카오톡으로 시작하기
          </Container>
        </Container>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default LoginPage;

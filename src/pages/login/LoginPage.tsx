import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import { useTheme } from '@emotion/react';
import Button from '@components/button';
import logo from '@assets/bulning-logo.svg';

function LoginPage() {
  const theme = useTheme();
  const handleLoginClick = () => {
    window.location.href = `${import.meta.env.VITE_BASE_URL}/api/user/login/kakao`;
  };
  return (
    <DefaultPaddedContainer>
      <Container height="100dvh" direction="column" justify="space-between" css={{ paddingBottom: '10px', paddingTop: '76px' }}>
        <Container direction="column" align="flex-start" gap="8px">
          <Heading.H3 weight="semi-bold">우리 동네 벌레잡이 매칭 서비스</Heading.H3>
          <Heading.H2 weight="semi-bold" css={{ fontSize: '30px' }}>BULNING</Heading.H2>
          <img src={logo} alt="logo" css={{ width: '72px', marginTop: '2px' }} />
        </Container>
        <Container direction="column" align="center" gap="12px">
          <Paragraph variant="small" color={theme.colors.text.moderate}>SNS 계정으로 간편 가입하기</Paragraph>
          <Button
            onClick={handleLoginClick}
            css={{
              height: '50px',
              width: '100%',
              borderRadius: '8px',
              backgroundColor: '#FEE500',
              fontSize: '18px',
              border: 'none',
            }}
          >
            카카오톡으로 시작하기
          </Button>
        </Container>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default LoginPage;

import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import { css, useTheme } from '@emotion/react';
import Button from '@components/button';
import logo from '@/assets/bulning-logo.svg';

function LoginPage() {
  const theme = useTheme();
  const handleLoginClick = () => {
    window.location.href = `${import.meta.env.VITE_BASE_URL}/user/login/kakao`;
  };
  const loginButtonStyle = css`
    height: 50px;
    width: 100%;
    border-radius: ${theme.corners.small};
    background-color: #FEE500;
    margin-top: 15px;
    border: none;
    &:hover {
      border: none;
    }
  `;
  return (
    <DefaultPaddedContainer>
      <Container height="100dvh" direction="column" justify="space-between" css={{ paddingBottom: '61px', paddingTop: '89px' }}>
        <Container direction="column" align="flex-start">
          <Heading.H3 css={{ fontWeight: '600', lineHeight: '38px' }}>우리 동네 벌레잡이 매칭 서비스</Heading.H3>
          <Heading.H2 css={{ fontWeight: '600', lineHeight: '45px' }}>BULNING</Heading.H2>
          <img src={logo} alt="logo" width="72px" />
        </Container>
        <Container direction="column">
          <Paragraph variant="small" color={theme.colors.text.moderate}>SNS 계정으로 간편 가입하기</Paragraph>
          <Button
            onClick={handleLoginClick}
            css={loginButtonStyle}
          >
            <Paragraph variant="medium">
              카카오톡으로 시작하기
            </Paragraph>
          </Button>
        </Container>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default LoginPage;

import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading } from '@components/text';
import Button from '@components/button';
import { useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';

function InfoSentAwaitPage() {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate(routePaths.MAIN);
  };

  return (
    <DefaultPaddedContainer>
      <Container direction="column" justify="space-between" padding="96px 0 10px 0" height="100dvh">
        <Container direction="column" gap="5px">
          <Heading.H3_5 weight="medium">정보를 보냈어요</Heading.H3_5>
          <Heading.H3_5 weight="medium">이 화면에서 잠시만 기다려주세요</Heading.H3_5>
        </Container>
        <Container direction="column" align="center" gap="13px">
          <Button onClick={handleBtnClick}>확인</Button>
        </Container>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default InfoSentAwaitPage;

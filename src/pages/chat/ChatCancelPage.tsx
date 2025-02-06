import { DefaultPaddedContainer } from '@components/container/variants';
import Button from '@components/button';
import { Heading } from '@components/text';
import Container from '@components/container';
import useAfterHuntingPageStyle from '@pages/afterHunting/useAfterHuntingPageStyle';
import { useLocation, useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';

function ChatCancelPage() {
  const {
    headingStyle,
    btnPositionStyle,
  } = useAfterHuntingPageStyle();

  const navigate = useNavigate();
  const location = useLocation();

  const role = location.state?.role;

  const handleNavigate = () => {
    navigate(routePaths.BUG_REPORT);
  };

  return (
    <DefaultPaddedContainer>
      <Container direction="column" css={headingStyle}>
        <Heading.H3_5 weight="semi-bold">매칭이 취소되었어요</Heading.H3_5>
        {(role === 'hunter')
          ? (
            <Heading.H3_5 weight="semi-bold">다른 사냥을 진행해보세요</Heading.H3_5>
          ) : (
            <Heading.H3_5 weight="semi-bold">다른 헌터를 기다려보세요</Heading.H3_5>
          )}
      </Container>
      <Container css={btnPositionStyle}>
        <Button
          variant="default"
          onClick={handleNavigate}
        >
          다음으로
        </Button>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default ChatCancelPage;

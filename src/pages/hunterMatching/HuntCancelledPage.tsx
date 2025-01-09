import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading } from '@components/text';
import Button from '@components/button';

function HuntCancelledPage() {
  return (
    <DefaultPaddedContainer>
      <Container direction="column" justify="space-between" padding="96px 0 10px 0" height="100dvh">
        <Container direction="column" gap="5px">
          <Heading.H3_5 weight="medium">매칭이 취소되었어요</Heading.H3_5>
          <Heading.H3_5 weight="medium">다른 사냥을 진행해보세요</Heading.H3_5>
        </Container>
        <Button>사냥 목록으로</Button>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default HuntCancelledPage;

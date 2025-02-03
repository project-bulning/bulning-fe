import Button from '@components/button';
import BottomSheet from '@components/bottomSheet';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import { useNavigate } from 'react-router-dom';
import { HandleBottomSheetProps } from '@components/bottomSheet/handleBottomSheetProps';
import routePaths from '@constants/routePaths';

function HuntEndBottomSheet({ isOpen, onClose }: HandleBottomSheetProps) {
  const navigate = useNavigate();

  const handleStartDeal = () => {
    navigate(routePaths.DEAL_PROCESS);
  };

  return (
    <BottomSheet isOpen={isOpen} onChange={onClose}>
      <Container
        direction="column"
        align="flex-start"
        gap="15px"
      >
        <Heading.H3_5 weight="semi-bold">사냥이 끝났나요?</Heading.H3_5>
        <Container
          direction="column"
          align="flex-start"
          gap="6px"
        >
          <Paragraph>사냥 후에는 서비스의 안내에 따라</Paragraph>
          <Paragraph>대면 거래를 진행할 수 있어요</Paragraph>
          <Container justify="space-between" gap="14px" css={{ marginTop: '34px' }}>
            <Button variant="secondary" onClick={onClose}>아직이요</Button>
            <Button onClick={handleStartDeal}>거래하기</Button>
          </Container>
        </Container>
      </Container>
    </BottomSheet>
  );
}

export default HuntEndBottomSheet;

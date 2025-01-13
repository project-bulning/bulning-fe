import Button from '@components/button';
import BottomSheet from '@components/bottomSheet';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import { useNavigate } from 'react-router-dom';
import { HandleBottomSheetProps } from '@components/bottomSheet/handleBottomSheetProps';

function DealEndBottomSheet({ isOpen, onClose }: HandleBottomSheetProps) {
  const navigate = useNavigate();

  const handleEndDeal = () => {
    navigate('/');
  };

  return (
    <BottomSheet isOpen={isOpen} onChange={onClose}>
      <Container
        direction="column"
        align="flex-start"
        gap="15px"
      >
        <Heading.H3_5 weight="semi-bold">거래와 함께 퀵챗을 종료할게요</Heading.H3_5>
        <Container
          direction="column"
          align="flex-start"
          gap="6px"
        >
          <Paragraph>채팅은 강제 종료되고</Paragraph>
          <Paragraph>다시 접근할 수 없습니다</Paragraph>
          <Container justify="space-between" gap="14px" css={{ marginTop: '34px' }}>
            <Button onClick={handleEndDeal}>거래 마치기</Button>
          </Container>
        </Container>
      </Container>
    </BottomSheet>
  );
}

export default DealEndBottomSheet;

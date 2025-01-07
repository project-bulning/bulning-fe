import Button from '@components/button';
import BottomSheet from '@components/bottomSheet';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import useBottomSheetBtnStyle from '@components/bottomSheet/useBottomSheetBtnStyle';
import { useNavigate } from 'react-router-dom';

interface HuntEndBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

function HuntEndBottomSheet({ isOpen, onClose }: HuntEndBottomSheetProps) {
  const {
    btnStyle,
    cancelBtnStyle,
  } = useBottomSheetBtnStyle();

  const navigate = useNavigate();

  const handleStartDeal = () => {
    navigate('/');
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
          <Container justify="space-between" gap="14px">
            <Button css={cancelBtnStyle} onClick={onClose}>아직이요</Button>
            <Button css={btnStyle} variant="primary" onClick={handleStartDeal}>거래하기</Button>
          </Container>
        </Container>
      </Container>
    </BottomSheet>
  );
}

export default HuntEndBottomSheet;

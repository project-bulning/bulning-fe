import Button from '@components/button';
import BottomSheet from '@components/bottomSheet';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import useBottomSheetBtnStyle from '@components/bottomSheet/useBottomSheetBtnStyle';

interface CameraRequestBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

function CameraRequestBottomSheet({ isOpen, onClose }: CameraRequestBottomSheetProps) {
  const {
    BtnStyle,
    RejectBtnStyle,
  } = useBottomSheetBtnStyle();
  return (
    <BottomSheet isOpen={isOpen} onChange={onClose}>
      <Container
        direction="column"
        justify="flex-start"
        align="flex-start"
        gap="15px"
      >
        <Heading.H4 weight="bold">지금 벌레 사진을 찍을 수 있나요?</Heading.H4>
        <Container
          direction="column"
          justify="flex-start"
          align="flex-start"
          gap="6px"
        >
          <Paragraph>실시간으로 카메라를 연동해서</Paragraph>
          <Paragraph>사진을 촬영할 예정이에요.</Paragraph>
          <Container justify="space-between" gap="14px">
            <Button css={BtnStyle}>갤러리 열기</Button>
            <Button css={BtnStyle} variant="primary">촬영하기</Button>
          </Container>
          <Container css={RejectBtnStyle}>
            사진 없이 진행하기
          </Container>
        </Container>
      </Container>
    </BottomSheet>
  );
}

export default CameraRequestBottomSheet;

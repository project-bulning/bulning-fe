import Button from '@components/button';
import BottomSheet from '@components/bottomSheet';
import Container from '@components/container';
import { Heading } from '@components/text';
import useBottomSheetBtnStyle from '@components/bottomSheet/useBottomSheetBtnStyle';

interface AnnouncementBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

function AnnouncementBottomSheet({ isOpen, onClose }: AnnouncementBottomSheetProps) {
  const {
    BtnStyle,
    CancelBtnStyle,
  } = useBottomSheetBtnStyle();
  return (
    <BottomSheet isOpen={isOpen} onChange={onClose} hideHandleBar>
      <Container
        direction="column"
        justify="flex-start"
        align="flex-start"
        gap="15px"
      >
        <Heading.H4 weight="bold">안내사항을 확인해주세요</Heading.H4>
        <Container
          direction="column"
          justify="flex-start"
          align="flex-start"
          gap="6px"
        >
          <Container padding="0 20px">
            <ul css={{
              listStyleType: 'inherit', fontSize: '14px', letterSpacing: '-0.32px', lineHeight: '23px',
            }}
            >
              <li>지역 내에 있는 헌터들에게 푸시 알림이 전송돼요.</li>
              <li>지도를 통해 헬피의 대략적인 위치만 헌터에게 나타나요.</li>
              <li>헬피는 헌터의 정보를 보고 매칭 여부를 선택할 수 있어요.</li>
              <li>매칭 후에 퀵챗이 열리고, 주소를 포함한 정보를 주고받을 수 있어요.</li>
            </ul>
          </Container>
          <Container direction="column" gap="6px">
            <Button css={{ ...BtnStyle, marginTop: '21px' }} variant="primary">동의하고 진행하기</Button>
            <Button css={{ ...CancelBtnStyle, margin: 0 }}>취소</Button>
          </Container>
        </Container>
      </Container>
    </BottomSheet>
  );
}

export default AnnouncementBottomSheet;

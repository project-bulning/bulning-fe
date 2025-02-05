import Button from '@components/button';
import BottomSheet from '@components/bottomSheet';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import routePaths from '@constants/routePaths.ts';
import { useNavigate } from 'react-router-dom';
import { endHunting } from '@/api/afterHunting';

interface MoveToQuickChatBottomSheetProps {
  matchId: number;
  isOpen: boolean;
  onClose: () => void;
}

function EndQuickChatBottomSheet({ matchId, isOpen, onClose }: MoveToQuickChatBottomSheetProps) {
  const navigate = useNavigate();

  const handleBtnClick = async () => {
    try {
      if (!matchId) {
        alert('매치 정보가 없습니다.');
        return;
      }
      await endHunting(matchId);
      alert('사냥이 종료되었습니다.');
      navigate(routePaths.MAIN);
    } catch (error) {
      console.error('사냥 종료 실패:', error);
      alert('사냥 종료에 실패했습니다.');
    }
  };

  return (
    <BottomSheet isOpen={isOpen} onChange={onClose}>
      <Container
        direction="column"
        justify="flex-start"
        align="flex-start"
        gap="15px"
      >
        <Heading.H3_5 weight="bold">거래와 함께 퀵챗을 종료할게요</Heading.H3_5>
        <Container direction="column" padding="0 0 19px 0" gap="5px">
          <Paragraph variant="medium">채팅은 강제 종료되고</Paragraph>
          <Paragraph variant="medium">다시 접근할 수 없습니다</Paragraph>
        </Container>
        <Container direction="column">
          <Button onClick={handleBtnClick}>거래 마치기</Button>
        </Container>
      </Container>
    </BottomSheet>
  );
}

export default EndQuickChatBottomSheet;

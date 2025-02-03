import Button from '@components/button';
import BottomSheet from '@components/bottomSheet';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import { useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';
import { useState } from 'react';
import { updateMatchStatus } from '@/api/hunterMatching';

interface MoveToQuickChatBottomSheetProps {
  matchId: number;
  isOpen: boolean;
  onClose: () => void;
}

function MoveToQuickChatBottomSheet({ matchId, isOpen, onClose }: MoveToQuickChatBottomSheetProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleBtnClick = async () => {
    setLoading(true);
    try {
      await updateMatchStatus(matchId, true);
      navigate(routePaths.INFO_SENT);
      console.log('매칭 수락');
    } catch (error) {
      console.error('매칭 상태 업데이트 실패:', error);
    } finally {
      setLoading(false);
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
        <Heading.H3_5 weight="bold">퀵챗으로 이동할게요</Heading.H3_5>
        <Container direction="column" padding="0 0 19px 0" gap="5px">
          <Paragraph variant="medium" weight="regular">헌터와 1대1로 대화하며</Paragraph>
          <Paragraph variant="medium" weight="regular">빠르게 도움을 요청하세요</Paragraph>
        </Container>
        <Container direction="column">
          <Button onClick={handleBtnClick}>{loading ? '처리 중...' : '대화하러 가기'}</Button>
        </Container>
      </Container>
    </BottomSheet>
  );
}

export default MoveToQuickChatBottomSheet;

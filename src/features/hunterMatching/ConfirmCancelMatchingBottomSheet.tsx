import Button from '@components/button';
import BottomSheet from '@components/bottomSheet';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import { useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';
import { useState } from 'react';
import { updateMatchStatus } from '@/api/hunterMatching';

interface ConfirmCancelMatchingBottomSheetProps {
  matchId: number;
  isOpen: boolean;
  onClose: () => void;
}

function ConfirmCancelMatchingBottomSheet({
  matchId,
  isOpen,
  onClose,
}: ConfirmCancelMatchingBottomSheetProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleCancelBtn = async () => {
    setLoading(true);
    try {
      await updateMatchStatus(matchId, false);
      navigate(routePaths.BUG_REPORT_DETAIL);
      console.log('매칭 거절');
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
        <Heading.H3_5 weight="bold">헌터 매칭을 취소하시겠어요?</Heading.H3_5>
        <Container direction="column" padding="0 0 19px 0" gap="5px">
          <Paragraph variant="medium" weight="regular">이후에도 다른 헌터의 요청을 받을 수 있지만</Paragraph>
          <Paragraph variant="medium" weight="regular">시간이 더 걸릴 수 있어요</Paragraph>
        </Container>
        <Container gap="14px">
          <Button variant="secondary" onClick={onClose}>매칭 돌아가기</Button>
          <Button onClick={handleCancelBtn}>{loading ? '처리 중...' : '취소하기'}</Button>
        </Container>
      </Container>
    </BottomSheet>
  );
}

export default ConfirmCancelMatchingBottomSheet;

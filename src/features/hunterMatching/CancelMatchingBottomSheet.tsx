import Button from '@components/button';
import BottomSheet from '@components/bottomSheet';
import Container from '@components/container';
import { Heading } from '@components/text';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';
import toast from 'react-hot-toast';
import { endHunting } from '@/api/afterHunting';
import { getMyInfo } from '@/api/user';

export interface CancelMatchingBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

function CancelMatchingBottomSheet({
  isOpen, onClose,
}: CancelMatchingBottomSheetProps) {
  const navigate = useNavigate();
  const [matchId, setMatchId] = useState<number | null>(null);

  useEffect(() => {
    const fetchMyInfo = async () => {
      try {
        const data = await getMyInfo();
        if (data.match && data.match.id) {
          setMatchId(data.match.id);
        } else {
          setMatchId(null);
        }
      } catch (error) {
        console.error('Error fetching my info:', error);
      }
    };

    if (isOpen) {
      fetchMyInfo();
    }
  }, [isOpen]);

  const handleCancel = async () => {
    if (matchId === null) {
      console.error('Match ID is not available');
      return;
    }

    try {
      await endHunting(matchId, true);
      console.log('Hunting has been canceled');
      toast.success('거래가 취소되었어요');
      navigate(routePaths.BUG_REPORT);
    } catch (error) {
      console.error('Error canceling hunting:', error);
    }
  };
  return (
    <BottomSheet isOpen={isOpen} onChange={onClose}>
      <Container
        direction="column"
        align="flex-start"
        gap="23px"
      >
        <Heading.H3_5 weight="semi-bold">이런 경우에 거래를 취소할 수 있어요</Heading.H3_5>
        <Container
          direction="column"
          align="flex-start"
          gap="34px"
        >
          <Container padding="0 20px">
            <ul css={{
              listStyleType: 'inherit', fontSize: '14px', letterSpacing: '-0.32px', lineHeight: '23px',
            }}
            >
              <li>상대가 연락을 받지 않는 경우</li>
              <li>헌터가 벌레를 잡지 못한 경우</li>
              <li>헌터가 벌레를 잡으러 갔으나, 벌레가 사라진 경우</li>
            </ul>
          </Container>
          <Container gap="14px">
            <Button variant="secondary" onClick={onClose}>채팅 돌아가기</Button>
            <Button onClick={handleCancel}>취소하기</Button>
          </Container>
        </Container>
      </Container>
    </BottomSheet>
  );
}

export default CancelMatchingBottomSheet;

import Button from '@components/button';
import BottomSheet from '@components/bottomSheet';
import Container from '@components/container';
import { Heading } from '@components/text';
import { useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths.ts';
import { useState } from 'react';
import { BugInfo } from '@/types/bug';
import { submitBugReportsForm, uploadImage } from '@/api/helpee';
import { getLatLng } from '@/utils/geoLocation';

export interface AnnouncementBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  formData: BugInfo;
  bugImage: File | null;
}

function AnnouncementBottomSheet({
  isOpen, onClose, formData, bugImage,
}: AnnouncementBottomSheetProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleNextBtn = async () => {
    try {
      setLoading(true);

      const { latitude, longitude } = await getLatLng();

      let imageUrl = '';
      if (bugImage) {
        imageUrl = await uploadImage(bugImage);
      }

      const finalData = {
        ...formData,
        bug_image_url: imageUrl,
        latitude,
        longitude,
      };

      await submitBugReportsForm(finalData);
      navigate(routePaths.BUG_REPORT);
    } catch (error) {
      console.error('게시글 post 실패:', error);
    } finally {
      setLoading(false);
      navigate(routePaths.BUG_REPORT);
    }
  };

  return (
    <BottomSheet isOpen={isOpen} onChange={onClose}>
      <Container
        direction="column"
        align="flex-start"
        gap="15px"
      >
        <Heading.H3_5 weight="semi-bold">안내사항을 확인해주세요</Heading.H3_5>
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
              <li>지역 내에 있는 헌터들에게 푸시 알림이 전송돼요.</li>
              <li>지도를 통해 헬피의 대략적인 위치만 헌터에게 나타나요.</li>
              <li>헬피는 헌터의 정보를 보고 매칭 여부를 선택할 수 있어요.</li>
              <li>매칭 후에 퀵챗이 열리고, 주소를 포함한 정보를 주고받을 수 있어요.</li>
            </ul>
          </Container>
          <Container direction="column" gap="6px">
            <Button onClick={handleNextBtn}>{loading ? '게시글 업로드 중...' : '동의하고 진행하기'}</Button>
            <Button variant="secondary" onClick={onClose}>취소</Button>
          </Container>
        </Container>
      </Container>
    </BottomSheet>
  );
}

export default AnnouncementBottomSheet;

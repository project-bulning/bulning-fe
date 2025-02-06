import {
  ChangeEvent, useRef, useState, useCallback,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { css, useTheme } from '@emotion/react';
import { Cropper } from 'react-cropper';
import CropperJS from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import Button from '@components/button';
import BottomSheet from '@components/bottomSheet';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import routePaths from '@constants/routePaths';
import useAfterHuntingPageStyle from '@pages/afterHunting/useAfterHuntingPageStyle';
import { saveHunterImage, uploadHunterImage } from '@/api/hunterMatching';
import { submitHunterAlarm } from '@/api/hunting';

export interface FaceEnrollBottomSheetProps {
  reportId: number;
  isOpen: boolean;
  onClose: () => void;
}

type ReactCropperElement = HTMLImageElement & {
  cropper: CropperJS;
};

function FaceEnrollBottomSheet({ reportId, isOpen, onClose }: FaceEnrollBottomSheetProps) {
  const { btnPositionStyle } = useAfterHuntingPageStyle();
  const theme = useTheme();
  const overlayStyle = css`
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.colors.text.moderate};
`;

  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const cropperRef = useRef<ReactCropperElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleGalleryButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleGalleryOpen = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedImage(url);
    }
  };

  const handleCropDone = useCallback(async () => {
    if (!cropperRef.current) return;

    const { cropper } = cropperRef.current;
    const canvas = cropper.getCroppedCanvas();
    if (!canvas) return;

    setIsUploading(true);

    canvas.toBlob(async (blob: Blob | null) => {
      if (!blob) {
        setIsUploading(false);
        return;
      }

      const file = new File([blob], 'cropped-image.jpg', { type: 'image/jpeg' });

      try {
        const imageUrl = await uploadHunterImage(file);
        await saveHunterImage(imageUrl, reportId);

        await submitHunterAlarm(reportId);
        console.log('알림 요청 완료');

        navigate(routePaths.INFO_SENT);
      } catch (error) {
        console.error('이미지 업로드 또는 저장 중 오류 발생:', error);
      } finally {
        setIsUploading(false);
      }
    }, 'image/jpeg', 1);
  }, [navigate, reportId]);

  return (
    <>
      <BottomSheet isOpen={isOpen} onChange={onClose}>
        <Container direction="column" align="flex-start" gap="20px">
          <Heading.H4 weight="bold">인식 가능한 얼굴 사진을 등록해주세요</Heading.H4>
          <Container direction="column" align="flex-start" gap="28px">
            <Container direction="column" gap="5px">
              <Paragraph variant="large">얼굴이 잘 보이지 않을 경우</Paragraph>
              <Paragraph variant="large">매칭이 이루어지지 않을 수 있어요</Paragraph>
            </Container>
            <Container direction="column" gap="8px">
              <Container justify="space-between" gap="14px">
                <Button variant="default" onClick={handleGalleryButtonClick}>
                  본인 사진 등록하기
                </Button>
                <input
                  ref={fileInputRef}
                  id="gallery-input"
                  type="file"
                  accept="image/*"
                  css={{ display: 'none' }}
                  onChange={handleGalleryOpen}
                />
              </Container>
            </Container>
          </Container>
        </Container>
      </BottomSheet>

      {(selectedImage) && (
        <Container direction="column" justify="center" gap="10px" css={overlayStyle}>
          <Cropper
            ref={cropperRef}
            zoomable
            aspectRatio={1}
            initialAspectRatio={1}
            guides={true}
            src={selectedImage ?? ''}
            viewMode={1}
            background={false}
          />
          <Container css={btnPositionStyle}>
            <Button variant="secondary" onClick={handleCropDone}>
              {isUploading ? '업로드 중...' : '본인 사진 등록하기'}
            </Button>
          </Container>
        </Container>
      )}
    </>
  );
}

export default FaceEnrollBottomSheet;

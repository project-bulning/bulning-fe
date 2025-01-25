import {
  ChangeEvent, useRef, useState, useCallback,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { css, useTheme } from '@emotion/react';
import { Cropper } from 'react-cropper';
import CropperJS from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import Button from '@components/button';
import BottomSheet from '@components/bottomSheet';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import useBottomSheetBtnStyle from '@components/bottomSheet/useBottomSheetBtnStyle';
import routePaths from '@constants/routePaths';
import Camera from '@components/camera';
import useAfterHuntingPageStyle from '@pages/afterHunting/useAfterHuntingPageStyle';

interface CameraRequestBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

type ReactCropperElement = HTMLImageElement & {
  cropper: CropperJS;
};

function CameraRequestBottomSheet({ isOpen, onClose }: CameraRequestBottomSheetProps) {
  const { rejectBtnStyle } = useBottomSheetBtnStyle();
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
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);

  const cropperRef = useRef<ReactCropperElement | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleCapture = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    setCapturedImage(url);
    setIsCameraOpen(false);
  };

  const handleCropDone = useCallback(() => {
    if (!cropperRef.current) return;

    const { cropper } = cropperRef.current;
    const canvas = cropper.getCroppedCanvas();
    if (!canvas) return;

    canvas.toBlob((blob: Blob | null) => {
      if (!blob) return;
      const file = new File([blob], 'cropped-image.jpg', { type: 'image/jpeg' });
      navigate(routePaths.BUG, { state: { croppedImage: file } });
    }, 'image/jpeg', 1);
  }, [navigate]);

  return (
    <>
      <BottomSheet isOpen={isOpen} onChange={onClose}>
        <Container direction="column" align="flex-start" gap="20px">
          <Heading.H4 weight="bold">지금 벌레 사진을 찍을 수 있나요?</Heading.H4>
          <Container direction="column" align="flex-start" gap="28px">
            <Container direction="column" gap="5px">
              <Paragraph variant="large">실시간으로 카메라를 연동해서</Paragraph>
              <Paragraph variant="large">사진을 촬영할 예정이에요.</Paragraph>
            </Container>
            <Container direction="column" gap="8px">
              <Container justify="space-between" gap="14px">
                <Button variant="secondary" onClick={handleGalleryButtonClick}>
                  갤러리 열기
                </Button>
                <input
                  ref={fileInputRef}
                  id="gallery-input"
                  type="file"
                  accept="image/*"
                  css={{ display: 'none' }}
                  onChange={handleGalleryOpen}
                />
                <Button onClick={() => setIsCameraOpen(true)}>촬영하기</Button>
              </Container>
              <Container justify="center">
                <Link to={routePaths.BUG}>
                  <Paragraph css={rejectBtnStyle}>사진 없이 진행하기</Paragraph>
                </Link>
              </Container>
            </Container>
          </Container>
        </Container>
      </BottomSheet>

      {isCameraOpen && (
        <Container css={overlayStyle}>
          <Camera onCapture={handleCapture} />
        </Container>
      )}

      {(selectedImage || capturedImage) && (
        <Container direction="column" justify="center" gap="10px" css={overlayStyle}>
          <Cropper
            ref={cropperRef}
            zoomable
            aspectRatio={1}
            initialAspectRatio={1}
            guides={true}
            src={selectedImage ?? capturedImage ?? ''}
            viewMode={1}
            background={false}
          />
          <Container css={btnPositionStyle}>
            <Button variant="secondary" onClick={handleCropDone}>
              벌레 사진 등록하기
            </Button>
          </Container>
        </Container>
      )}
    </>
  );
}

export default CameraRequestBottomSheet;

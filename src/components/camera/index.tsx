import Container from '@components/container';
import useCameraStyle from '@components/camera/useCameraStyle';
import { useEffect, useRef } from 'react';
import Button from '@components/button';

interface CameraProps {
  // onClose: () => void;
  onCapture: (blob: Blob) => void;
}

function Camera({
  // onClose,
  onCapture,
}: CameraProps) {
  const {
    wrapperStyle, cameraAreaStyle, cameraUiWrapperStyle, cameraButtonStyle,
    buttonContainerStyle,
  } = useCameraStyle();
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoStream = useRef<MediaStream>();

  useEffect(() => {
    async function enableVideoStream() {
      if (!videoRef.current) return;
      try {
        videoStream.current = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: { facingMode: 'environment' },
        });
        videoRef.current.srcObject = videoStream.current;
        videoRef.current.play();
      } catch (e) { /* handle error */ }
    }
    enableVideoStream();
    // eslint-disable-next-line consistent-return
    return () => {
      if (!videoStream.current) return;
      videoStream.current.getTracks().forEach((track) => {
        track.stop();
      });
    };
  }, []);

  const handleCapture = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d')?.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => onCapture(blob as Blob), 'image/webp', 1);
  };

  return (
    <Container css={wrapperStyle}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video css={cameraAreaStyle} ref={videoRef} muted />
      <Container css={cameraUiWrapperStyle}>
        <Container css={buttonContainerStyle}>
          <Button css={cameraButtonStyle} onClick={handleCapture} />
        </Container>
      </Container>
    </Container>
  );
}

export default Camera;

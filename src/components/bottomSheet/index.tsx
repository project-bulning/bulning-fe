import { useEffect, useState } from 'react';
import useBottomSheetStyle from '@components/bottomSheet/useBottomSheetStyle';
import { CSSObject } from '@emotion/react';

interface BottomSheetProps {
  isOpen: boolean;
  onChange?: (isOpen: boolean) => void;
  hideHandleBar?: boolean;
  children: React.ReactNode;
  css?: CSSObject;
}

export const fadeOutAnimationState = {
  FORWARDED: 'forwarded',
  FADING: 'fading',
  FADE_END: 'fade_end',
  HIDDEN: 'hidden',
};

function BottomSheet({
  isOpen, onChange, hideHandleBar = false, children, css,
}: BottomSheetProps) {
  const {
    modalStyle,
    backgroundOverlay,
    bottomHeaderStyle,
    handleBarStyle,
    contentWrapperStyle,
    contentStyle,
  } = useBottomSheetStyle();

  const [animationState, setAnimationState] = useState(fadeOutAnimationState.HIDDEN);

  useEffect(() => {
    if (isOpen) {
      setAnimationState(fadeOutAnimationState.FORWARDED);
      setTimeout(() => {
        setAnimationState(fadeOutAnimationState.FADING);
      }, 50);
    } else {
      setAnimationState(fadeOutAnimationState.FADE_END);
      setTimeout(() => {
        setAnimationState(fadeOutAnimationState.HIDDEN);
      }, 500);
    }
  }, [isOpen]);

  const handleClose = () => {
    onChange?.(false);
    setAnimationState(fadeOutAnimationState.FADE_END);
  };

  if (animationState === fadeOutAnimationState.HIDDEN) return null;

  return (
    <>
      <div
        role="presentation"
        css={[backgroundOverlay(animationState === fadeOutAnimationState.FADING), css]}
        onClick={handleClose}
      />
      <div css={modalStyle(animationState === fadeOutAnimationState.FADING)}>
        <div css={bottomHeaderStyle}>
          {!hideHandleBar && <div css={handleBarStyle} />}
        </div>
        <div css={contentWrapperStyle}>
          <div css={contentStyle}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default BottomSheet;

import { useEffect, useState } from 'react';
import bottomSheetStyle from '@components/bottomSheet/bottomSheetStyle';
import { CSSObject } from '@emotion/react';

interface BottomSheetProps {
  isOpen: boolean;
  onChange?: (isOpen: boolean) => void;
  children: React.ReactNode;
  css?: CSSObject;
}

function BottomSheet({
  isOpen, onChange, children, css,
}: BottomSheetProps) {
  const {
    ModalStyle,
    BackgroundOverlay,
    BottomHeaderStyle,
    HandleBarStyle,
    ContentWrapperStyle,
    ContentStyle,
  } = bottomSheetStyle();

  const [isRender, setIsRender] = useState(isOpen);
  const [fade, setFade] = useState('');

  useEffect(() => {
    if (isOpen) {
      setIsRender(true);
      setTimeout(() => setFade('end'), 50);
    } else {
      setFade('');
      setTimeout(() => setIsRender(false), 500);
    }
  }, [isOpen]);

  const handleClose = () => {
    onChange?.(false);
    setFade('');
  };

  if (!isRender) return null;

  return (
    <>
      <div
        css={[BackgroundOverlay(fade === 'end'), css]}
        onClick={handleClose}
      />
      <div css={ModalStyle(fade === 'end')}>
        <div css={BottomHeaderStyle}>
          <div css={HandleBarStyle} />
        </div>
        <div css={ContentWrapperStyle}>
          <div css={ContentStyle}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default BottomSheet;

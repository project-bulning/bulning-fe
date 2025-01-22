import { useState } from 'react';
import { DefaultPaddedContainer } from '@components/container/variants';
import Button from '@components/button';
import HuntEndBottomSheet from '@features/afterHunting/HuntEndBottomSheet';

function TempChatPage() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <DefaultPaddedContainer>
      <Button onClick={handleOpenBottomSheet}>사냥 종료하기</Button>
      <HuntEndBottomSheet isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet} />
    </DefaultPaddedContainer>
  );
}

export default TempChatPage;

import { css } from '@emotion/react';
import Container from '@components/container';
import Button from '@components/button';
import { Heading } from '@components/text';
import RedAlertIcon from '@assets/icons/red-alert.svg';
import useBannerStyle from '@features/main/banner/useBannerStyle';
import { useState } from 'react';
import CameraRequestBottomSheet from '@features/helpee/CameraRequestBottomSheet';

function RequestHelpBanner() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleInfoRegist = ():void => {
    setIsBottomSheetOpen(true);
  };

  const closeBottomSheet = (): void => {
    setIsBottomSheetOpen(false);
  };

  const { bannerStyle } = useBannerStyle();

  const textStyle = css`
      line-height: 32px;
      letter-spacing: -2px;
  `;

  const iconStyle = css`
      margin-top: 14px;
      margin-bottom: 24px;
  `;

  const buttonStyle = css`
      border-radius: 8px;
      font-size: 18px;
      font-weight: 500;
  `;

  return (
    <>
      <Container direction="column" css={bannerStyle}>
        <Heading.H3 weight="semi-bold" css={textStyle}>
          지금 벌레를 잡아줄 사람이
        </Heading.H3>
        <Heading.H3 weight="semi-bold" css={textStyle}>
          필요하신가요?
        </Heading.H3>
        <Container justify="center" css={iconStyle}>
          <img src={RedAlertIcon} alt="RedAlertIcon" />
        </Container>
        <Button type="button" css={buttonStyle} onClick={handleInfoRegist}>
          빠르게 정보 등록하기
        </Button>
      </Container>
      <CameraRequestBottomSheet isOpen={isBottomSheetOpen} onClose={closeBottomSheet} />
    </>
  );
}

export default RequestHelpBanner;

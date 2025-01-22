import BottomSheet from '@components/bottomSheet';
import Container from '@components/container';
import { HandleBottomSheetProps } from '@components/bottomSheet/handleBottomSheetProps';
import useSignUpStyle from '@features/signUp/useSignUpStyle';
import { Heading, Paragraph } from '@/components/text';

function LocationDetailBottomSheet({ isOpen, onClose }: HandleBottomSheetProps) {
  const { closeTextStyle, closeBottomSheetStyle, scrollContainerStyle } = useSignUpStyle();

  return (
    <BottomSheet isOpen={isOpen} onChange={onClose}>
      <Container direction="column" gap="60px">
        <Container css={closeBottomSheetStyle}>
          <Paragraph weight="semi-bold" onClick={onClose} css={closeTextStyle}>닫기</Paragraph>
        </Container>
        <Container direction="column" gap="40px" css={scrollContainerStyle}>
          <Heading.H4 weight="semi-bold">위치기반서비스 이용약관</Heading.H4>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam in magna
            scelerisque tempor a ut felis. Curabitur posuere, erat eget commodo malesuada, erat
            lacus finibus velit, eget placerat velit est eget felis. Duis auctor blandit risus,
            eget bibendum sapien auctor at. Sed vel est sit amet elit auctor interdum...

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam in magna
            scelerisque tempor a ut felis. Curabitur posuere, erat eget commodo malesuada, erat
            lacus finibus velit, eget placerat velit est eget felis. Duis auctor blandit risus,
            eget bibendum sapien auctor at. Sed vel est sit amet elit auctor interdum...

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam in magna
            scelerisque tempor a ut felis. Curabitur posuere, erat eget commodo malesuada, erat
            lacus finibus velit, eget placerat velit est eget felis. Duis auctor blandit risus,
            eget bibendum sapien auctor at. Sed vel est sit amet elit auctor interdum...

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam in magna
            scelerisque tempor a ut felis. Curabitur posuere, erat eget commodo malesuada, erat
            lacus finibus velit, eget placerat velit est eget felis. Duis auctor blandit risus,
            eget bibendum sapien auctor at. Sed vel est sit amet elit auctor interdum...

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam in magna
            scelerisque tempor a ut felis. Curabitur posuere, erat eget commodo malesuada, erat
            lacus finibus velit, eget placerat velit est eget felis. Duis auctor blandit risus,
            eget bibendum sapien auctor at. Sed vel est sit amet elit auctor interdum...

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam in magna
            scelerisque tempor a ut felis. Curabitur posuere, erat eget commodo malesuada, erat
            lacus finibus velit, eget placerat velit est eget felis. Duis auctor blandit risus,
            eget bibendum sapien auctor at. Sed vel est sit amet elit auctor interdum...

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam in magna
            scelerisque tempor a ut felis. Curabitur posuere, erat eget commodo malesuada, erat
            lacus finibus velit, eget placerat velit est eget felis. Duis auctor blandit risus,
            eget bibendum sapien auctor at. Sed vel est sit amet elit auctor interdum...

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam in magna
            scelerisque tempor a ut felis. Curabitur posuere, erat eget commodo malesuada, erat
            lacus finibus velit, eget placerat velit est eget felis. Duis auctor blandit risus,
            eget bibendum sapien auctor at. Sed vel est sit amet elit auctor interdum...

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam in magna
            scelerisque tempor a ut felis. Curabitur posuere, erat eget commodo malesuada, erat
            lacus finibus velit, eget placerat velit est eget felis. Duis auctor blandit risus,
            eget bibendum sapien auctor at. Sed vel est sit amet elit auctor interdum...

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam in magna
            scelerisque tempor a ut felis. Curabitur posuere, erat eget commodo malesuada, erat
            lacus finibus velit, eget placerat velit est eget felis. Duis auctor blandit risus,
            eget bibendum sapien auctor at. Sed vel est sit amet elit auctor interdum...
          </Paragraph>
        </Container>
      </Container>

    </BottomSheet>
  );
}

export default LocationDetailBottomSheet;

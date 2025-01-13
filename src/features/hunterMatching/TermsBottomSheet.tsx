import Button from '@components/button';
import BottomSheet from '@components/bottomSheet';
import Container from '@components/container';
import { Heading } from '@components/text';
import { useNavigate } from 'react-router-dom';
import { HandleBottomSheetProps } from '@components/bottomSheet/handleBottomSheetProps';
import { useState } from 'react';
import CheckBox from '@components/checkbox';
import ViewDetailsIcon from '@assets/icons/view-details.svg';
import useSignUpStyle from '@features/signUp/useSignUpStyle';
import ConsignmentDetailBottomSheet from '@features/hunterMatching/ConsignmentDetailBottomSheet';
import PrivacyDetailBottomSheet from '@features/hunterMatching/PrivacyDetailBottomSheet';
import ThirdPartyDetailBottomSheet from '@features/hunterMatching/ThirdPartyDetailBottomSheet';
import FaceInfoDetailBottomSheet from '@features/hunterMatching/FaceInfoDetailBottomSheet';

interface CheckType {
  consignment: boolean;
  privacy: boolean;
  third_party: boolean;
  face_info: boolean;
}

function TermsBottomSheet({ isOpen, onClose }: HandleBottomSheetProps) {
  const [allCheck, setAllCheck] = useState<boolean>(false);

  const [individualCheck, setIndividualCheck] = useState<CheckType>({
    consignment: false,
    privacy: false,
    third_party: false,
    face_info: false,
  });

  const handleAllCheck = () => {
    const newCheckState = !allCheck;
    setAllCheck(newCheckState);
    setIndividualCheck({
      consignment: newCheckState,
      privacy: newCheckState,
      third_party: newCheckState,
      face_info: newCheckState,
    });
  };

  const handleIndividualCheck = (key: keyof CheckType) => {
    const newCheck = {
      ...individualCheck,
      [key]: !individualCheck[key],
    };
    setIndividualCheck(newCheck);
    setAllCheck(Object.values(newCheck).every((value) => value));
  };

  const [detailVisibility, setDetailVisibility] = useState<CheckType>({
    consignment: false,
    privacy: false,
    third_party: false,
    face_info: false,
  });

  const openDetailBottomSheet = (key: keyof CheckType) => {
    setDetailVisibility((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  const closeDetailBottomSheet = (key: keyof CheckType) => {
    setDetailVisibility((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  const navigate = useNavigate();

  const handleNavigateMain = () => {
    if (allCheck) {
      navigate('/');
    }
  };

  const { detailStyle, allCheckStyle } = useSignUpStyle();

  return (
    <>
      <BottomSheet isOpen={isOpen} onChange={onClose}>
        <Container direction="column" gap="20px">
          <Container align="center" gap="8px" css={allCheckStyle}>
            <CheckBox
              checked={allCheck}
              onChange={handleAllCheck}
              id="allCheck"
            />
            <label htmlFor="allCheck">
              <Heading.H5 weight="semi-bold">약관 전체동의</Heading.H5>
            </label>
          </Container>

          <Container direction="column" gap="10px">
            <Container justify="space-between">
              <Container align="center" gap="8px">
                <CheckBox
                  checked={individualCheck.consignment}
                  onChange={() => handleIndividualCheck('consignment')}
                  id="checkConsignment"
                />
                <label htmlFor="checkConsignment">(필수) 업무위수수탁약관</label>
              </Container>
              <img
                src={ViewDetailsIcon}
                alt="view-details"
                css={detailStyle}
                onClick={() => openDetailBottomSheet('consignment')}
              />
            </Container>

            <Container justify="space-between">
              <Container align="center" gap="8px">
                <CheckBox
                  checked={individualCheck.privacy}
                  onChange={() => handleIndividualCheck('privacy')}
                  id="checkPrivacy"
                />
                <label htmlFor="checkPrivacy">(필수) 개인정보 수집 및 이용 동의</label>
              </Container>
              <img
                src={ViewDetailsIcon}
                alt="view-details"
                css={detailStyle}
                onClick={() => openDetailBottomSheet('privacy')}
              />
            </Container>

            <Container justify="space-between">
              <Container align="center" gap="8px">
                <CheckBox
                  checked={individualCheck.third_party}
                  onChange={() => handleIndividualCheck('third_party')}
                  id="checkThirdParty"
                />
                <label htmlFor="checkThirdParty">(필수) 개인정보 제3자 제공 동의</label>
              </Container>
              <img
                src={ViewDetailsIcon}
                alt="view-details"
                css={detailStyle}
                onClick={() => openDetailBottomSheet('third_party')}
              />
            </Container>

            <Container justify="space-between">
              <Container align="center" gap="8px">
                <CheckBox
                  checked={individualCheck.face_info}
                  onChange={() => handleIndividualCheck('face_info')}
                  id="checkFaceInfo"
                />
                <label htmlFor="checkFaceInfo">(필수) 얼굴 정보 수집, 이용 동의</label>
              </Container>
              <img
                src={ViewDetailsIcon}
                alt="view-details"
                css={detailStyle}
                onClick={() => openDetailBottomSheet('face_info')}
              />
            </Container>
          </Container>

          <Button onClick={handleNavigateMain} disabled={!allCheck}>
            본인 사진 등록하기
          </Button>
        </Container>
      </BottomSheet>

      <ConsignmentDetailBottomSheet
        isOpen={detailVisibility.consignment}
        onClose={() => closeDetailBottomSheet('consignment')}
      />
      <PrivacyDetailBottomSheet
        isOpen={detailVisibility.privacy}
        onClose={() => closeDetailBottomSheet('privacy')}
      />
      <ThirdPartyDetailBottomSheet
        isOpen={detailVisibility.third_party}
        onClose={() => closeDetailBottomSheet('third_party')}
      />
      <FaceInfoDetailBottomSheet
        isOpen={detailVisibility.face_info}
        onClose={() => closeDetailBottomSheet('face_info')}
      />
    </>
  );
}

export default TermsBottomSheet;

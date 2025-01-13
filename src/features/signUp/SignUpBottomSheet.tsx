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
import TermsDetailBottomSheet from '@features/signUp/TermsDetailBottomSheet';
import LocationDetailBottomSheet from '@features/signUp/LocationDetailBottomSheet';
import PrivacyDetailBottomSheet from '@features/signUp/PrivacyDetailBottomSheet';

interface CheckType {
  age: boolean;
  terms: boolean;
  location: boolean;
  privacy: boolean;
}

function SignUpBottomSheet({ isOpen, onClose }: HandleBottomSheetProps) {
  const [allCheck, setAllCheck] = useState<boolean>(false);

  const [individualCheck, setIndividualCheck] = useState<CheckType>({
    age: false,
    terms: false,
    location: false,
    privacy: false,
  });

  const handleAllCheck = () => {
    const newCheckState = !allCheck;
    setAllCheck(newCheckState);
    setIndividualCheck({
      age: newCheckState,
      terms: newCheckState,
      location: newCheckState,
      privacy: newCheckState,
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
    age: false,
    terms: false,
    location: false,
    privacy: false,
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
            <Container align="center" gap="8px">
              <CheckBox
                checked={individualCheck.age}
                onChange={() => handleIndividualCheck('age')}
                id="checkAge"
              />
              <label htmlFor="checkAge">(필수) 만 19세 이상입니다.</label>
            </Container>

            <Container justify="space-between">
              <Container align="center" gap="8px">
                <CheckBox
                  checked={individualCheck.terms}
                  onChange={() => handleIndividualCheck('terms')}
                  id="checkTerms"
                />
                <label htmlFor="checkTerms">(필수) 서비스 이용약관 및 동의사항</label>
              </Container>
              <img
                src={ViewDetailsIcon}
                alt="view-details"
                css={detailStyle}
                onClick={() => openDetailBottomSheet('terms')}
              />
            </Container>

            <Container justify="space-between">
              <Container align="center" gap="8px">
                <CheckBox
                  checked={individualCheck.location}
                  onChange={() => handleIndividualCheck('location')}
                  id="checkLocation"
                />
                <label htmlFor="checkLocation">(필수) 위치기반서비스 이용약관</label>
              </Container>
              <img
                src={ViewDetailsIcon}
                alt="view-details"
                css={detailStyle}
                onClick={() => openDetailBottomSheet('location')}
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
          </Container>

          <Button onClick={handleNavigateMain} disabled={!allCheck}>
            시작하기
          </Button>
        </Container>
      </BottomSheet>

      <TermsDetailBottomSheet
        isOpen={detailVisibility.terms}
        onClose={() => closeDetailBottomSheet('terms')}
      />
      <LocationDetailBottomSheet
        isOpen={detailVisibility.location}
        onClose={() => closeDetailBottomSheet('location')}
      />
      <PrivacyDetailBottomSheet
        isOpen={detailVisibility.privacy}
        onClose={() => closeDetailBottomSheet('privacy')}
      />
    </>
  );
}

export default SignUpBottomSheet;

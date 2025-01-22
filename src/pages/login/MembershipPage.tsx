import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading } from '@components/text';
import Input from '@components/input';
import Button from '@components/button';
import { FormErrorMessage } from '@components/text/variants';
import {
  Control, FormState, useForm, UseFormRegister, UseFormSetValue,
} from 'react-hook-form';
import Select from '@components/select';
import { useEffect, useState } from 'react';
import useFormPageStyle from '@pages/helpee/useFormPageStyle';
import SignUpBottomSheet from '@features/signUp/SignUpBottomSheet';
import { MembershipResponse } from '@/types/user';
import { submitPersonalInfo } from '@/api/user';

export interface MembershipProps {
  register: UseFormRegister<MembershipResponse>;
  formState: FormState<MembershipResponse>;
  control: Control<MembershipResponse>;
  setValue?: UseFormSetValue<MembershipResponse>;
}

declare global {
  interface Window {
    hangjungdong: any;
  }
}

function MembershipPage() {
  const { inputTextStyle, inputSelectStyle } = useFormPageStyle();
  const [nicknameValue, setNicknameValue] = useState<string>('');
  const [sidoList, setSidoList] = useState<any[]>([]);
  const [sigugunList, setSigugunList] = useState<any[]>([]);
  const [dongList, setDongList] = useState<any[]>([]);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const closeBottomSheet = (): void => {
    setIsBottomSheetOpen(false);
  };
  const [selectedLocation, setSelectedLocation] = useState({
    sido: '',
    sigugun: '',
    dong: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MembershipResponse>({
    defaultValues: {
      name: '',
      nickname: '',
      location: '',
    },
    mode: 'onChange',
  });

  const validations = {
    name: { required: { value: true, message: '이름을 입력하세요.' } },
    nickname: { required: { value: true, message: '별명을 입력하세요.' } },
    location: {
      validate: () => {
        if (!selectedLocation.sido || !selectedLocation.sigugun || !selectedLocation.dong) {
          return '활동 지역을 정확히 선택해주세요.';
        }
        return true;
      },
    },
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://zelkun.tistory.com/attachment/cfile8.uf@99BB7A3D5D45C065343307.js';
    script.async = true;
    script.onload = () => {
      if (window.hangjungdong) {
        setSidoList(window.hangjungdong.sido);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (selectedLocation.sido && window.hangjungdong) {
      const sigugunData = window.hangjungdong.sigugun.filter(
        (code: any) => code.sido === selectedLocation.sido,
      );
      setSigugunList(sigugunData);

      if (selectedLocation.sido === '36') {
        setSigugunList([{ sigugun: '세종특별자치시', codeNm: '세종특별자치시' }]);
      }
    }
  }, [selectedLocation.sido]);

  useEffect(() => {
    if (selectedLocation.sido && selectedLocation.sigugun && window.hangjungdong) {
      const dongData = window.hangjungdong.dong.filter(
        (code: any) => code.sido === selectedLocation.sido
            && code.sigugun === selectedLocation.sigugun,
      );
      setDongList(dongData);
    }
  }, [selectedLocation.sido, selectedLocation.sigugun]);

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>, type: 'sido' | 'sigugun' | 'dong') => {
    setSelectedLocation((prev) => ({
      ...prev,
      [type]: e.target.value,
      ...(type === 'sido' && { sigugun: '', dong: '' }),
      ...(type === 'sigugun' && { dong: '' }),
    }));
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length <= 6) {
      setNicknameValue(value);
    }
  };

  const onSubmit = async (data: MembershipResponse) => {
    const { sido, sigugun, dong } = selectedLocation;

    const sidoName = sidoList.find((item) => item.sido === sido)?.codeNm || '';
    const sigugunName = sigugunList.find((item) => item.sigugun === sigugun)?.codeNm || '';
    const dongName = dongList.find((item) => item.dong === dong)?.codeNm || '';

    const location = `${sidoName} ${sigugunName} ${dongName}`;

    const formData = {
      ...data,
      location: location.trim(),
    };

    try {
      await submitPersonalInfo(formData);
      setIsBottomSheetOpen(true);
      console.log('폼 데이터:', formData);
    } catch (error) {
      console.error('회원정보 제출 중 오류 발생:', error);
    }
    console.log('폼 데이터:', formData);
  };

  return (
    <>
      <DefaultPaddedContainer>
        <form onSubmit={handleSubmit(onSubmit)} css={{ width: '100%' }}>
          <Container height="100dvh" direction="column" justify="space-between" padding="10px 0">
            <Container direction="column" gap="24px">
              <Container justify="center" padding="18px 33px 0">
                <Heading.H3_5>회원가입</Heading.H3_5>
              </Container>
              <Container css={inputTextStyle}>
                <Input
                  type="text"
                  label="이름"
                  placeholder="이름"
                  {...register('name', validations.name)}
                />
                <FormErrorMessage errors={errors} name="name" />
              </Container>
              <Container css={inputTextStyle}>
                <Input
                  type="text"
                  label="닉네임"
                  placeholder="6자 이하의 닉네임을 입력해주세요."
                  {...register('nickname', validations.nickname)}
                  value={nicknameValue}
                  onChange={handleNicknameChange}
                />
                <FormErrorMessage errors={errors} name="nickname" />
              </Container>
              <Container css={inputSelectStyle}>
                <Select
                  label="활동 지역"
                  value={selectedLocation.sido}
                  {...register('location', validations.location)}
                  onChange={(e) => handleLocationChange(e, 'sido')}
                >
                  <option value="">시/도 선택</option>
                  {sidoList.map((code) => (
                    <option key={code.sido} value={code.sido}>
                      {code.codeNm}
                    </option>
                  ))}
                </Select>
                <Container width="100%" justify="space-between" align="center" gap="12px">
                  <Select
                    value={selectedLocation.sigugun}
                    onChange={(e) => handleLocationChange(e, 'sigugun')}
                  >
                    <option value="">구/군/시</option>
                    {sigugunList.map((code) => (
                      <option key={code.sigugun} value={code.sigugun}>
                        {code.codeNm}
                      </option>
                    ))}
                  </Select>
                  <Select
                    value={selectedLocation.dong}
                    onChange={(e) => handleLocationChange(e, 'dong')}
                  >
                    <option value="">동/읍/면</option>
                    {dongList.map((code) => (
                      <option key={code.dong} value={code.dong}>
                        {code.codeNm}
                      </option>
                    ))}
                  </Select>
                </Container>
                <FormErrorMessage errors={errors} name="location" />
              </Container>
            </Container>
            <Button type="submit">다음</Button>
          </Container>
        </form>
      </DefaultPaddedContainer>
      <SignUpBottomSheet isOpen={isBottomSheetOpen} onClose={closeBottomSheet} />
    </>
  );
}

export default MembershipPage;

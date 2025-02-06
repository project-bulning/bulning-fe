import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import close from '@assets/icons/close.svg';
import Input from '@components/input';
import Button from '@components/button';
import useFormPageStyle from '@pages/helpee/useFormPageStyle';
import { FormErrorMessage } from '@components/text/variants';
import {
  Control, FormState, useForm, UseFormRegister, UseFormSetValue,
} from 'react-hook-form';
import ButtonSelector from '@pages/helpee/ButtonSelector';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FaceEnrollBottomSheet from '@features/hunterMatching/FaceEnrollBottomSheet';
import { HunterInfo } from '@/types/user/hunter';
import { getHunterLocation } from '@/api/hunterMatching';

export interface HunterInfoInputSectionProps {
  register: UseFormRegister<HunterInfo>;
  formState: FormState<HunterInfo>;
  control: Control<HunterInfo>;
  setValue?: UseFormSetValue<HunterInfo>;
}

function HunterInfoInputPage() {
  const {
    inputTextStyle,
  } = useFormPageStyle();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<HunterInfo>({
    defaultValues: {
      gender: '',
      age: '',
      address: '',
      addressDetail: '',
      memo: '',
    },
    mode: 'onChange',
  });

  const navigate = useNavigate();
  const location = useLocation();
  const reportId = location.state?.id;
  const [memoValue, setMemoValue] = useState('');
  const [formData, setFormData] = useState<HunterInfo | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };
  const [hunterLocation, setHunterLocation] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { longitude, latitude } = position.coords;
            try {
              const hunterInfo = await getHunterLocation(longitude, latitude);
              if (hunterInfo.documents.length > 0) {
                const fetchedAddress = `${hunterInfo.documents[0].region_1depth_name} ${hunterInfo.documents[0].region_2depth_name} ${hunterInfo.documents[0].region_3depth_name}`;
                setValue('address', fetchedAddress);
                setHunterLocation(`${hunterInfo.documents[0].region_1depth_name} ${hunterInfo.documents[0].region_2depth_name} ${hunterInfo.documents[0].region_3depth_name}`);
              }
            } catch (error) {
              console.error('주소를 가져오는 중 오류 발생:', error);
            }
          },
          (error) => {
            console.error('Error getting location:', error);
          },
          { enableHighAccuracy: true },
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    fetchLocation();
  }, [setValue]);

  const validations = {
    gender: { required: { value: true, message: '성별을 알려주세요.' } },
    age: { required: { value: true, message: '연령대를 알려주세요.' } },
    address: { required: { value: true, message: '주소를 입력하세요.' } },
    addressDetail: {
      required: { value: true, message: '상세 주소를 입력하세요.' },
      maxLength: { value: 22, message: '최대 22자까지 입력 가능합니다.' },
    },
    memo: { required: { value: true, message: '메모를 작성해주세요.' } },
  };

  const handleMemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value.length <= 100) {
      setMemoValue(value);
    }
  };

  const onSubmit = (data: HunterInfo) => {
    console.log('폼 데이터:', data);
    handleNextBtn(data);
  };

  const handleNextBtn = async (data?: HunterInfo) => {
    const hunterData = data || formData;
    setFormData(hunterData);
    setIsBottomSheetOpen(true);
    if (!reportId) {
      console.error('reportId가 없습니다.');
      return;
    }
    if (!hunterData) {
      console.error('formData가 없습니다.');
    }
  };

  return (
    <>
      <DefaultPaddedContainer>
        <form onSubmit={handleSubmit(onSubmit)} css={{ width: '100%' }}>
          <Container direction="column" padding="10px 0 10px 0" height="100dvh" justify="space-between">
            <Container direction="column">
              <Container justify="space-between" align="center">
                <div
                  onClick={() => navigate(-1)}
                  css={{ cursor: 'pointer' }}
                  role="presentation"
                >
                  <img src={close} alt="close" css={{ width: '32px', height: '32px' }} />
                </div>
                <Heading.H3_5>사냥 정보 입력</Heading.H3_5>
                <div css={{ width: '32px' }} />
              </Container>
              <Container direction="column" padding="50px 0 0 0" gap="35px">
                {[
                  {
                    label: '성별', name: 'gender', options: ['남성', '여성'], validation: validations.gender,
                  },
                  {
                    label: '연령대', name: 'age', options: ['20대', '30대', '40대', '50대'], validation: validations.age,
                  },
                ].map(({
                  label, name, options,
                }) => (
                  <Container
                    direction="column"
                    gap="4px"
                    key={name}
                    css={{ width: 'fit-content' }}
                  >
                    <ButtonSelector
                      etcBtn={false}
                      label={label}
                      options={options}
                      setValue={setValue}
                      {...register(name as keyof HunterInfo, validations[name as keyof HunterInfo])}
                    />
                    <FormErrorMessage errors={errors} name={name} />
                  </Container>
                ))}
                <Container css={inputTextStyle}>
                  <Input
                    type="text"
                    label="주소"
                    value={hunterLocation || ''}
                    readOnly
                  />
                  <Input type="text" placeholder="대략적인 위치(ex. 부산대역에서 5분, 대동병원 근처)" {...register('addressDetail', validations.addressDetail)} css={{ marginTop: '3px' }} />
                  <FormErrorMessage errors={errors} name="addressDetail" />
                </Container>
                <Container direction="column" gap="10px">
                  <Paragraph weight="semi-bold">
                    메모
                  </Paragraph>
                  <textarea
                    placeholder="자기소개와 도움을 줄 수 있는 방법 등을 작성해주세요."
                    {...register('memo', validations.memo)}
                    value={memoValue}
                    onChange={handleMemoChange}
                    css={{
                      height: '100px',
                      verticalAlign: 'top',
                      backgroundColor: '#F2F3F6',
                      fontSize: '15px',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '10px 13px',
                    }}
                  />
                  <Container justify="space-between">
                    <FormErrorMessage errors={errors} name="memo" />
                    <Paragraph variant="small">
                      {memoValue.length}
                      {' '}
                      / 100자
                    </Paragraph>
                  </Container>
                </Container>
              </Container>
            </Container>
            <Button
              type="submit"
            >
              다음
            </Button>
          </Container>
        </form>
      </DefaultPaddedContainer>
      {formData && (
      <FaceEnrollBottomSheet
        reportId={reportId}
        isOpen={isBottomSheetOpen}
        onClose={closeBottomSheet}
        formData={formData}
      />
      )}

    </>
  );
}

export default HunterInfoInputPage;

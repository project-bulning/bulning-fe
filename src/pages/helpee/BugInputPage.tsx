import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import close from '@assets/icons/close.svg';
import addImage from '@assets/icons/add-image.svg';
import Input from '@components/input';
import Button from '@components/button';
import useFormPageStyle from '@pages/helpee/useFormPageStyle';
import { FormErrorMessage } from '@components/text/variants';
import {
  Control, FormState, useForm, UseFormRegister, UseFormSetValue,
} from 'react-hook-form';
import ButtonSelector from '@pages/helpee/ButtonSelector';
import { useEffect, useState } from 'react';
import AnnouncementBottomSheet from '@features/helpee/AnnouncementBottomSheet';
import routePaths from '@constants/routePaths.ts';
import { Link, useLocation } from 'react-router-dom';
import { BugInfo } from '@/types/bug';
import { getHunterLocation } from '@/api/hunterMatching';

export interface BugInputSectionProps {
  register: UseFormRegister<BugInfo>;
  formState: FormState<BugInfo>;
  control: Control<BugInfo>;
  setValue?: UseFormSetValue<BugInfo>;
}

function BugInputPage() {
  const {
    inputTextStyle,
    ulStyle,
  } = useFormPageStyle();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BugInfo>({
    defaultValues: {
      title: '',
      location: '',
      location_detail: '',
      bug_type: '',
      bug_size: '',
      equipment: '',
      note: '',
      price: 0,
    },
    mode: 'onChange',
  });

  const location = useLocation();
  const bugImage = location.state?.croppedImage;

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [hunterLocation, setHunterLocation] = useState<string | null>(null);
  const [formattedPrice, setFormattedPrice] = useState<string>('');

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
                setValue('location', fetchedAddress);
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

  useEffect(() => {
    if (bugImage instanceof File) {
      const objectUrl = URL.createObjectURL(bugImage);
      setPreviewUrl(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
    return undefined;
  }, [bugImage]);

  const [situationValue, setSituationValue] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [formData, setFormData] = useState<BugInfo | null>(null);

  const closeBottomSheet = (): void => {
    setIsBottomSheetOpen(false);
  };

  const validations = {
    title: {
      required: { value: true, message: '제목을 입력하세요.' },
      maxLength: { value: 22, message: '최대 22자까지 입력 가능합니다.' },
    },
    location: {
      required: { value: true, message: '주소를 입력하세요.' },
      maxLength: { value: 22, message: '최대 22자까지 입력 가능합니다.' },
    },
    location_detail: { required: { value: true, message: '상세 주소를 입력하세요.' } },
    bug_type: {
      required: { value: true, message: '벌레 종류를 알려주세요.' },
      maxLength: { value: 22, message: '최대 22자까지 입력 가능합니다.' },
    },
    bug_size: {
      required: { value: true, message: '벌레 크기를 알려주세요.' },
      maxLength: { value: 22, message: '최대 22자까지 입력 가능합니다.' },
    },
    equipment: {
      required: { value: true, message: '보유 물품을 알려주세요.' },
      maxLength: { value: 22, message: '최대 22자까지 입력 가능합니다.' },
    },
    note: { required: { value: true, message: '상황을 설명해주세요.' } },
    price: {
      required: { value: true, message: '가격을 정해주세요.' },
      validate: {
        isNumber: (value: string | number) => !Number.isNaN(Number(value)) || '숫자만 입력할 수 있습니다.',
        minPrice: (value: string | number) => Number(value) >= 3000 || '최소 가격 설정은 3,000원입니다.',
        maxPrice: (value: string | number) => Number(value) <= 100000 || '최대 가격은 100,000원입니다.',
      },
    },

  };

  const handleSituationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value.length <= 200) {
      setSituationValue(value);
    }
  };

  const onSubmit = (data: BugInfo) => {
    const updatedData = {
      ...data,
      price: Number(data.price.toString().replace(/,/g, '')),
    };
    console.log('폼 데이터:', updatedData);
  };

  const handleNextBtn = ():void => {
    handleSubmit((data) => {
      setFormData(data);
      setIsBottomSheetOpen(true);
    })();
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, '');
    const numericValue = parseFloat(value);

    if (Number.isNaN(numericValue)) {
      return;
    }

    setValue('price', numericValue);
    register('price', validations.price);
    const formatted = numericValue.toLocaleString();
    setFormattedPrice(formatted);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DefaultPaddedContainer>
          <Container direction="column" padding="10px 0">
            <Container justify="space-between" align="center">
              <Link to={routePaths.MAIN}>
                <img src={close} alt="close" css={{ width: '32px', height: '32px' }} />
              </Link>
              <Heading.H3_5>사냥 정보 입력</Heading.H3_5>
              <div css={{ width: '32px' }} />
            </Container>
            <Container direction="column" padding="40px 0" gap="35px">
              <Container direction="column" gap="18px">
                <Container>
                  {previewUrl
                    ? (
                      <img
                        src={previewUrl}
                        alt="logo"
                        css={{
                          width: '70px', height: '70px', borderRadius: '8px',
                        }}
                      />
                    )
                    : (
                      <Container
                        width="70px"
                        height="70px"
                        justify="center"
                        align="center"
                        css={{
                          borderRadius: '8px',
                          backgroundColor: '#E0E0E0',
                        }}
                      >
                        <img src={addImage} alt="logo" />
                      </Container>
                    )}
                </Container>
              </Container>

              <Container css={inputTextStyle}>
                <Input
                  type="text"
                  label="제목"
                  placeholder="제목"
                  {...register('title', validations.title)}
                />
                <FormErrorMessage errors={errors} name="title" />
              </Container>
              <Container css={inputTextStyle}>
                <Input
                  type="text"
                  label="주소"
                  value={hunterLocation || ''}
                  readOnly
                />
                <Input
                  type="text"
                  placeholder="대략적인 위치(ex. 부산대역에서 5분, 대동병원 근처)"
                  {...register('location_detail', validations.location_detail)}
                  css={{ marginTop: '3px' }}
                />
                <FormErrorMessage errors={errors} name="location_detail" />
              </Container>
              {[
                {
                  label: '벌레 종류', name: 'bug_type', options: ['바퀴벌레', '돈벌레', '지네'], validation: validations.bug_type,
                },
                {
                  label: '벌레 크기', name: 'bug_size', options: ['10원', '100원', '500원'], validation: validations.bug_size,
                },
                {
                  label: '보유 물품', name: 'equipment', options: ['전기파리채', '살충제', '없음'], validation: validations.equipment,
                },
              ].map(({
                label, name, options,
              }) => (
                <Container
                  direction="column"
                  gap="8px"
                  key={name}
                >
                  <ButtonSelector
                    label={label}
                    options={options}
                    setValue={setValue}
                    {...register(name as keyof BugInfo, validations[name as keyof BugInfo])}
                  />
                  <FormErrorMessage errors={errors} name={name} />
                </Container>
              ))}

              <Container css={inputTextStyle}>
                <Paragraph weight="semi-bold" css={{ marginTop: '20px', marginBottom: '10px' }}>
                  상황 설명
                </Paragraph>
                <textarea
                  placeholder="상황을 설명해주세요"
                  {...register('note', validations.note)}
                  value={situationValue}
                  onChange={handleSituationChange}
                  css={{
                    height: '160px',
                    verticalAlign: 'top',
                    backgroundColor: '#F2F3F6',
                    fontSize: '15px',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px 13px',
                  }}
                />
                <Container justify="space-between">
                  <FormErrorMessage errors={errors} name="note" />
                  <Paragraph variant="small">
                    {situationValue.length}
                    {' '}
                    / 200자
                  </Paragraph>
                </Container>
              </Container>

              <Container css={inputTextStyle}>
                <Container gap="10px" align="center" padding="10px 0">
                  <Paragraph weight="medium">가격</Paragraph>
                  <p css={{ fontSize: '10px', color: '#9B9B9B' }}>최소 설정 가격은 3,000원 입니다</p>
                </Container>
                <Input
                  type="text"
                  placeholder="가격을 입력하세요"
                  value={formattedPrice}
                  onChange={handlePriceChange}
                />
                <FormErrorMessage errors={errors} name="price" />
              </Container>
            </Container>

            <Container direction="column">
              <div css={{ ...ulStyle, lineHeight: '22px', fontWeight: '500' }}>금액 안내</div>
              <ul css={{ ...ulStyle, marginLeft: '10px' }}>
                <li>헌터는 설정된 가격을 먼저 확인하고 도움을 제공하게 됩니다.</li>
                <li>헌터가 벌레를 잡지 못했을 때는 돈을 지불하지 않아도 됩니다.</li>
                <li>아래는 도움 별 평균 가격입니다.</li>
              </ul>
              <ul css={{ ...ulStyle, fontSize: '11px', marginLeft: '25px' }}>
                <li>바퀴벌레, 지네 등 : 7,000원 ~ 15,000원</li>
                <li>돈벌레, 곱등이 등 : 5,000원 ~ 7,000원</li>
                <li>모기, 개미 등 : 3,000원 ~ 5,000원</li>
              </ul>
            </Container>
            <Button
              type="submit"
              css={{ borderRadius: '8px', marginTop: '27px', marginBottom: '32px' }}
              onClick={handleNextBtn}
            >
              다음
            </Button>
          </Container>
        </DefaultPaddedContainer>
      </form>
      {formData && (
        <AnnouncementBottomSheet
          isOpen={isBottomSheetOpen}
          onClose={closeBottomSheet}
          formData={formData}
          bugImage={bugImage}
        />
      )}
    </>
  );
}

export default BugInputPage;

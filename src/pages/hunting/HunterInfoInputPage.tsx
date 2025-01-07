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
import { useState } from 'react';
import { HunterInfo } from '@/types/user/hunter';

export interface HunterInfoInputSectionProps {
  register: UseFormRegister<HunterInfo>;
  formState: FormState<HunterInfo>;
  control: Control<HunterInfo>;
  setValue?: UseFormSetValue<HunterInfo>;
}

function HunterInfoInputPage() {
  const {
    inputTextStyle,
    inputBtnStyle,
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

  const [memoValue, setMemoValue] = useState('');

  const validations = {
    gender: { required: { value: true, message: '성별을 알려주세요.' } },
    age: { required: { value: true, message: '연령대를 알려주세요.' } },
    address: { required: { value: true, message: '주소를 입력하세요.' } },
    addressDetail: { required: { value: true, message: '상세 주소를 입력하세요.' } },
    memo: { required: { value: true, message: '자기소개와 도움을 줄 수 있는 방법 등을 작성해주세요.' } },
  };

  const handleMemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value.length <= 200) {
      setMemoValue(value);
    }
  };

  const onSubmit = (data: HunterInfo) => {
    // Todo: api 연결
    const updatedData = { ...data, memo: memoValue };
    console.log('폼 데이터:', updatedData);
  };

  return (
    <DefaultPaddedContainer height="32px" css={{ lineHeight: '32px' }}>
      <form onSubmit={handleSubmit(onSubmit)} css={{ width: '100%' }}>
        <Container direction="column">
          <Container>
            <img src={close} alt="close" css={{ width: '32px', height: '32px' }} />
            <Heading.H3 css={{ marginLeft: '62px' }}>헌터 정보 입력</Heading.H3>
          </Container>
          <Container direction="column" padding="24px 0">
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
                css={inputBtnStyle}
                key={name}
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
              <Input type="text" label="주소" placeholder="부산광역시 금정구 장전1동" {...register('address', validations.address)} />
              <FormErrorMessage errors={errors} name="address" />
              <Input type="text" placeholder="대략적인 위치(ex. 부산대역에서 5분, 대동병원 근처)" {...register('addressDetail', validations.addressDetail)} css={{ marginTop: '3px' }} />
              <FormErrorMessage errors={errors} name="addressDetail" />
            </Container>
            <Container css={inputTextStyle}>
              <Paragraph css={{ marginTop: '20px' }}>
                메모
              </Paragraph>
              <textarea
                placeholder="자기소개와 도움을 줄 수 있는 방법 등을 작성해주세요."
                {...register('memo', validations.memo)}
                value={memoValue}
                onChange={handleMemoChange}
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
                <FormErrorMessage errors={errors} name="memo" />
                <Paragraph variant="small">
                  {memoValue.length}
                  {' '}
                  / 200자
                </Paragraph>
              </Container>
            </Container>
            <Button
              variant="primary"
              type="submit"
              css={{ borderRadius: '8px', marginTop: '27px', marginBottom: '32px' }}
            >
              다음
            </Button>
          </Container>
        </Container>
      </form>
    </DefaultPaddedContainer>
  );
}

export default HunterInfoInputPage;

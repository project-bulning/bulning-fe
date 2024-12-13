import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import close from '@assets/icons/close.svg';
import logo from '@assets/bulning-logo.svg';
import Input from '@components/input';
import Button from '@components/button';
import useBugInputPageStyle from '@pages/helpee/useBugInputPageStyle';
import { FormErrorMessage } from '@components/text/variants';
import {
  Control, FormState, useForm, UseFormRegister, UseFormSetValue,
} from 'react-hook-form';
import ButtonSelector from '@pages/helpee/ButtonSelector';
import { useState } from 'react';
import { BugInfo } from '@/types/bug';

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
    inputBtnStyle,
  } = useBugInputPageStyle();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BugInfo>({
    defaultValues: {
      title: '',
      address: '',
      addressDetail: '',
      type: '',
      size: '',
      equipment: '',
      situation: '',
      price: '',
    },
    mode: 'onChange',
  });

  const [situationValue, setSituationValue] = useState('');

  const validations = {
    title: { required: { value: true, message: '제목을 입력하세요.' } },
    address: { required: { value: true, message: '주소를 입력하세요.' } },
    addressDetail: { required: { value: true, message: '상세 주소를 입력하세요.' } },
    type: { required: { value: true, message: '벌레 종류를 알려주세요.' } },
    size: { required: { value: true, message: '벌레 크기를 알려주세요.' } },
    equipment: { required: { value: true, message: '보유 물품을 알려주세요.' } },
    situation: { required: { value: true, message: '상황을 설명해주세요.' } },
    price: {
      required: { value: true, message: '가격을 정해주세요.' },
      validate: {
        minPrice: (value: string) => parseInt(value, 10) > 3000 || '가격은 3,000원보다 커야 합니다.',
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
    // Todo: api 연결
    const updatedData = { ...data, situation: situationValue };
    console.log('폼 데이터:', updatedData);
  };

  return (
    <DefaultPaddedContainer height="32px" css={{ lineHeight: '32px' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container direction="column">
          <Container>
            <img src={close} alt="close" css={{ width: '32px', height: '32px' }} />
            <Heading.H3 css={{ marginLeft: '62px' }}>사냥 정보 입력</Heading.H3>
          </Container>
          <Container direction="column" padding="24px 0">
            <img src={logo} alt="logo" css={{ width: '70px', height: '70px', borderRadius: '8px' }} />
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
              <Input type="text" label="주소" placeholder="부산광역시 금정구 장전1동" {...register('address', validations.address)} />
              <FormErrorMessage errors={errors} name="address" />
              <Input type="text" placeholder="대략적인 위치(ex. 부산대역에서 5분, 대동병원 근처)" {...register('addressDetail', validations.addressDetail)} css={{ marginTop: '3px' }} />
              <FormErrorMessage errors={errors} name="addressDetail" />
            </Container>
            {[
              {
                label: '벌레 종류', name: 'type', options: ['바퀴벌레', '돈벌레', '지네'], validation: validations.type,
              },
              {
                label: '벌레 크기', name: 'size', options: ['10원', '100원', '500원'], validation: validations.size,
              },
              {
                label: '보유 물품', name: 'equipment', options: ['전기파리채', '살충제', '없음'], validation: validations.equipment,
              },
            ].map(({
              label, name, options,
            }) => (
              <Container
                css={inputBtnStyle}
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
              <Paragraph css={{ marginTop: '20px' }}>
                상황 설명
              </Paragraph>
              <textarea
                placeholder="상황을 설명해주세요"
                {...register('situation', validations.situation)}
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
                <FormErrorMessage errors={errors} name="situation" />
                <Paragraph variant="small">
                  {situationValue.length}
                  {' '}
                  / 200자
                </Paragraph>
              </Container>
            </Container>

            <Container css={inputTextStyle}>
              <Input type="text" label="가격" placeholder="가격" {...register('price', validations.price)} />
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
            variant="primary"
            type="submit"
            css={{ borderRadius: '8px', marginTop: '27px', marginBottom: '32px' }}
          >
            다음
          </Button>
        </Container>
      </form>
    </DefaultPaddedContainer>
  );
}

export default BugInputPage;

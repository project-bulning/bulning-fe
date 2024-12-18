import { useForm } from 'react-hook-form';
import Container from '@components/container';
import Input from '@components/input';
import {Paragraph} from '@components/text';
import {css} from '@emotion/react';

function PersonalInfoForm() {
  const {
    register,
  } = useForm<PersonalInfoInput>();
  const labelStyle = css`
    margin-bottom: 10px;
  `
  return (
    <form>
      <Container direction="column" gap="18px">
      <label>
        <Paragraph variant="medium" weight="medium" css={labelStyle}>이름</Paragraph>
        <Input type="text" placeholder="이름을 입력해주세요" {...register('name')} />
      </label>

      <label>
        <Paragraph variant="medium" weight="medium" css={labelStyle}>닉네임</Paragraph>
        <Input type="text" placeholder="닉네임을 입력해주세요" {...register('nickname')} />
      </label>

      <label>
        <Paragraph variant="medium" weight="medium" css={labelStyle}>활동 지역</Paragraph>
        <Input type="text" placeholder="활동 지역을 입력해주세요" />
      </label>
      </Container>
    </form>
  );
}

export default PersonalInfoForm;

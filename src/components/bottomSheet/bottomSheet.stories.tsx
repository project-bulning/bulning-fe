import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import BottomSheet from '@components/bottomSheet';
import Button from '@components/button';
import { Heading, Paragraph } from '@components/text';
import Container from '@components/container';

const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  argTypes: {
    isOpen: { control: 'boolean' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const DefaultBottomSheet: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      handleIsOpenChange(true);
    };

    const handleIsOpenChange = (newState: boolean) => {
      setIsOpen(newState);
    };

    const backgroundStyle = css`
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border: 1px solid #ccc;
    `;

    const contentStyle = css`
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 24px;
    `;

    const BtnStyle = css`
      width: 100%;
      height: 50px;
      font-size: 16px;
      margin-top: 25px;
      border-radius: 8px;
    `;

    const RejectBtnStyle = css`
      color: #9B9B9B;
      font-size: 11px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: -0.32px;
      text-decoration-line: underline;
      text-decoration-style: solid;
      text-underline-position: from-font;
    `;

    return (
      <div css={backgroundStyle}>
        <div css={contentStyle}>
          문서 내용입니다
          <Button onClick={openModal}>모달 열기</Button>
        </div>
        <BottomSheet isOpen={isOpen} onChange={handleIsOpenChange}>
          <Container
            direction="column"
            justify="flex-start"
            align="flex-start"
            gap="15px"
          >
            <Heading.H4 weight="bold">지금 벌레 사진을 찍을 수 있나요?</Heading.H4>
            <Container
              direction="column"
              justify="flex-start"
              align="flex-start"
              gap="6px"
            >
              <Paragraph>실시간으로 카메라를 연동해서</Paragraph>
              <Paragraph>사진을 촬영할 예정이에요.</Paragraph>
              <Container justify="space-between" gap="14px">
                <Button css={BtnStyle}>갤러리 열기</Button>
                <Button css={BtnStyle} variant="primary">촬영하기</Button>
              </Container>
              <Container cssOverride={RejectBtnStyle}>
                사진 없이 진행하기
              </Container>
            </Container>
          </Container>
        </BottomSheet>
      </div>
    );
  },
};

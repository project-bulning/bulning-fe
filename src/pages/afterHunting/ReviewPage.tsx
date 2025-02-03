import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import StarRating from '@components/starRating';
import Button from '@components/button';
import { css, useTheme } from '@emotion/react';
import { useState } from 'react';
import EndQuickChatBottomSheet from '@pages/afterHunting/EndQuickChatBottomSheet';

function ReviewPage() {
  const theme = useTheme();
  const [selectedStars, setSelectedStars] = useState(0);
  const [selectedAdvantages, setSelectedAdvantages] = useState<string[]>([]);
  const [reviewText, setReviewText] = useState('');
  const [error, setError] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);

  const advantages = [
    '친절해요',
    '프로페셔널해요',
    '시간을 잘 지켜요',
    '신속 정확해요',
    '매너가 좋아요',
    '응답이 빨라요',
    '처리가 깔끔해요',
  ];

  const handleStarChange = (newValue: number) => {
    setSelectedStars(newValue);
  };

  const handleAdvantageClick = (advantage: string) => {
    if (selectedAdvantages.includes(advantage)) {
      setSelectedAdvantages(selectedAdvantages.filter((item) => item !== advantage));
    } else if (selectedAdvantages.length < 2) {
      setSelectedAdvantages([...selectedAdvantages, advantage]);
    } else {
      setError('장점은 최대 2개까지 선택할 수 있습니다.');
    }
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length > 200) {
      setError('후기는 200자 이내로 작성해주세요.');
    } else {
      setError('');
      setReviewText(text);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reviewData = {
      stars: selectedStars,
      advantages: selectedAdvantages,
      reviewText,
    };
    console.log('리뷰 제출 데이터:', reviewData);
  };

  const isSubmitDisabled = selectedStars === 0 || reviewText.trim().length === 0;

  const btnStyle = css`
    gap: 9px;
    flex-wrap: wrap;
    Button {
        width: auto;
        &:hover {
            width: auto;
        }

    }
  `;
  const getButtonStyle = (advantage: string) => (selectedAdvantages.includes(advantage)
    ? css`
          background-color: ${theme.colors.primary.main};
          color: white;
        `
    : css`
          background-color: ${theme.colors.background};
        `);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <>
      <DefaultPaddedContainer>
        <form onSubmit={handleSubmit} css={{ width: '100%' }}>
          <Container direction="column" padding="96px 0 10px 0" justify="space-between" height="100dvh">
            <Container direction="column" gap="40px">
              <Container direction="column" gap="5px">
                <Heading.H3_5>오늘 사냥에 대한</Heading.H3_5>
                <Heading.H3_5>후기를 입력해주세요</Heading.H3_5>
              </Container>
              <Container direction="column" gap="8px">
                <Paragraph>별점</Paragraph>
                <StarRating
                  defaultValue={selectedStars}
                  onChange={handleStarChange}
                />
              </Container>
              <Container direction="column" gap="12px">
                <Paragraph>장점</Paragraph>
                <Container css={btnStyle}>
                  {advantages.map((advantage) => (
                    <Button
                      key={advantage}
                      variant="select"
                      onClick={() => handleAdvantageClick(advantage)}
                      css={getButtonStyle(advantage)}
                    >
                      {advantage}
                    </Button>
                  ))}
                </Container>
              </Container>
              <Container direction="column" gap="8px">
                <Container gap="4px" align="center">
                  <Paragraph>후기</Paragraph>
                  <Paragraph css={{ fontSize: '10px', color: theme.colors.text.subtle }}>상대방에게 공개되지 않는 글입니다</Paragraph>
                </Container>
                <textarea
                  placeholder="다음 사용자를 위해 솔직한 경험을 적어주세요"
                  css={{
                    height: '200px',
                    backgroundColor: '#F2F3F6',
                    padding: '10px 13px',
                    fontSize: '16px',
                    borderRadius: '6px',
                    border: 'none',
                  }}
                  value={reviewText}
                  onChange={handleReviewChange}
                />
              </Container>
              {error && (
              <Paragraph css={{ color: 'red', fontSize: '12px' }}>{error}</Paragraph>
              )}
            </Container>
            <Button disabled={isSubmitDisabled} type="submit" onClick={handleOpenBottomSheet}>종료하기</Button>
          </Container>
        </form>
      </DefaultPaddedContainer>
      <EndQuickChatBottomSheet isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet} />
    </>
  );
}

export default ReviewPage;

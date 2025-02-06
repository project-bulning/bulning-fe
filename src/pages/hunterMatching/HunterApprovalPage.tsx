import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import Button from '@components/button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Avatar from '@assets/icons/default-avatar.svg';
import { css, useTheme } from '@emotion/react';
import MoveToQuickChatBottomSheet from '@features/hunterMatching/MoveToQuickChatBottomSheet';
import ConfirmCancelMatchingBottomSheet from '@features/hunterMatching/ConfirmCancelMatchingBottomSheet';
import { useEffect, useState } from 'react';
import Spinner from '@components/fallback/Spinner';
import StarRating from '@components/starRating';
import { useParams } from 'react-router-dom';
import { HunterInfo } from '@/types/hunterMatching';
import { fetchHunterInfo, updateMatchStatus } from '@/api/hunterMatching';

function HunterApprovalPage() {
  const { userId } = useParams<{ userId: string }>();

  const theme = useTheme();
  const [hunterData, setHunterData] = useState<HunterInfo | null>(null);

  useEffect(() => {
    async function loadHunterInfo() {
      if (!userId) return;
      try {
        const data = await fetchHunterInfo(parseInt(userId, 10));
        setHunterData(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadHunterInfo();
  }, [userId]);

  const [isQuickChatOpen, setIsQuickChatOpen] = useState<boolean>(false);
  const [isCancelledOpen, setIsCancelledOpen] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const handleOpenQuickChat = async () => {
    if (hunterData == null) {
      return;
    }

    setLoading(true);
    try {
      await updateMatchStatus(hunterData.match_id, true);
      console.log('매칭 수락');
    } catch (error) {
      console.error('매칭 상태 업데이트 실패:', error);
    } finally {
      setLoading(false);
    }

    setIsQuickChatOpen(true);
  };

  const handleOpenCancelled = () => {
    setIsCancelledOpen(true);
  };

  const handleCloseQuickChat = () => {
    setIsQuickChatOpen(false);
  };

  const handleCloseCancelled = () => {
    setIsCancelledOpen(false);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const sliderStyle = css`
      .slick-dots {
          li{
              width: 10px;
          }
      }
  `;

  const subBoxStyle = css`
    background-color: ${theme.colors.background.darken};
    color: ${theme.colors.text.subtle};
    font-size: 12px;
    min-height: 62px;
    border-radius: 7px;
    margin-top: 16px;
    line-height: 16px;
  `;
  const reviewBoxStyle = css`
    background-color: ${theme.colors.background.darken};
    font-size: 12px;
    border-radius: 7px;
    margin-top: 18px;
  `;
  const commentBoxStyle = css`
    div {
      background-color: rgba(130, 152, 183, 0.20);
      padding: 3px 6px;
      border-radius: 4px;
    }
    color: #012962;
  `;

  const sectionHeadingStyle = css`
    font-size: 14px;
    font-weight: 500; 
    color: ${theme.colors.text.subtle};
    flex: 1;
  `;
  const sectionContentStyle = css`
    font-size: 14px;
    font-weight: 400; 
    flex: 3;
  `;

  return (
    <div>
      {
          (hunterData == null)
            ? (
              <Container width="100dvw" height="100dvh" justify="center" align="center">
                <Spinner />
              </Container>
            )
            : (
              <>
                <DefaultPaddedContainer>
                  <Container direction="column" justify="space-between" height="100dvh" padding="96px 0 10px 0">
                    <Container direction="column" gap="65px">
                      <Container direction="column" gap="8px">
                        <Heading.H3_5>헌터의 정보를 확인하고</Heading.H3_5>
                        <Heading.H3_5>도움 수락 여부를 선택해주세요</Heading.H3_5>
                      </Container>
                      <Slider {...settings} css={sliderStyle}>
                        <Container direction="column" padding="0 0 52px 0">
                          <Container gap="30px">
                            <Container direction="column" justify="center" align="center" gap="15px" css={{ flex: 1 }}>
                              <img
                                src={hunterData.img_url ? hunterData.img_url : Avatar}
                                alt="profile-img"
                                css={{ width: '77px', height: '77px', borderRadius: '100%' }}
                              />
                              <div css={{ fontSize: '12px' }}>
                                {hunterData.gender}
                                {' '}
                                |
                                {' '}
                                {hunterData.age_group}
                              </div>
                            </Container>
                            <Container direction="column" gap="16px" css={{ flex: 3 }}>
                              <Heading.H5 weight="medium">{hunterData?.name}</Heading.H5>
                              <Container gap="25px">
                                <Container direction="column" gap="4px">
                                  <Container gap="5px">
                                    <div css={sectionHeadingStyle}>거주지</div>
                                    <Container direction="column" gap="5px" css={sectionContentStyle}>
                                      <div>{hunterData.location}</div>
                                      <div>{hunterData.location_detail}</div>
                                    </Container>
                                  </Container>
                                  <Container gap="5px">
                                    <div css={sectionHeadingStyle}>평균 별정</div>
                                    <div css={sectionContentStyle}>
                                      {hunterData.avg_score === 0 ? '-' : `${hunterData.avg_score}`}
                                    </div>
                                  </Container>
                                  <Container gap="5px">
                                    <div css={sectionHeadingStyle}>거래 횟수</div>
                                    <div css={sectionContentStyle}>
                                      {hunterData.trade_count}
                                      회
                                    </div>
                                  </Container>
                                </Container>
                              </Container>
                            </Container>
                          </Container>
                          <Container padding="10px" css={subBoxStyle}>
                            {hunterData.pr_memo}
                          </Container>
                        </Container>
                        <Container direction="column">
                          <Paragraph>후기</Paragraph>
                          {hunterData.user_reviews?.length === 0 ? (
                            <Container justify="center" align="center" padding="80px 0" css={{ fontSize: '14px' }}>
                              아직 작성된 후기가 없어요
                            </Container>
                          ) : (
                            hunterData.user_reviews.slice(-2).map((review) => (
                              <Container
                                key={review.created_at}
                                direction="column"
                                padding="12px 20px 9px 12px"
                                gap="10px"
                                css={reviewBoxStyle}
                              >
                                <Container align="flex-end" gap="8px" css={{ color: '#848484' }}>
                                  <StarRating defaultValue={review.score} readOnly={true} size="small" />
                                  <div>{new Date(review.created_at).toLocaleDateString()}</div>
                                </Container>
                                {review.review_note}
                                <Container gap="3px" css={commentBoxStyle}>
                                  {review.merit.map((merit) => (
                                    <div key={`${review.created_at}-${merit}`}>{merit}</div>
                                  ))}
                                </Container>
                              </Container>
                            ))
                          )}
                        </Container>
                      </Slider>
                    </Container>
                    <Container direction="column" gap="6px">
                      <Button onClick={handleOpenQuickChat}>{loading ? '처리 중...' : '수락하기'}</Button>
                      <Button variant="secondary" onClick={handleOpenCancelled}>취소하기</Button>
                    </Container>
                  </Container>
                </DefaultPaddedContainer>
                <MoveToQuickChatBottomSheet
                  isOpen={isQuickChatOpen}
                  onClose={handleCloseQuickChat}
                />
                <ConfirmCancelMatchingBottomSheet
                  matchId={hunterData.match_id}
                  isOpen={isCancelledOpen}
                  onClose={handleCloseCancelled}
                />
              </>
            )
        }
    </div>
  );
}
export default HunterApprovalPage;

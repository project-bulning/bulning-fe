import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import Button from '@components/button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import logo from '@assets/bulning-logo.svg';
import { css, useTheme } from '@emotion/react';

function HunterApprovalPage() {
  const theme = useTheme();
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
  `;
  const sectionContentStyle = css`
    font-size: 14px;
    font-weight: 400; 
  `;

  return (
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
                <img
                  src={logo}
                  alt="profile-img"
                  css={{ width: '77px', height: '77px', borderRadius: '100%' }}
                />
                <Container direction="column" gap="16px">
                  <Heading.H5 weight="medium">닉네임</Heading.H5>
                  <Container gap="25px">
                    <Container direction="column" gap="7px" width="100px" css={sectionHeadingStyle}>
                      <div>거주지</div>
                      <div>회원 정보</div>
                      <div>평균 별정</div>
                      <div>거래 횟수</div>
                    </Container>
                    <Container direction="column" gap="7px" css={sectionContentStyle}>
                      <div>부산광역시 금정구 장전2동</div>
                      <div>여자 | 20대</div>
                      <div>4.2</div>
                      <div>10회</div>
                    </Container>
                  </Container>
                </Container>
              </Container>
              <Container padding="10px" css={subBoxStyle}>
                안녕하세요. 장전역 근처에 사는 대학생입니다. 저희 집에 있는 그 거품 나는 스프레이로 깔끔하게 바퀴벌레 처리 가능합니다.
                호출 받으면 10분 안에 도착할 수 있어요.
              </Container>
            </Container>
            <Container direction="column">
              <Paragraph>후기</Paragraph>
              <Container direction="column" padding="12px 20px 9px 12px" gap="5px" css={reviewBoxStyle}>
                <Container gap="5px" css={{ fontSize: '10px', color: '#848484' }}>
                  별
                  <div>24.09.01</div>
                  <div>금정구 구서1동</div>
                </Container>
                신속한 처리와 빠른 거래, 감사합니다.
                <Container gap="3px" css={commentBoxStyle}>
                  <div>친절해요.</div>
                  <div>연락이 빨랐어요.</div>
                  <div>약속 시간을 잘 지켰어요.</div>
                </Container>
              </Container>
              <Container direction="column" padding="12px 20px 9px 12px" gap="5px" css={reviewBoxStyle}>
                <Container gap="5px" css={{ fontSize: '10px', color: '#848484' }}>
                  별
                  <div>24.09.01</div>
                  <div>금정구 구서1동</div>
                </Container>
                조금 늦게 도착하셨지만 괜찮았어요.!
                <Container gap="3px" css={commentBoxStyle}>
                  <div>친절해요.</div>
                  <div>연락이 빨랐어요.</div>
                </Container>
              </Container>
            </Container>
          </Slider>
        </Container>
        <Container direction="column" gap="6px">
          <Button>수락하기</Button>
          <Button variant="secondary">취소하기</Button>
        </Container>
      </Container>
    </DefaultPaddedContainer>
  );
}
export default HunterApprovalPage;

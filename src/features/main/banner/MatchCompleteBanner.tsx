import { css } from '@emotion/react';
import Container from '@components/container';
import Button from '@components/button';
import { Heading, Paragraph } from '@components/text';
import { useNavigate } from 'react-router-dom';
import useBannerStyle from '@features/main/banner/useBannerStyle';

function MatchCompleteBanner() {
  const navigate = useNavigate();

  const handleOpenQuickChat = ():void => {
    navigate('/');
  };

  const { bannerStyle } = useBannerStyle();

  const HeadingStyle = css`
      line-height: 32px;
      letter-spacing: -2px;
  `;

  const paragraphStyle = css`
      font-size: 16px;
      line-height: 32px;
      letter-spacing: -1px;
      margin-bottom: 120px;
  `;

  const buttonStyle = css`
      height: 50px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;
  `;

  // TODO: '사냥청구인'인지 '피사냥청구인'인지에 따라 멘트가 달라져야할 것 같음.
  return (
    <Container direction="column" css={bannerStyle}>
      <Heading.H3 weight="semi-bold" css={HeadingStyle}>
        매칭이 완료되었어요
      </Heading.H3>
      <Paragraph css={paragraphStyle}>
        채팅을 시작하고 사냥을 시작해보세요
      </Paragraph>
      <Button type="button" variant="primary" css={buttonStyle} onClick={handleOpenQuickChat}>
        퀵챗 열기
      </Button>
    </Container>
  );
}

export default MatchCompleteBanner;

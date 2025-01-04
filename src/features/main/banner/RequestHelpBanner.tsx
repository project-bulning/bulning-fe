import { css, useTheme } from '@emotion/react';
import Container from '@components/container';
import Button from '@components/button';
import { Heading } from '@components/text';
import RedAlertIcon from '@assets/icons/red-alert.svg';
import { useNavigate } from 'react-router-dom';

function RequestHelpBanner() {
  const navigate = useNavigate();

  const handleInfoRegist = ():void => {
    navigate('/');
  };

  const theme = useTheme();

  const bannerStyle = css`
      padding: 22px 26px 16px 26px;
      background-color: ${theme.colors.background.light_blue};
      border-radius: 8px;
  `;

  const textStyle = css`
      line-height: 32px;
      letter-spacing: -2px;
  `;

  const iconStyle = css`
      margin-top: 14px;
      margin-bottom: 24px;
  `;

  const buttonStyle = css`
      border-radius: 8px;
      font-size: 18px;
      font-weight: 500;
  `;

  return (
    <Container direction="column" css={bannerStyle}>
      <Heading.H3 weight="semi-bold" css={textStyle}>
        지금 벌레를 잡아줄 사람이
      </Heading.H3>
      <Heading.H3 weight="semi-bold" css={textStyle}>
        필요하신가요?
      </Heading.H3>
      <Container justify="center" css={iconStyle}>
        <img src={RedAlertIcon} alt="RedAlertIcon" />
      </Container>
      <Button type="button" variant="primary" css={buttonStyle} onClick={handleInfoRegist}>
        빠르게 정보 등록하기
      </Button>
    </Container>
  );
}

export default RequestHelpBanner;

import BottomSheet from '@components/bottomSheet';
import Container from '@components/container';
import { HandleBottomSheetProps } from '@components/bottomSheet/handleBottomSheetProps';
import useSignUpStyle from '@features/signUp/useSignUpStyle';
import { Heading, Paragraph } from '@components/text';
import Spacing from '@components/spacing';

function PrivacyDetailBottomSheet({ isOpen, onClose }: HandleBottomSheetProps) {
  const { closeTextStyle, closeBottomSheetStyle, scrollContainerStyle } = useSignUpStyle();

  return (
    <BottomSheet isOpen={isOpen} onChange={onClose}>
      {/* eslint-disable max-len */}
      <Container direction="column" gap="60px">
        <Container css={closeBottomSheetStyle}>
          <Paragraph weight="semi-bold" onClick={onClose} css={closeTextStyle}>닫기</Paragraph>
        </Container>
        <Container direction="column" gap="40px" css={scrollContainerStyle}>
          <Heading.H3 weight="semi-bold">개인정보 수집 및 이용 동의</Heading.H3>
          <Container direction="column" gap="2px" css={{ lineHeight: '15px' }}>
            <Paragraph variant="xsmall" weight="semi-bold">제1조 (개인정보의 수집 및 이용 목적)</Paragraph>
            <Paragraph variant="xsmall">
              회사는 회원가입, 서비스 제공, 회원관리 등을 위해 아래와 같은 개인정보를 수집하고 이용합니다:
              <ol css={{ paddingLeft: '15px', listStyleType: 'decimal' }}>
                <li>회원가입 및 관리: 이름, 닉네임, 활동 지역</li>
                <li>서비스 제공: 매칭 시스템 제공</li>
                <li>고객 지원: 문의 및 불만 처리</li>
              </ol>
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제2조 (수집하는 개인정보의 항목)</Paragraph>
            <Paragraph variant="xsmall">
              회사는 다음과 같은 개인정보를 수집합니다:
              <ol css={{ paddingLeft: '15px', listStyleType: 'decimal' }}>
                <li>필수 항목: 이름, 닉네임, 활동 지역, 현재 위치</li>
                <li>자동 수집 항목: 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보</li>
              </ol>
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제3조 (개인정보의 보유 및 이용기간)</Paragraph>
            <Paragraph variant="xsmall">
              회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 다만, 관계 법령에 따라 일정 기간 보관할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보유합니다.
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제4조 (개인정보의 파기절차 및 방법)</Paragraph>
            <Paragraph variant="xsmall">
              <ol css={{ paddingLeft: '15px', listStyleType: 'decimal' }}>
                <li>파기절차: 수집된 개인정보는 목적이 달성된 후 별도의 DB에 옮겨져 일정 기간 저장된 후 파기됩니다.</li>
                <li>
                  파기방법: 전자적 파일 형태로 저장된 개인정보는 복구할 수 없는 방법으로 삭제하며, 종이로 출력된 개인정보는 분쇄기를 이용해 파기합니다.
                </li>
              </ol>
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제5조 (개인정보의 제3자 제공)</Paragraph>
            <Paragraph variant="xsmall">
              회사는 회원의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 다음의 경우 예외로 합니다:
              <ol css={{ paddingLeft: '15px', listStyleType: 'decimal' }}>
                <li>회원이 사전에 동의한 경우</li>
                <li>법령에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              </ol>
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제6조 (개인정보 처리의 위탁)</Paragraph>
            <Paragraph variant="xsmall">
              회사는 서비스 운영에 있어 필요한 경우 회원의 개인정보 처리를 외부 업체에 위탁할 수 있습니다. 이 경우, 회사는 위탁업체가 개인정보를 안전하게 처리하도록 관리·감독합니다.
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제7조 (회원의 권리와 의무)</Paragraph>
            <Paragraph variant="xsmall">
              <ol css={{ paddingLeft: '15px', listStyleType: 'decimal' }}>
                <li>회원은 언제든지 자신의 개인정보를 조회하거나 수정할 수 있으며, 서비스 탈퇴를 통해 개인정보의 삭제를 요청할 수 있습니다.</li>
                <li>회원은 자신의 개인정보가 부정확한 경우, 이를 정정할 권리가 있으며, 회사는 이를 신속히 처리합니다.</li>
                <li>회원은 개인정보를 보호받을 권리가 있으며, 개인정보와 관련한 문의나 불만이 있을 경우 회사의 고객지원팀에 연락할 수 있습니다.</li>
              </ol>
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제8조 (개인정보 보호를 위한 기술적·관리적 대책)</Paragraph>
            <Paragraph variant="xsmall">
              회사는 회원의 개인정보를 보호하기 위해 다음과 같은 대책을 강구하고 있습니다:
              <ol css={{ paddingLeft: '15px', listStyleType: 'decimal' }}>
                <li>기술적 대책: 개인정보는 비밀번호로 보호되며, 중요한 데이터는 별도의 보안기능을 통해 보호됩니다.</li>
                <li>관리적 대책: 개인정보 처리 직원의 최소화 및 정기 교육, 개인정보 처리 시스템에 대한 접근 권한 관리</li>
              </ol>
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제9조 (개인정보 보호책임자 및 담당자 연락처)</Paragraph>
            <Paragraph variant="xsmall">
              회사는 개인정보 보호법에 따라 개인정보 보호책임자를 지정하고 있습니다. 회원의 개인정보와 관련한 문의는 아래 연락처로 문의할 수 있습니다:
              <ul>
                <li>개인정보 보호책임자: 최현빈</li>
                <li>연락처: a912243@gmail.com</li>
              </ul>
            </Paragraph>
            <Spacing height="10px" />

            <Paragraph variant="xsmall" weight="semi-bold">제10조 (개인정보 처리방침의 변경)</Paragraph>
            <Paragraph variant="xsmall">
              회사는 법령, 정책 또는 보안기술의 변경에 따라 본 개인정보 처리방침을 변경할 수 있으며, 변경된 사항은 서비스 내 공지사항을 통해 공지합니다.
            </Paragraph>
            <Paragraph variant="xsmall">부칙</Paragraph>
            <Spacing height="20px" />
            <Paragraph variant="xsmall" weight="semi-bold">
              공고일자: 2025년 01월 01일
            </Paragraph>
            <Paragraph variant="xsmall" weight="semi-bold">
              시행일자: 2025년 01월 01일
            </Paragraph>
          </Container>

        </Container>
      </Container>

    </BottomSheet>
  );
}

export default PrivacyDetailBottomSheet;

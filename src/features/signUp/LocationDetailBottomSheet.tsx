import BottomSheet from '@components/bottomSheet';
import Container from '@components/container';
import { HandleBottomSheetProps } from '@components/bottomSheet/handleBottomSheetProps';
import useSignUpStyle from '@features/signUp/useSignUpStyle';
import Spacing from '@components/spacing';
import { Heading, Paragraph } from '@/components/text';

function LocationDetailBottomSheet({ isOpen, onClose }: HandleBottomSheetProps) {
  const { closeTextStyle, closeBottomSheetStyle, scrollContainerStyle } = useSignUpStyle();

  return (
    <BottomSheet isOpen={isOpen} onChange={onClose}>
      {/* eslint-disable max-len */}
      <Container direction="column" gap="60px">
        <Container css={closeBottomSheetStyle}>
          <Paragraph weight="semi-bold" onClick={onClose} css={closeTextStyle}>닫기</Paragraph>
        </Container>
        <Container direction="column" gap="40px" css={scrollContainerStyle}>
          <Heading.H3 weight="semi-bold">위치기반서비스 이용약관</Heading.H3>
          <Container direction="column" gap="2px" css={{ lineHeight: '15px' }}>
            <Paragraph variant="xsmall" weight="semi-bold">제1조 (목적)</Paragraph>
            <Paragraph variant="xsmall">
              본 약관은 회원(본 약관에 동의한 자를 말합니다. 이하 “회원”이라고 합니다)이 벌닝(이하 “회사”라고 합니다)가 제공하는 위치기반서비스(이하 “서비스”라고 합니다)를 이용함에 있어 회사와 회원의 권리의무 및 책임사항을 규정함을 목적으로 합니다.
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제2조 (약관의 효력 및 변경)</Paragraph>
            <Paragraph variant="xsmall">
              본 약관은 서비스를 신청한 고객 또는 개인위치정보주체가 본 약관에 동의하고 회사가 정한 소정의 절차에 따라 서비스의 이용자로 등록함으로써 효력이 발생합니다.
              회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시하거나 기타의 방법으로 공지합니다.
              회사는 필요하다고 인정되면 본 약관을 변경할 수 있으며, 회사가 약관을 개정할 경우에는 기존약관과 개정약관 및 개정약관의 적용일자와 개정사유를 명시하여 현행약관과 함께 그 적용일자 7일 전부터 적용일 이후 상당한 기간 동안 공지합니다. 다만, 개정 내용이 회원에게 불리한 경우에는 그 적용일자 30일 전부터 적용일 이후 상당한 기간 동안 각각 이를 서비스 홈페이지에 게시하여 고지합니다.
              회사가 전항에 따라 회원에게 공지하거나 통지하면서 공지 또는 통지ㆍ고지일로부터 개정약관 시행일 7일 후까지 거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도 불구하고 거부의 의사표시가 없는 경우에는 변경된 약관에 승인한 것으로 봅니다. 회원이 개정약관에 동의하지 않을 경우 회원은 이용계약을 해지할 수 있습니다.
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제3조 (약관 외 준칙)</Paragraph>
            <Paragraph variant="xsmall">
              본 약관에 규정되지 않은 사항에 대해서는 위치정보의 보호 및 이용 등에 관한 법률(이하 “위치정보법”이라고 합니다), 전기통신사업법, 정보통신망 이용촉진 및 보호 등에 관한 법률(이하 “정보통신망법”이라고 합니다), 개인정보보호법 등 관련법령 또는 회사가 정한 서비스의 운영정책 및 규칙 등(이하 “세부지침”이라고 합니다)의 규정에 따릅니다.
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제4조 (서비스의 중지·해지)</Paragraph>
            <Paragraph variant="xsmall">
              회사는 회사의 제반사정 또는 법률상의 이유로 위치기반서비스를 유지할 수 없는 경우, 위치기반서비스의 전부 또는 일부를 제한, 변경, 중지할 수 있습니다[1]. 단, 이 경우 회사는 홈페이지 기타 공지사항 페이지를 통해 공지하거나   회원에게 통지합니다.
              회원이 서비스 이용을 해지하고자 할 경우 회원은 회사가 정한 절차(서비스 홈페이지 등을 통해 공지합니다)를 통해 서비스 해지를 신청할 수 있으며, 회사는 법령이 정하는 바에 따라 신속히 처리합니다.
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제5조 (서비스의 내용)</Paragraph>
            <Paragraph variant="xsmall">
              서비스의 이용은 연중무휴 1일 24시간을 원칙으로 합니다. 단, 회사의 업무 또는 기술상의 이유로 서비스가 일시 중지될 수 있으며, 운영상의 목적으로 회사가 정한 기간에도 서비스는 일시 중지될 수 있습니다. 이때 회사는 사전 또는 사후에 이를 공지합니다.
              회사가 제공하는 서비스의 종류, 세부 내용, 이용 요금은 아래와 같습니다.
              <ol css={{ paddingLeft: '15px', listStyleType: 'upper-alpha' }}>
                <li>종류 : 동네 서비스 앱</li>
                <li>서비스명 : 벌닝</li>
                <li>설명 : 다른 이용자 사이의 서비스 요청 및 수행 관련 정보의 전달 서비스, 다른 이용자와 해당 지역과 관련된 게시물을 작성할 수 있는 서비스, 현재 위치를 이용한 생활정보 및 광고성 정보 제공 서비스</li>
                <li>위치정보 이용 목적: 서비스 요청 및 수행 시 위치 확인, 게시물 작성 및 정보 제공시 위치 확인</li>
                <li>이용 요금 : 무료</li>
              </ol>
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제6조 (서비스의 이용제한 및 중지)</Paragraph>
            <Paragraph variant="xsmall">
              회사는 아래 각 호의 경우에는 회원의 서비스 이용을 제한하거나 중지시킬 수 있습니다.
              <ol css={{ paddingLeft: '15px', listStyleType: 'upper-alpha' }}>
                <li>회원이 회사 서비스의 운영을 고의 또는 중과실로 방해하는 경우</li>
                <li>서비스용 설비 점검, 보수 또는 공사로 인하여 부득이한 경우</li>
                <li>전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우</li>
                <li>국가비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 서비스 이용에 지장이 있는 때</li>
                <li>기타 중대한 사유로 인하여 회사가 서비스 제공을 지속하는 것이 부적당하다고 인정하는 경우</li>
              </ol>
              회사는 전항의 규정에 의하여 서비스의 이용을 제한하거나 중지한 때에는 그 사유 및 제한기간 등을 회원에게 알려야 합니다.
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제7조 (서비스내용변경 통지 등)</Paragraph>
            <Paragraph variant="xsmall">
              회사가 서비스 내용을 변경하거나 종료하는 경우 회사는 회원의 등록된 휴대폰 번호 문자 방식으로 서비스 내용의 변경 사항 또는 종료를 통지할 수 있습니다.
              전항의 경우 불특정 다수인을 상대로 통지를 함에 있어서는 서비스 홈페이지 등 기타 회사의 공지사항 페이지를 통하여 회원들에게 통지할 수 있습니다. 단, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항은 상당한 기간 동안 서비스 홈페이지에 게시하거나 회원에게 전자적 형태(전자우편, SMS 등)로 개별통지 합니다.
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제8조 (개인위치정보의 이용 또는 제공)</Paragraph>
            <Paragraph variant="xsmall">
              회사는 개인위치정보를 이용하여 서비스를 제공하고자 하는 경우에는 미리 약관에 명시한 후 개인위치정보주체의 동의를 얻어야 합니다.
              회원 및 법정대리인의 권리와 그 행사방법은 제소 당시의 이용자의 주소에 의하며, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의 주소 또는
              거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.
              회사는 타사업자 또는 이용 고객과의 요금정산 및 민원처리를 위해 위치정보 이용·제공, 사실 확인자료를 자동 기록·보존하며, 해당 자료는 6개월간 보관합니다.
              회사는 개인위치정보주체의 동의 없이 개인위치정보를 제3자에게 제공하지 아니하며, 제3자 제공 서비스를 제공하는 경우에는 제공 받는자 및 제공목적을 사전에 개인위치정보주체에게 고지하고 동의를
              받습니다. 다만, 다음의 경우는 예외로 하고 있습니다.
              <ol css={{ paddingLeft: '15px', listStyleType: 'upper-alpha' }}>
                <li>법령의 규정에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                <li>
                  회사는 개인위치정보를 회원이 지정하는 제3자에게 제공하는 경우에는 개인위치정보를 수집한 당해 통신 단말장치로 매회 회원에게 제공받는 자, 제공 일시 및 제공목적을 즉시 통보합니다. 단,
                  아래 각 호의 1에 해당하는 경우에는 회원이 미리 특정하여 지정한 통신 단말장치 또는 전자우편주소로 통보합니다.
                </li>
                <li>개인위치정보를 수집한 당해 통신단말장치가 문자, 음성 또는 영상의 수신기능을 갖추지 아니한 경우</li>
                <li>회원이 온라인 게시 등의 방법으로 통보할 것을 미리 요청한 경우</li>
              </ol>
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제9조 (개인위치정보주체의 권리)</Paragraph>
            <Paragraph variant="xsmall">
              회원은 회사에 대하여 언제든지 개인위치정보를 이용한 위치기반서비스 제공 및 개인위치정보의 제3자 제공에 대한 동의의 전부 또는 일부를 철회할 수 있습니다. 이 경우 회사는 수집한 개인위치정보
              및 위치정보 이용, 제공사실 확인자료를 파기합니다.
              회원은 회사에 대하여 언제든지 개인위치정보의 수집, 이용 또는 제공의 일시적인 중지를 요구할 수 있으며, 회사는 이를 거절할 수 없고 이를 위한 기술적 수단을 갖추고 있습니다.
              회원은 회사에 대하여 아래 각 호의 자료에 대한 열람 또는 고지를 요구할 수 있고, 당해 자료에 오류가 있는 경우에는 그 정정을 요구할 수 있습니다. 이 경우 회사는 정당한 사유 없이 회원의
              요구를 거절할 수 없습니다.
              <ol css={{ paddingLeft: '15px', listStyleType: 'upper-alpha' }}>
                <li>본인에 대한 위치정보 수집, 이용, 제공사실 확인자료</li>
                <li>본인의 개인위치정보가 위치정보의 보호 및 이용 등에 관한 법률 또는 다른 법률 규정에 의하여 제3자에게 제공된 이유 및 내용</li>
              </ol>
              회원은 제1항 내지 제3항의 권리행사를 위해 회사의 소정의 절차를 통해 요구할 수 있습니다.
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제10조 (양도금지)</Paragraph>
            <Paragraph variant="xsmall">
              회원의 서비스 받을 권리는 이를 양도 내지 증여하거나 담보제공 등의 목적으로 처분할 수 없습니다.
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제11조 (손해배상)</Paragraph>
            <Paragraph variant="xsmall">
              회사가 위치정보법 제15조 내지 제26조의 규정을 위반한 행위로 회원에게 손해가 발생한 경우 회원은 회사에 대하여 손해배상 청구를 할 수 있습니다. 이 경우 회사는 고의, 과실이 없음을 입증하지 못하는 경우 책임을 면할 수 없습니다.
            </Paragraph>
            <Spacing height="10px" />
            <Paragraph variant="xsmall" weight="semi-bold">제12조 (면책)</Paragraph>
            <Paragraph variant="xsmall">
              회사는 다음 각 호의 경우로 서비스를 제공할 수 없는 경우 이로 인하여 회원에게 발생한 손해에 대해서는 책임을 부담하지 않습니다.
              <ol css={{ paddingLeft: '15px', listStyleType: 'upper-alpha' }}>
                <li>천재지변 또는 이에 준하는 불가항력의 상태가 있는 경우</li>
                <li>서비스 제공을 위하여 회사와 서비스 제휴계약을 체결한 제3자의 고의적인 서비스 방해가 있는 경우</li>
                <li>회원의 귀책사유로 서비스 이용에 장애가 있는 경우</li>
                <li>제1호 내지 제3호를 제외한 기타 회사의 고의ㆍ과실이 없는 사유로 인한 경우</li>
              </ol>
              회사는 서비스 및 서비스에 게재된 정보, 자료, 사실의 신뢰도, 정확성 등에 대해서는 보증을 하지 않으며 이로 인해 발생한 회원의 손해에 대하여는 책임을 부담하지 아니합니다.
            </Paragraph>
            <Spacing height="20px" />
            <Paragraph variant="xsmall" weight="semi-bold">공고일자: 2025년 01월 01일</Paragraph>
            <Paragraph variant="xsmall" weight="semi-bold">시행일자: 2025년 01월 01일</Paragraph>
          </Container>
        </Container>
      </Container>

    </BottomSheet>
  );
}

export default LocationDetailBottomSheet;

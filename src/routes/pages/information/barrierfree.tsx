import styled from 'styled-components';
import { Box, SectionTitle } from '../../../components/stage/Watching';
import { BlackButton } from '../../../components/common/BaseButton';
import { Description } from '../../../components/stage/Ticketing';

const BarrierFree = () => {
  return (
    <Wrapper>
      <SectionTitle>배리어프리 서비스 신청</SectionTitle>
      <Box>
        <div>
          배리어프리 서비스
          <br />
          신청하러 가기
        </div>
        <BlackButton onClick={() => window.open('https://forms.gle/7houdXBqaAQqcR477', '_blank')}>바로가기</BlackButton>
      </Box>
      <SectionTitle>배리어프리 지도</SectionTitle>
      <TestMapImage src="/images/information/barrierfree/범례.webp" alt="배리어프리 범례" />
      <Text>정문 일대</Text>
      <TestMapImage src="/images/information/barrierfree/정문일대.webp" alt="배리어프리 지도 정문일대" />
      <Text>해방광장 일대</Text>
      <TestMapImage src="/images/information/barrierfree/해방광장.webp" alt="배리어프리 지도 행방광장" />
      <Text>후문 일대</Text>
      <TestMapImage src="/images/information/barrierfree/후문일대.webp" alt="배리어프리 지도 후문일대" />
      <Description>
        <strong>[2025 LUCAUS 배리어프리존 안내]</strong>
        <br />
        <br />
        2025 LUCAUS 본무대 배리어프리존을 운영합니다. 사전 신청 또는 현장 접수를 통해 이용 가능합니다.
        <br />
        자세한 사항은 중앙대학교 서울캠퍼스 학생인권위원회 인스타그램(@cau_stdright)을 참고해주시길 바랍니다.
        <br />
        <br />
        <strong>📍 배리어프리존 이용 대상</strong>
        <br />
        두 가지 유형 중 하나에 해당하는 중앙대학교 재적생
        <br />
        1. 복지카드(장애인등록증) 또는 장애인증명서 제출이 가능한 자<br />
        2. 다음 항목이 모두 명시된 진단서 또는 소견서(2025년 3월 1일 이후 발급) 제출이 가능한 자
        <br />
        &nbsp;&nbsp;① 병명 또는 증상 포함
        <br />
        <strong>&nbsp;&nbsp;- 치료내용 또는 향후 치료 계획에 대한 소견 포함</strong>
        <br />
        &nbsp;&nbsp;② 치료기간에 2025년 5월 21일부터 5월 23일 포함
        <br />
        <strong>&nbsp;&nbsp;- 의료기관 직인 포함</strong>
        <br />
        * 상기 항목 중 하나라도 누락된 경우, 서류는 인정되지 않음.
        <br />
        * 다음 항목이 모두 명시되어 있는 경우에 한해, 진료확인서나 처방전 등의 서류도 예외적으로 인정될 수 있음.
        <br />
        <br />
        <strong>📍 입장 시간: 16:30~18:00</strong>
        <br />
        * 18:00 이후에는 입장 및 재입장 불가
        <br />
        <br />
        <strong>📍 입장 방법</strong>
        <br />
        [사전 접수자 입장 방법]
        <br />
        1. 사전 이용 가능 안내 문자 확인
        <br />
        2. e-id/포탈 &gt; 내 정보 수정 확인
        <br />
        <br />
        [현장 접수자 입장 방법]
        <br />
        장애인 복지카드 소지자와 동반 1인에 한하여 가능
        <br />
        1. 장애인 복지카드 확인
        <br />
        2. e-id/포탈 &gt; 내 정보 수정 확인
      </Description>
    </Wrapper>
  );
};
export default BarrierFree;

const Wrapper = styled.div`
  padding: 12px;
`;

export const TestMapImage = styled.img`
  width: 100%;
  background-size: cover;
`;

const Text = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
`;

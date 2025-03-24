import styled from 'styled-components';

const LostItem = () => {
  return (
    <BigContainer>
      <Container>
        분실물을 발견했어요. <br />
        어떻게 해야하나요? 🤔
        <Answer>107관 총학생회실 방문 후 접수해주세요!</Answer>
      </Container>
      <Container>
        잃어버린 물건이 있어요 😭 <br />
        어떻게 찾아야하나요?
        <Answer>이미 총학생회에 접수된 물건이라면 107관 총학생회실 방문 후 개인 신분 확인 뒤 수령가능합니다.</Answer>
      </Container>
      <h3>내 분실물 찾기</h3>
    </BigContainer>
  );
};
export default LostItem;

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  gap: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 16px;
  background-color: #f9fafb;
  border-radius: 8px;
  font-weight: 600;
  line-height: 1.5; // 자간 조정
  gap: 8px;
`;

const Answer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #d1d5dc;
  font-weight: 400;
  line-height: 1.5; // 자간 조정
  padding-top: 8px;
`;

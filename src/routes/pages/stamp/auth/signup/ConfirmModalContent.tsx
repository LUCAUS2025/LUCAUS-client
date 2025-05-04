import { styled } from 'styled-components';

interface ConfirmModalContentProps {
  studentId: string;
  name: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmModalContent = ({ studentId, name, onCancel, onConfirm }: ConfirmModalContentProps) => {
  return (
    <Wrapper>
      <InfoTextBox>
        <InfoTitle>정보를 맞게 입력하셨나요?</InfoTitle>
        <InfoSub>
          <div>입력하신 정보는 광장기획전 참여 상품 응모에 활용됩니다.</div>
          <div>학번과 이름이 정확히 입력되었는지 다시한번 확인해주세요.</div>
        </InfoSub>
      </InfoTextBox>

      <UserInfoBox>
        <UserInfoTextLine>
          <div>학번</div>
          <div>{studentId}</div>
        </UserInfoTextLine>
        <UserInfoTextLine>
          <div>이름</div>
          <div>{name}</div>
        </UserInfoTextLine>
      </UserInfoBox>
      <ButtonLine>
        <StyledButton type={'cancle'} onClick={onCancel}>
          수정하기
        </StyledButton>
        <StyledButton type={'confirm'} onClick={onConfirm}>
          네 맞아요
        </StyledButton>
      </ButtonLine>
    </Wrapper>
  );
};

export default ConfirmModalContent;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const InfoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const InfoTitle = styled.div`
  color: #030712;
  font-size: 16px;
  font-weight: 600;
`;
const InfoSub = styled.div`
  color: #6a7282;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const UserInfoBox = styled.div`
  display: flex;
  padding: 12px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  border-radius: 12px;
  background: #f3f4f6;
  font-size: 16px;
  font-weight: 400;
`;
const UserInfoTextLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const ButtonLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const StyledButton = styled.button<{ type: string }>`
  display: flex;
  width: 150px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ type }) => (type == 'cancle' ? '#D1D5DC' : '#1447E6')};
  border: none;
  color: ${({ type }) => (type == 'cancle' ? '#6A7282' : '#F9FAFB')};
  font-size: 14px;
  font-weight: 400;
`;

import { SetStateAction } from 'react';
import { styled } from 'styled-components';

interface Props {
  setOpenRewardedModal: React.Dispatch<SetStateAction<boolean>>;
  clickedRewardDegree: number;
}

const RewardedModal = ({ setOpenRewardedModal, clickedRewardDegree }: Props) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>상품 수령/응모하기</Title>
        <SubTitle>{clickedRewardDegree}단계 상품 수령이 완료되었습니다.</SubTitle>
      </TitleWrapper>

      <StyledButton
        onClick={() => {
          setOpenRewardedModal(false);
        }}
      >
        닫기
      </StyledButton>
    </Wrapper>
  );
};

export default RewardedModal;

const Wrapper = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.div`
  color: #030712;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

const SubTitle = styled.div`
  color: #6a7282;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const StyledButton = styled.button`
  display: flex;
  height: 48px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  background-color: #d1d5dc;
  color: '#6A7282';
`;

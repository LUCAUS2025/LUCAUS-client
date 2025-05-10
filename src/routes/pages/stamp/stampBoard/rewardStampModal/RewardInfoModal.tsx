import React, { SetStateAction } from 'react';
import { styled } from 'styled-components';

interface Props {
  setOpenRewardInfoModal: React.Dispatch<SetStateAction<boolean>>;
  boardType: number | string;
}

const RewardInfoModal = ({ setOpenRewardInfoModal, boardType }: Props) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>상품 수령/응모하기</Title>
        <SubTitle>도장을 모은 만큼 상품 응모가 가능합니다.</SubTitle>
      </TitleWrapper>

      {boardType == 1 ? (
        <TextWrapper>
          <TextLine>3개:간식</TextLine>
          <TextLine>5개:추첨 상품</TextLine>
          <TextLine>7개:응모 상품</TextLine>
        </TextWrapper>
      ) : (
        <TextWrapper>
          <TextLine>2개:간식</TextLine>
          <TextLine>4개:추첨 상품</TextLine>
          <TextLine>6개:응모 상품</TextLine>
        </TextWrapper>
      )}

      <StyledButton
        onClick={() => {
          setOpenRewardInfoModal(false);
        }}
      >
        닫기
      </StyledButton>
    </Wrapper>
  );
};

export default RewardInfoModal;

const Wrapper = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 20px;
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

const TextLine = styled.div`
  color: #364153;
  font-size: 14px;
  font-weight: 400;
`;

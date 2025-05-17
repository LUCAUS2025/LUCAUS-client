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
          <TextLine>
            <StyledSpan>3개 |</StyledSpan> 행운 쿠키
          </TextLine>
          <TextLine>
            <StyledSpan>5개 |</StyledSpan> 보조배터리/축제 굿즈/간식 꾸러미 중 1
          </TextLine>
          <TextLine>
            <StyledSpan>7개 |</StyledSpan> 특별 상품 응모
          </TextLine>
        </TextWrapper>
      ) : (
        <TextWrapper>
          <TextLine>2개 : 행운 쿠키</TextLine>
          <TextLine>4개 : 보조배터리/축제 굿즈/간식 꾸러미 중 1</TextLine>
          <TextLine>6개 : 특별 상품 응모</TextLine>
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
  align-items: center;
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
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 5px;
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
  //margin-left: 10%;
  width: 100%;
`;

const StyledSpan = styled.span`
  font-weight: 800;
`;

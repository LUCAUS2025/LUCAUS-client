import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { LoadingSpinner } from '../../../styles/LoadingSpinner';
import { CommonItem } from '../../../data/boothFood';
import { ReviewItem } from '../../review/ReviewBarItem';

interface ReviewOption {
  icon: string;
  label: string;
}

interface ReviewFormContentProps {
  onClose: () => void;
  type: CommonItem['type'];
}

const boothReviewOptions: ReviewOption[] = [
  { icon: '👍', label: '완전\n추천해요' },
  { icon: '🍭', label: '간식이\n맛있어요' },
  { icon: '🤓', label: '콘텐츠가\n유익해요' },
  { icon: '🤣', label: '분위기가\n재밌어요' },
];

const foodTruckReviewOptions: ReviewItem[] = [
  { icon: '👍', label: '완전 n추천해요', value: 100 },
  { icon: '😋', label: '맛있어요', value: 80 },
  { icon: '🙆‍♂️', label: '양이 많아요', value: 40 },
  { icon: '💨', label: '빨라요', value: 20 },
];

export const ReviewFormContent: React.FC<ReviewFormContentProps> = ({ onClose, type }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [reviewStatus, setReviewStatus] = useState<'ready' | 'submitting' | 'success'>('ready');
  const submitReview = () => {
    setReviewStatus('submitting');

    setTimeout(() => {
      setReviewStatus('success');

      setTimeout(() => {
        onClose();
      }, 2000);
    }, 2000);
  };

  return (
    <Wrapper>
      {reviewStatus === 'ready' && type === 'booth' && (
        <>
          <TitleContainer>
            <Title>이 부스 추천해요!</Title>
            <SubText>부스 방문 후 부스에 대한 리뷰를 남겨주세요.</SubText>
          </TitleContainer>
          <OptionsContainer>
            {boothReviewOptions.map((option, idx) => (
              <Option key={idx}>
                <IconWrapper key={idx} selected={selected === idx} onClick={() => setSelected(idx)}>
                  {option.icon}
                </IconWrapper>
                <Label>{option.label}</Label>
              </Option>
            ))}
          </OptionsContainer>
          <ButtonContainer>
            <CancelButton onClick={onClose}>취소</CancelButton>
            <SubmitButton disabled={selected === null} onClick={() => submitReview()}>
              리뷰 보내기
            </SubmitButton>
          </ButtonContainer>
        </>
      )}
      {reviewStatus === 'ready' && type === 'foodTruck' && (
        <>
          <TitleContainer>
            <Title>푸드트럭, 어땠나요?</Title>
            <SubText>방문 후 푸드트럭에 대한 리뷰를 남겨주세요.</SubText>
          </TitleContainer>
          <OptionsContainer>
            {foodTruckReviewOptions.map((option, idx) => (
              <Option key={idx}>
                <IconWrapper key={idx} selected={selected === idx} onClick={() => setSelected(idx)}>
                  {option.icon}
                </IconWrapper>
                <Label>{option.label}</Label>
              </Option>
            ))}
          </OptionsContainer>
          <ButtonContainer>
            <CancelButton onClick={onClose}>취소</CancelButton>
            <SubmitButton disabled={selected === null} onClick={() => submitReview()}>
              리뷰 보내기
            </SubmitButton>
          </ButtonContainer>
        </>
      )}
      {reviewStatus === 'submitting' && (
        <>
          <TitleContainer>
            <Title>리뷰 전송중...</Title>
            <SubText>리뷰를 전송 중입니다.</SubText>
            <SubmittingAnimation>
              <LoadingSpinner />
            </SubmittingAnimation>
          </TitleContainer>
        </>
      )}
      {reviewStatus === 'success' && (
        <>
          <TitleContainer>
            <Title>리뷰 작성 완료!</Title>
            <SubText>리뷰가 성공적으로 전송되었습니다.</SubText>
            <CompleteAnimation>
              <Complete src="/images/common/complete.webp"></Complete>
            </CompleteAnimation>
          </TitleContainer>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px 20px 20px 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.26px;
  color: #101828;
`;

const SubText = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #6a7282;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.26px;
  text-align: center;
  vertical-align: middle;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: 8px;
  gap: 24px;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  transition: background-color 0.2s;
  width: 60px;
  padding: 6px;
`;

const IconWrapper = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? '#1447e61a' : '#f3f4f6')};
  cursor: pointer;
  font-size: 20px;
  border-radius: 50%;
  padding: 28px;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ selected }) => (selected ? '1px solid #1447e6' : '1px solid transparent')};
  box-shadow: 0px 0px 12px 0px ${({ selected }) => (selected ? '#1447e633' : 'transparent')};
  box-sizing: border-box;
`;

const Label = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.26px;
  text-align: center;
  vertical-align: middle;
  color: #101828;
  white-space: pre-line;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  margin-top: 12px;
`;

const CancelButton = styled.button`
  flex: 1;
  height: 48px;
  border-radius: 12px;
  border: none;
  background-color: #d1d5dc;
  color: #6a7282;
  font-size: 14px;
`;

const SubmitButton = styled.button<{ disabled: boolean }>`
  flex: 1;
  height: 48px;
  border-radius: 12px;
  border: none;
  background-color: ${({ disabled }) => (disabled ? '#9ca3af' : '#111827')};
  color: #f9fafb;
  font-size: 14px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const SubmittingAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 56px;
`;
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CompleteAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 56px;
  opacity: 0;
  transform: translateY(10px);
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;
const Complete = styled.img`
  width: 48px;
  height: 48px;
`;

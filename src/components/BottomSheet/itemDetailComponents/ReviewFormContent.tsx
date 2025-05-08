import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { LoadingSpinner } from '../../../styles/LoadingSpinner';
import { CommonItem } from '../../../data/boothFood';
import { postBoothReview } from '../../../services/apis/booth/boothReview';
import { postFoodTruckReview } from '../../../services/apis/foodTruck/foodTruckReview';
import { AxiosError } from 'axios';

interface ReviewOption {
  icon: string;
  label: string;
  tag: string;
}

interface ReviewFormContentProps {
  onClose: () => void;
  type: CommonItem['type'];
  currentId: number;
}

const boothReviewOptions: ReviewOption[] = [
  { icon: '👍', label: '완전\n추천해요', tag: 'RECOMMEND' },
  { icon: '🍭', label: '간식이\n맛있어요', tag: 'DELICIOUS' },
  { icon: '🤓', label: '콘텐츠가\n유익해요', tag: 'BENEFICIAL' },
  { icon: '🤣', label: '분위기가\n재밌어요', tag: 'FUN' },
];

const foodTruckReviewOptions: ReviewOption[] = [
  { icon: '👍', label: '완전\n추천해요', tag: 'RECOMMEND' },
  { icon: '😋', label: '맛있어요', tag: 'DELICIOUS' },
  { icon: '🙆‍♂️', label: '양이 많아요', tag: 'MANY' },
  { icon: '💨', label: '빨라요', tag: 'FAST' },
];

export const ReviewFormContent: React.FC<ReviewFormContentProps> = ({ onClose, type, currentId }) => {
  const [selected, setSelected] = useState<number[]>([]);
  const [reviewStatus, setReviewStatus] = useState<'ready' | 'submitting' | 'success' | 'fail'>('ready');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleSelected = (idx: number) => {
    setSelected((prev) => (prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]));
  };

  const submitReview = async () => {
    setReviewStatus('submitting');

    const selectedTags =
      type === 'booth'
        ? selected.map((i) => boothReviewOptions[i].tag)
        : selected.map((i) => foodTruckReviewOptions[i].tag);
    try {
      if (type === 'booth') {
        const result = await postBoothReview(currentId, selectedTags);
        if (result?.isSuccess) {
          setReviewStatus('success');
          setTimeout(() => {
            onClose();
          }, 1500);
        } else {
          setReviewStatus('fail');
          setErrorMessage(result?.message);
          setReviewStatus('fail');
          setTimeout(() => {
            onClose();
          }, 2300);
        }
      } else if (type === 'foodTruck') {
        const result = await postFoodTruckReview(currentId, selectedTags);
        if (result?.isSuccess) {
          setReviewStatus('success');
          setTimeout(() => {
            onClose();
          }, 1500);
        } else {
          setErrorMessage(result?.message);
          setReviewStatus('fail');
          setTimeout(() => {
            onClose();
          }, 2300);
        }
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      const message = axiosError.response?.data?.message || '알 수 없는 오류가 발생했습니다.';
      setErrorMessage(message);
      setReviewStatus('fail');
      setTimeout(() => {
        onClose();
      }, 2300);
    }
  };
  const options = type === 'booth' ? boothReviewOptions : foodTruckReviewOptions;

  return (
    <Wrapper>
      {reviewStatus === 'ready' && (
        <>
          <TitleContainer>
            <Title>{type === 'booth' ? '이 부스 추천해요!' : '푸드트럭, 어땠나요?'}</Title>
            <SubText>
              {type === 'booth'
                ? '부스 방문 후 부스에 대한 리뷰를 남겨주세요.'
                : '방문 후 푸드트럭에 대한 리뷰를 남겨주세요.'}
            </SubText>
          </TitleContainer>
          <OptionsContainer>
            {options.map((option, idx) => (
              <Option key={idx}>
                <IconWrapper selected={selected.includes(idx)} onClick={() => toggleSelected(idx)}>
                  {option.icon}
                </IconWrapper>
                <Label selected={selected.includes(idx)}>{option.label}</Label>
              </Option>
            ))}
          </OptionsContainer>
          <ButtonContainer>
            <CancelButton onClick={onClose}>취소</CancelButton>
            <SubmitButton disabled={selected.length === 0} onClick={submitReview}>
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
      {reviewStatus === 'fail' && errorMessage.length && (
        <>
          <TitleContainer>
            <Title>리뷰 전송 실패</Title>
            <SubText>{errorMessage}</SubText>
            <CompleteAnimation>
              <Complete src="/images/common/fail.webp" />
            </CompleteAnimation>
          </TitleContainer>
        </>
      )}
      {reviewStatus === 'success' && (
        <>
          <TitleContainer>
            <Title>리뷰 작성 완료!</Title>
            <SubText>리뷰가 성공적으로 전송되었습니다.</SubText>
            <CompleteAnimation>
              <Complete src="/images/common/complete.webp" />
            </CompleteAnimation>
          </TitleContainer>
        </>
      )}
    </Wrapper>
  );
};

// Styled Components 아래 동일 (수정 없음)
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px 20px 20px 20px;

  @media (max-width: 380px) {
    gap: 13px;
  }
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
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.26px;
  text-align: center;
  vertical-align: middle;
  color: #6a7282;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: 8px;
  gap: 24px;

  @media (max-width: 380px) {
    gap: 20px;
  }
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
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
  border: ${({ selected }) => (selected ? '1.3px solid #1447e6' : '1px solid transparent')};
  box-shadow: 0px 0px 12px 0px ${({ selected }) => (selected ? '#1447e633' : 'transparent')};
  box-sizing: border-box;
`;

const Label = styled.div<{ selected: boolean }>`
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.26px;
  text-align: center;
  vertical-align: middle;
  color: #101828;
  white-space: pre-line;
  font-weight: ${({ selected }) => (selected ? '600' : '400')};

  @media (max-width: 380px) {
    font-size: 11px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  margin-top: 12px;

  @media (max-width: 380px) {
    gap: 10px;
  }
`;

const CancelButton = styled.button`
  flex: 1;
  height: 48px;
  border-radius: 12px;
  border: none;
  background-color: #d1d5dc;
  color: #6a7282;
  font-size: 14px;

  @media (max-width: 380px) {
    height: 40px;
  }
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

  @media (max-width: 380px) {
    height: 40px;
  }
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

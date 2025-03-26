import React, { useState } from 'react';
import styled from 'styled-components';

interface ReviewOption {
  icon: string;
  label: string;
}

const reviewOptions: ReviewOption[] = [
  { icon: '👍', label: '완전\n추천해요' },
  { icon: '🍭', label: '간식이\n맛있어요' },
  { icon: '🤓', label: '콘텐츠가\n유익해요' },
  { icon: '🤣', label: '분위기가\n재밌어요' },
];

export const ReviewFormContent: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Wrapper>
      <TitleContainer>
        <Title>이 부스 추천해요!</Title>
        <SubText>부스 방문 후 부스에 대한 리뷰를 남겨주세요.</SubText>
      </TitleContainer>
      <OptionsContainer>
        {reviewOptions.map((option, idx) => (
          <Option key={idx}>
            <IconWrapper key={idx} selected={selected === idx} onClick={() => setSelected(idx)}>
              {option.icon}
            </IconWrapper>
            <Label>{option.label}</Label>
          </Option>
        ))}
      </OptionsContainer>
      <ButtonContainer>
        <CancelButton>취소</CancelButton>
        <SubmitButton disabled={selected === null}>리뷰 보내기</SubmitButton>
      </ButtonContainer>
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
  //gap: 15px;
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

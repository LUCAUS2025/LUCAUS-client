import React from 'react';
import styled from 'styled-components';
import { ReviewBarList } from '../../review/ReviewBarList';
import { ReviewItem } from '../../review/ReviewBarItem';

export const DetailReview = () => {
  const tempReviewItems: ReviewItem[] = [
    { icon: '👍', label: '완전 추천해요', value: 100 },
    { icon: '🤣', label: '분위기가 재밌어요', value: 80 },
    { icon: '🤓', label: '콘텐츠가 유익해요', value: 40 },
    { icon: '🍭', label: '간식이 맛있어요', value: 20 },
  ];

  return (
    <Wrapper>
      <Header>
        <Title>이 부스 추천해요!</Title>
        <Description>부스 방문 후 부스에 대한 리뷰를 남겨주세요.</Description>
      </Header>
      <ReviewBarList reviews={tempReviewItems} />
      <WriteReviewButton>리뷰 작성하기</WriteReviewButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 125%;
  letter-spacing: -0.26px;
  color: #030712;
`;
const Description = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.26px;
  color: #6a7282;
`;
const WriteReviewButton = styled.div`
  align-self: flex-end;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.26px;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-offset: 0%;
  text-decoration-thickness: 0%;
  text-decoration-skip-ink: auto;
  cursor: pointer;
`;

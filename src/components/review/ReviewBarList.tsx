import React from 'react';
import styled from 'styled-components';
import { ReviewBarItem, ReviewItem } from './ReviewBarItem';

interface ReviewBarListProps {
  reviews: ReviewItem[];
}

export const ReviewBarList: React.FC<ReviewBarListProps> = ({ reviews }) => {
  const max = Math.max(...reviews.map((r) => r.value));

  return (
    <Wrapper>
      {reviews.map((item, idx) => (
        <ReviewBarItem key={idx} item={item} max={max} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

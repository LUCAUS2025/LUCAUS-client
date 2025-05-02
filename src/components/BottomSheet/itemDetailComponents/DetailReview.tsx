import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReviewBarList } from '../../review/ReviewBarList';
import { ReviewItem } from '../../review/ReviewBarItem';
import { CommonItem } from '../../../data/boothFood';
import { BoothReviewItem } from '../../../services/apis/booth/boothDetail';
import { FoodTruckReviewItem } from '../../../services/apis/foodTruck/foodTruckDetail';

interface DetailReviewProps {
  type: CommonItem['type'];
  onOpenReview: () => void;
  reviewData: BoothReviewItem[] | FoodTruckReviewItem[];
}

export const DetailReview: React.FC<DetailReviewProps> = ({ type, onOpenReview, reviewData }) => {
  const [reviewItems, setReviewItems] = useState<ReviewItem[]>([]);

  useEffect(() => {
    const flattened: Record<string, number> = (reviewData as Array<{ [key: string]: number }>).reduce((acc, curr) => {
      const [key, value] = Object.entries(curr)[0];
      acc[key] = value;
      return acc;
    }, {});

    const boothReview: ReviewItem[] = [
      { icon: '👍', label: '완전 추천해요', value: flattened['RECOMMEND'] ?? 0 },
      { icon: '🤣', label: '분위기가 재밌어요', value: flattened['FUN'] ?? 0 },
      { icon: '🤓', label: '콘텐츠가 유익해요', value: flattened['BENEFICIAL'] ?? 0 },
      { icon: '🍭', label: '간식이 맛있어요', value: flattened['DELICIOUS'] ?? 0 },
    ];

    const foodTruckReview: ReviewItem[] = [
      { icon: '👍', label: '완전 추천해요', value: flattened['RECOMMEND'] ?? 0 },
      { icon: '😋', label: '맛있어요', value: flattened['DELICIOUS'] ?? 0 },
      { icon: '🙆‍♂️', label: '양이 많아요', value: flattened['MANY'] ?? 0 },
      { icon: '💨', label: '빨라요', value: flattened['FAST'] ?? 0 },
    ];

    setReviewItems(type === 'booth' ? boothReview : foodTruckReview);
  }, [reviewData, type]);

  return (
    <Wrapper>
      <Header>
        <Title>{type === 'booth' ? '이 부스 추천해요!' : '푸드트럭, 어땠나요?'}</Title>
        <Description>
          {type === 'booth'
            ? '부스 방문 후 부스에 대한 리뷰를 남겨주세요.'
            : '방문 후 푸드트럭에 대한 리뷰를 남겨주세요.'}
        </Description>
      </Header>
      <ReviewBarList reviews={reviewItems} />
      <WriteReviewButton onClick={onOpenReview}>리뷰 작성하기</WriteReviewButton>
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
  text-decoration-thickness: 0%;
  text-decoration-skip-ink: auto;
  cursor: pointer;
`;

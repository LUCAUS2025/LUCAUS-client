import React, { useState } from 'react';
import { DetailWrapper, HeaderContainer, ItemId, ItemTitle, TitleContainer } from '../../../styles/itemDetailStyles';
import { DetailOperatingInfo } from '../itemDetailComponents/DetailOperatingInfo';
import styled from 'styled-components';
import { DetailReview } from '../itemDetailComponents/DetailReview';
import { PortalBottomSheet } from '../variants/PortalBottomSheet';
import { ReviewFormContent } from '../itemDetailComponents/ReviewFormContent';
import { FoodTruckDetailRawData } from '../../../services/apis/foodTruck/foodTruckDetail';
import { mediaSmall } from '../../../styles/responsive';
interface FoodTruckDetailContentProps {
  foodTruckDetail: FoodTruckDetailRawData;
  selectedDate: number;
  handleReviewSubmit?: () => void;
}

export const FoodTruckDetailContent: React.FC<FoodTruckDetailContentProps> = ({
  foodTruckDetail,
  selectedDate,
  handleReviewSubmit,
}) => {
  const [isReviewSheetOpen, setIsReviewSheetOpen] = useState(false);

  const openReviewSheet = () => {
    setIsReviewSheetOpen(true);
  };

  const closeReviewSheet = () => {
    setIsReviewSheetOpen(false);
  };

  return (
    <Wrapper>
      <DetailWrapper>
        <HeaderContainer>
          <TitleContainer>
            <ItemTitle>{foodTruckDetail?.name}</ItemTitle>
          </TitleContainer>
        </HeaderContainer>
        <MenuContainer>
          <MenuTitle>대표메뉴</MenuTitle>
          {foodTruckDetail.menus.map((item, idx) => {
            const [name, price] = Object.entries(item)[0];
            return (
              <MenuOption key={idx}>
                <MenuText>{name}</MenuText>
                <MenuPrice>{price.toLocaleString()}원</MenuPrice>
              </MenuOption>
            );
          })}
        </MenuContainer>
        <OperatingContainer>
          <OperatingTitle>푸드트럭 운영</OperatingTitle>
          <DetailOperatingInfo
            type={'foodTruck'}
            selectedDate={selectedDate}
            location={foodTruckDetail.location}
            opDateList={foodTruckDetail?.opDateList}
          />
        </OperatingContainer>
        <DetailReview type={'foodTruck'} onOpenReview={openReviewSheet} reviewData={foodTruckDetail.foodTruckReviews} />
      </DetailWrapper>
      {/*리뷰 바텀시트*/}
      {isReviewSheetOpen && (
        <PortalBottomSheet
          componentProps={{
            onClose: closeReviewSheet,
            type: 'foodTruck',
            currentId: foodTruckDetail?.foodTruckId,
            ...(handleReviewSubmit && { onSubmit: handleReviewSubmit }),
          }}
          contentComponent={ReviewFormContent}
          onClose={closeReviewSheet}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const OperatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const OperatingTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 125%;
  letter-spacing: -0.26px;

  ${mediaSmall`
    font-size: 18px;
  `}
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  margin-bottom: 8px;
`;

const MenuOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MenuTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.26px;

  ${mediaSmall`
    font-size: 18px;
  `}
`;
const MenuText = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.26px;
  color: #364153;

  ${mediaSmall`
    font-size: 15px;
  `}
`;
const MenuPrice = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.26px;
  text-align: right;
  color: #364153;

  ${mediaSmall`
    font-size: 13px;
  `}
`;

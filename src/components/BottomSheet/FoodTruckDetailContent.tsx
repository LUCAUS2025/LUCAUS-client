import React, { useState } from 'react';
import { DetailWrapper, HeaderContainer, ItemId, ItemTitle, TitleContainer } from '../../styles/itemDetailStyles';
import { DetailOperatingInfo } from './ItemDetailComponents/DetailOperatingInfo';
import styled from 'styled-components';
import { DetailReview } from './ItemDetailComponents/DetailReview';
import { PortalBottomSheet } from './PortalBottomSheet';
import { ReviewFormContent } from './ItemDetailComponents/ReviewFormContent';

export const FoodTruckDetailContent = () => {
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
            <ItemTitle>
              <ItemId>#1&nbsp;</ItemId>닭꼬치 묵고 떠블로 가~!
            </ItemTitle>
          </TitleContainer>
        </HeaderContainer>
        <MenuContainer>
          <MenuTitle>대표메뉴</MenuTitle>
          <MenuOption>
            <MenuText>매운 닭꼬치</MenuText>
            <MenuPrice>5,000원</MenuPrice>
          </MenuOption>
          <MenuOption>
            <MenuText>안매운 닭꼬치</MenuText>
            <MenuPrice>5,000원</MenuPrice>
          </MenuOption>
          <MenuOption>
            <MenuText>달달한 닭꼬치</MenuText>
            <MenuPrice>5,000원</MenuPrice>
          </MenuOption>
        </MenuContainer>
        <OperatingContainer>
          <OperatingTitle>푸드트럭 운영</OperatingTitle>
          <DetailOperatingInfo />
        </OperatingContainer>
        <DetailReview type={'foodTruck'} onOpenReview={openReviewSheet} />
      </DetailWrapper>
      {/*리뷰 바텀시트*/}
      {isReviewSheetOpen && (
        <PortalBottomSheet
          componentProps={{ onClose: closeReviewSheet, type: 'foodTruck' }}
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
`;
const MenuText = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.26px;
`;
const MenuPrice = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.26px;
  text-align: right;
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import {
  DetailWrapper,
  HeaderContainer,
  TitleContainer,
  ItemTitle,
  ItemId,
  ItemHost,
  ItemDescription,
  Keywords,
  Keyword,
} from '../../styles/itemDetailStyles';
import { DetailOperatingInfo } from './ItemDetailComponents/DetailOperatingInfo';
import { DetailReview } from './ItemDetailComponents/DetailReview';
import { PortalBottomSheet } from './PortalBottomSheet';
import { ReviewFormContent } from './ItemDetailComponents/ReviewFormContent';

export const BoothDetailContent = () => {
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
              <ItemId>#1&nbsp;</ItemId>너 내 친구가 되어라
            </ItemTitle>
            <ItemHost>LIKELION CAU</ItemHost>
            <Keywords>
              <Keyword>#게임</Keyword>
              <Keyword>#체험</Keyword>
            </Keywords>
          </TitleContainer>
          <ItemDescription>
            랜덤으로 짝이 된 참가자와 미션을 완료하면 새로운 인연과 깜짝 선물이 함께! 서로의 MBTI를 맞혀보거나 간단한
            게임을 즐기며 자연스럽게 친해져 보세요. 혼자 와도 걱정 NO! 이 부스를 나오면 친구 한 명쯤은 생겨 있을걸요?
          </ItemDescription>
        </HeaderContainer>
        <DetailOperatingInfo />
        <DetailReview onOpenReview={openReviewSheet} />
      </DetailWrapper>

      {isReviewSheetOpen && (
        <PortalBottomSheet
          componentProps={closeReviewSheet}
          contentComponent={ReviewFormContent}
          onClose={() => closeReviewSheet}
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

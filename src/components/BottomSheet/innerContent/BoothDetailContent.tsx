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
} from '../../../styles/itemDetailStyles';
import { DetailOperatingInfo } from '../itemDetailComponents/DetailOperatingInfo';
import { DetailReview } from '../itemDetailComponents/DetailReview';
import { PortalBottomSheet } from '../variants/PortalBottomSheet';
import { ReviewFormContent } from '../itemDetailComponents/ReviewFormContent';
import { BoothDetailRawData } from '../../../services/apis/booth/boothDetail';

interface BoothDetailContentProps {
  boothDetail: BoothDetailRawData;
  selectedDate: number;
}

export const BoothDetailContent: React.FC<BoothDetailContentProps> = ({ boothDetail, selectedDate }) => {
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
              <ItemId>#{boothDetail?.dayBoothNum}&nbsp;</ItemId>
              {boothDetail?.name}
            </ItemTitle>
            <ItemHost>{boothDetail?.owner}</ItemHost>
            <Keywords>
              {boothDetail?.categories?.map((keyword, idx) => <Keyword key={idx}>{keyword}</Keyword>)}
            </Keywords>
          </TitleContainer>
          <ItemDescription>{boothDetail?.info}</ItemDescription>
        </HeaderContainer>
        <OperatingContainer>
          <OperatingTitle>부스 운영</OperatingTitle>
          <DetailOperatingInfo
            type={'booth'}
            selectedDate={selectedDate}
            location={boothDetail?.location}
            opDateList={boothDetail?.opDateList}
          />
        </OperatingContainer>
        <DetailReview type={'booth'} onOpenReview={openReviewSheet} reviewData={boothDetail.boothReview} />
      </DetailWrapper>
      {/* 리뷰 바텀시트 */}
      {isReviewSheetOpen && (
        <PortalBottomSheet
          componentProps={{ onClose: closeReviewSheet, type: 'booth', currentId: boothDetail?.boothId }}
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

import React, { useEffect, useState } from 'react';
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
import { useLocation, useParams } from 'react-router-dom';
import { BoothDetailRawData, fetchBoothDetail } from '../../../services/apis/booth/boothDetail';

export const BoothDetailContent = () => {
  const location = useLocation();
  const { dayBoothNum } = useParams<{ dayBoothNum: string }>();
  const [isReviewSheetOpen, setIsReviewSheetOpen] = useState(false);
  const selectedDate = location.state?.selectedDate;
  const [boothDetail, setBoothDetail] = useState<BoothDetailRawData | null>(null);

  const openReviewSheet = () => {
    setIsReviewSheetOpen(true);
  };

  const closeReviewSheet = () => {
    setIsReviewSheetOpen(false);
  };

  useEffect(() => {
    const getBoothDetail = async () => {
      const result = await fetchBoothDetail(selectedDate, Number(dayBoothNum));
      const booth = result?.[0];
      setBoothDetail(booth ?? null);
      console.log(result);
    };
    getBoothDetail();
  }, [dayBoothNum, selectedDate]);

  if (!boothDetail) {
    return <div>Loading...</div>; // 또는 Skeleton
  }

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
        <DetailOperatingInfo type={'booth'} selectedDate={selectedDate} location={boothDetail?.location} />
        <DetailReview type={'booth'} onOpenReview={openReviewSheet} />
      </DetailWrapper>
      {/* 리뷰 바텀시트 */}
      {isReviewSheetOpen && (
        <PortalBottomSheet
          componentProps={{ onClose: closeReviewSheet, type: 'booth' }}
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

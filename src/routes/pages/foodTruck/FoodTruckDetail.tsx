import React from 'react';
import { BaseLayer } from '../../../components/BottomSheet/BaseLayer';
import { GoBackButton } from '../../../components/common/GoBackButton';
import { useNavigate } from 'react-router-dom';
import { StaticBottomSheet } from '../../../components/BottomSheet/StaticBottomSheet';
import { FoodTruckDetailContent } from '../../../components/BottomSheet/FoodTruckDetailContent';
import styled from 'styled-components';

export const FoodTruckDetail = () => {
  const navigate = useNavigate();
  const tempBooth = {
    id: 1,
    title: '닭꼬치 묵고 떠블로 가~!',
    dates: [19, 20],
    time: '10:00 ~ 재료 소진 시까지',
    place: '운영 일자',
  };

  return (
    <>
      <BaseLayer>
        <GoBackButtonContainer>
          <GoBackButton onClick={() => navigate(-1)} />
        </GoBackButtonContainer>
        <StaticBottomSheet
          size={'large'}
          ContentComponent={FoodTruckDetailContent}
          componentProps={{ id: tempBooth.id }}
          isBottomSheetHeader={false}
          overlapFooter={false}
        />
      </BaseLayer>
    </>
  );
};

const GoBackButtonContainer = styled.div`
  position: absolute;
  left: 7px;
  top: 20px;
`;

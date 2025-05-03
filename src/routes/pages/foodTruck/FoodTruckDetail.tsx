import React, { useEffect, useState } from 'react';
import { BaseLayer } from '../../../components/BottomSheet/layout/BaseLayer';
import { GoBackButton } from '../../../components/common/GoBackButton';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { StaticBottomSheet } from '../../../components/BottomSheet/variants/StaticBottomSheet';
import { FoodTruckDetailContent } from '../../../components/BottomSheet/innerContent/FoodTruckDetailContent';
import styled from 'styled-components';
import { fetchFoodTruckDetail, FoodTruckDetailRawData } from '../../../services/apis/foodTruck/foodTruckDetail';
import { useHeader } from '../../../context/HeaderContext';

export const FoodTruckDetail = () => {
  const { setHideHeader } = useHeader();
  const navigate = useNavigate();
  const location = useLocation();
  const { dayFoodTruckNum } = useParams<{ dayFoodTruckNum: string }>();
  const [foodTruckDetail, setFoodTruckDetail] = useState<FoodTruckDetailRawData | null>(null);
  const selectedDate = location.state?.selectedDate;

  useEffect(() => {
    const getFoodTruckDetail = async () => {
      const result = await fetchFoodTruckDetail(selectedDate, Number(dayFoodTruckNum));
      const foodTruck = result?.[0];
      setFoodTruckDetail(foodTruck ?? null);
    };
    getFoodTruckDetail();
  }, [dayFoodTruckNum, selectedDate]);

  useEffect(() => {
    setHideHeader(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!foodTruckDetail) {
    return <div>loading...</div>;
  }

  return (
    <>
      <BaseLayer backgroundImgSrc={foodTruckDetail?.cover}>
        <GoBackButtonContainer>
          <GoBackButton onClick={() => navigate(-1)} />
        </GoBackButtonContainer>
        <StaticBottomSheet
          size={'large'}
          ContentComponent={FoodTruckDetailContent}
          componentProps={{ foodTruckDetail, selectedDate }}
          isBottomSheetHeader={false}
          overlapFooter={false}
        />
      </BaseLayer>
    </>
  );
};

const GoBackButtonContainer = styled.div`
  position: absolute;
  left: 16px;
  top: 20px;
`;

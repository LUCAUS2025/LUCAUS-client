import React, { useEffect, useState } from 'react';
import { BoothOrFoodTruckItem, FoodTruckItem } from '../../../data/boothFood';
import styled from 'styled-components';
import { ItemListContent } from '../../../components/BottomSheet/innerContent/ItemListContent';
import { dateMonthOption, dateOptions, dateYearOption } from '../../../data/options';
import { fetchFoodTruckList } from '../../../services/apis/foodTruck/foodTruckList';
import { LoadingPage } from '../LoadingPage';
import { VoidPage } from '../VoidPage';
import { foodTruckListMock } from '../../../mock/foodTruckMockData';

export const FoodTruck = () => {
  const [selectedDate, setSelectedDate] = useState<number>(19);
  const [foodTruckList, setFoodTruckList] = useState<FoodTruckItem[] | []>([]);
  const [apiStatus, setApiStatus] = useState<boolean>(false);

  useEffect(() => {
    const getFoodTruckList = async () => {
      try {
        const foodTruckResponse = await fetchFoodTruckList(selectedDate);
        setFoodTruckList(foodTruckResponse ?? []);
      } catch (e) {
        // alert('로딩에 실패하였습니다.');
      }
    };
    //getFoodTruckList();
  }, []);

  useEffect(() => {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDate = today.getDate();
    const selectedYear = Number(dateYearOption.value); // 2025
    const selectedMonth = Number(dateMonthOption.value); // 5 (앞에 0o5여도 숫자 5로 인식됨)
    const startDay = 19;
    const endDay = 23;

    let targetDate: number;

    if (
      todayYear === selectedYear &&
      todayMonth === selectedMonth &&
      todayDate >= startDay &&
      todayDate <= endDay &&
      dateOptions.some((option) => option.value === todayDate)
    ) {
      targetDate = todayDate;
    } else {
      targetDate = startDay;
    }

    const todayOption = dateOptions.find((option) => option.value === targetDate);
    if (todayOption) {
      setSelectedDate(targetDate);
    }
  }, []);

  // if (!apiStatus) {
  //   return <VoidPage />;
  // }

  // if (!foodTruckList || foodTruckList.length == 0) {
  //   return <LoadingPage />;
  // }

  return (
    <>
      <Container>
        <ItemListContent
          theTitle={'푸드트럭 안내'}
          theDescription={'매일 10시부터 19시, 맛의 향연을 즐겨보세요!'}
          data={foodTruckListMock || []}
          type="foodTruck"
        />
      </Container>
    </>
  );
};

export default FoodTruck;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  left: 16px;
  top: 80px;
  position: absolute;
`;

const Container = styled.div`
  padding: 20px 0px;
`;

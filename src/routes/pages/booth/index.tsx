import React, { useEffect, useState } from 'react';
import { BaseLayer } from '../../../components/BottomSheet/layout/BaseLayer';
import { BasicBottomSheet } from '../../../components/BottomSheet/variants/BasicBottomSheet';
import styled from 'styled-components';
import { dateMonthOption, dateOptions, dateYearOption, Option, placeOptions } from '../../../data/options';
import { DateDropDown } from '../../../components/common/DropDown/DateDropDown';
import { PlaceDropDown } from '../../../components/common/DropDown/PlaceDropDown';
import { BoothItem, BoothOrFoodTruckItem } from '../../../data/boothFood';
import { StaticBottomSheet } from '../../../components/BottomSheet/variants/StaticBottomSheet';
import { ItemPreviewContent } from '../../../components/BottomSheet/innerContent/ItemPreviewContent';
import { GoBackButton } from '../../../components/common/GoBackButton';
import { fetchBoothList } from '../../../services/apis/booth/boothList';
import { useHeader } from '../../../context/HeaderContext';

export const Booth = () => {
  const { setHideHeader } = useHeader();
  const [selectedDate, setSelectedDate] = useState<Option>(dateOptions[0]);
  const [selectedPlace, setSelectedPlace] = useState<Option>(placeOptions[0]);
  const [selectedItem, setSelectedItem] = useState<BoothOrFoodTruckItem | null>(null);
  const [boothList, setBoothList] = useState<BoothItem[] | []>([]);

  useEffect(() => {
    const getBoothList = async () => {
      try {
        const boothListResponse = await fetchBoothList(selectedDate.value as number);
        setBoothList(boothListResponse ?? []);
        console.log('응답', boothListResponse);
      } catch (e) {
        console.log(e);
        alert('로딩에 실패하였습니다.');
      }
    };
    getBoothList();
  }, [selectedDate]);

  useEffect(() => {
    setHideHeader(!!selectedItem);
    return () => setHideHeader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  useEffect(() => {
    const today = new Date();

    const selectedYear = Number(dateYearOption.value);
    const selectedMonth = Number(dateMonthOption.value);
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDate = today.getDate();
    // 오늘이 지정된 연도/월이며, 축제 기간 날짜 옵션 내에 포함된다면
    if (
      todayYear === selectedYear &&
      todayMonth === selectedMonth &&
      dateOptions.some((option) => option.value === todayDate)
    ) {
      const todayOption = dateOptions.find((option) => option.value === todayDate);
      if (todayOption) {
        setSelectedDate(todayOption);
      }
    } else {
      // 아니면 축제 첫째날로 설정
      setSelectedDate(dateOptions[0]);
    }
  }, []);

  return (
    <BaseLayer backgroundImgSrc="/images/booth/tempStreet2.png">
      {/* 리스트 바텀시트 */}
      {!selectedItem && (
        <>
          <OptionContainer>
            <DateDropDown selectedDate={selectedDate} setSelectedDate={setSelectedDate} darkMode={false} />
            <PlaceDropDown selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
          </OptionContainer>
          <BasicBottomSheet
            title={'부스 배치도'}
            description={'한눈에 보는 부스 배치도와 부스 리스트'}
            data={boothList}
            setSelectedItem={setSelectedItem}
            selectedPlace={selectedPlace}
            type="booth"
          />
        </>
      )}

      {/* 프리뷰 바텀시트 */}
      {selectedItem && (
        <>
          <GoBackButtonContainer>
            <GoBackButton onClick={() => setSelectedItem(null)} />
          </GoBackButtonContainer>
          <StaticBottomSheet
            size={'small'}
            ContentComponent={ItemPreviewContent}
            componentProps={{
              item: selectedItem,
              onClose: () => setSelectedItem(null),
              selectedDate: selectedDate.value as number,
            }}
            isBottomSheetHeader={true}
            overlapFooter={false}
          />
        </>
      )}
    </BaseLayer>
  );
};

export default Booth;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  left: 16px;
  top: 80px;
  position: absolute;
`;

const GoBackButtonContainer = styled.div`
  position: absolute;
  left: 15px;
  top: 20px;
`;

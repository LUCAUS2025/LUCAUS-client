import React, { useEffect, useState } from 'react';
import { BaseLayer } from '../../../components/BottomSheet/layout/BaseLayer';
import { BasicBottomSheet } from '../../../components/BottomSheet/variants/BasicBottomSheet';
import styled from 'styled-components';
import { dateOptions, Option, placeOptions } from '../../../data/options';
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
      } catch (e) {
        console.log(e);
        alert('로딩에 실패하였습니다.');
      }
    };
    getBoothList();
  }, [selectedDate]);

  useEffect(() => {
    setHideHeader(!!selectedItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  return (
    <BaseLayer backgroundImgSrc="1.png">
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
            data={boothList || []}
            setSelectedItem={setSelectedItem}
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
  top: 20px;
  position: absolute;
`;

const GoBackButtonContainer = styled.div`
  position: absolute;
  left: 15px;
  top: 20px;
`;

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
import { mapBoothMapImg, mapBoothMapMagnifiedImg } from '../../../utils/boothMapImgMapping';
import { LoadingPage } from '../LoadingPage';
import { useLocation } from 'react-router-dom';
import { getTodayDateOption } from '../../../utils/getTodayDateOption';

export const Booth = () => {
  const { setHideHeader } = useHeader();
  const [selectedDate, setSelectedDate] = useState<Option>(() => getTodayDateOption());
  const [selectedPlace, setSelectedPlace] = useState<Option>(placeOptions[0] || null);
  const [selectedItem, setSelectedItem] = useState<BoothOrFoodTruckItem | null>(null);
  const [boothList, setBoothList] = useState<BoothItem[] | []>([]);
  const [mapImg, setMapImg] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const getBoothList = async () => {
      try {
        setIsLoading(false);
        const boothListResponse = await fetchBoothList(selectedDate?.value as number);
        setBoothList(boothListResponse ?? []);
      } catch (e) {
        alert('로딩에 실패하였습니다.');
      }
    };
    getBoothList();
  }, [selectedDate]);

  useEffect(() => {
    const getBoothList = async () => {
      try {
        setIsLoading(false);
        const boothListResponse = await fetchBoothList(selectedDate?.value as number);
        setBoothList(boothListResponse ?? []);
      } catch (e) {
        alert('로딩에 실패하였습니다.');
      }
    };
    getBoothList();
  }, []);

  useEffect(() => {
    setHideHeader(!!selectedItem);
    return () => setHideHeader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  useEffect(() => {
    if (selectedItem && selectedItem?.dayBoothNum && selectedDate) {
      setMapImg(mapBoothMapMagnifiedImg(selectedDate, selectedItem?.dayBoothNum, selectedPlace));
    } else if (selectedDate) {
      setMapImg(mapBoothMapImg(selectedDate, selectedPlace));
    }
  }, [selectedDate, selectedItem, selectedPlace]);

  useEffect(() => {
    setSelectedItem(null);
  }, [location.key]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <BaseLayer backgroundImgSrc={mapImg}>
      {/* 리스트 바텀시트 */}
      {!selectedItem && (
        <>
          <OptionContainer>
            <DateDropDown selectedDate={selectedDate} setSelectedDate={setSelectedDate} darkMode={false} />
            <PlaceDropDown selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
          </OptionContainer>
          <BasicBottomSheet
            title={'부스 배치도'}
            description={'*한 단위체의 부스 연속 사용 시 앞번호로 표기됩니다.'}
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
              selectedDate: selectedDate?.value as number,
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

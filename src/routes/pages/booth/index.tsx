import React, { useState } from 'react';
import { BaseLayer } from '../../../components/BottomSheet/layout/BaseLayer';
import { BasicBottomSheet } from '../../../components/BottomSheet/variants/BasicBottomSheet';
import styled from 'styled-components';
import { dateOptions, Option, placeOptions } from '../../../data/options';
import { DateDropDown } from '../../../components/common/DropDown/DateDropDown';
import { PlaceDropDown } from '../../../components/common/DropDown/PlaceDropDown';
import { boothDescription, BoothItem, boothTitle, CommonItem } from '../../../data/boothFood';
import { StaticBottomSheet } from '../../../components/BottomSheet/variants/StaticBottomSheet';
import { ItemPreviewContent } from '../../../components/BottomSheet/innerContent/ItemPreviewContent';
import { GoBackButton } from '../../../components/common/GoBackButton';

export const Booth = () => {
  const [selectedDate, setSelectedDate] = useState<Option>(dateOptions[0]);
  const [selectedPlace, setSelectedPlace] = useState<Option>(placeOptions[0]);
  const [selectedItem, setSelectedItem] = useState<CommonItem | null>(null);

  const tempBoothData: BoothItem[] = [
    {
      id: 1,
      title: '배리어 프리존 안내',
      description: '배리어 프리존 안내',
      keywords: ['배리어', '프리존'],
      recommendCount: 323,
      type: 'booth',
    },
    {
      id: 2,
      title: '배리어 프리존 안내',
      description: '배리어 프리존 안내',
      keywords: ['배리어', '프리존'],
      recommendCount: 323,
      type: 'booth',
    },
    {
      id: 3,
      title: '배리어 프리존 안내',
      description: '배리어 프리존 안내',
      keywords: ['배리어', '프리존'],
      recommendCount: 323,
      type: 'booth',
    },
    {
      id: 4,
      title: '배리어 프리존 안내',
      description: '배리어 프리존 안내',
      keywords: ['배리어', '프리존'],
      recommendCount: 323,
      type: 'booth',
    },
    {
      id: 5,
      title: '배리어 프리존 안내',
      description: '배리어 프리존 안내',
      keywords: ['배리어', '프리존'],
      recommendCount: 323,
      type: 'booth',
    },
    {
      id: 6,
      title: '배리어 프리존 안내',
      description: '배리어 프리존 안내',
      keywords: ['배리어', '프리존'],
      recommendCount: 323,
      type: 'booth',
    },
    {
      id: 7,
      title: '배리어 프리존 안내',
      description: '배리어 프리존 안내',
      keywords: ['배리어', '프리존'],
      recommendCount: 323,
      type: 'booth',
    },
    {
      id: 8,
      title: '배리어 프리존 안내',
      description: '배리어 프리존 안내',
      keywords: ['배리어', '프리존'],
      recommendCount: 323,
      type: 'booth',
    },
    {
      id: 9,
      title: '배리어 프리존 안내',
      description: '배리어 프리존 안내',
      keywords: ['배리어', '프리존'],
      recommendCount: 323,
      type: 'booth',
    },
    {
      id: 10,
      title: '배리어 프리존 안내',
      description: '배리어 프리존 안내',
      keywords: ['배리어', '프리존'],
      recommendCount: 323,
      type: 'booth',
    },
  ];

  return (
    <BaseLayer>
      {/* 리스트 바텀시트 */}
      {!selectedItem && (
        <>
          <OptionContainer>
            <DateDropDown selectedDate={selectedDate} setSelectedDate={setSelectedDate} darkMode={false} />
            <PlaceDropDown selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
          </OptionContainer>
          <BasicBottomSheet
            title={boothTitle}
            description={boothDescription}
            data={tempBoothData}
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
  left: 10px;
  top: 20px;
  position: absolute;
`;

const GoBackButtonContainer = styled.div`
  position: absolute;
  left: 7px;
  top: 20px;
`;

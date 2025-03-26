import React from 'react';
import styled from 'styled-components';
import { StaticBottomSheet } from '../../../components/BottomSheet/StaticBottomSheet';
import { BoothDetailContent } from '../../../components/BottomSheet/BoothDetailContent';
import { BaseLayer } from '../../../components/BottomSheet/BaseLayer';
import { GoBackButton } from '../../../components/common/GoBackButton';
import { useNavigate } from 'react-router-dom';

export const BoothDetail = () => {
  const navigate = useNavigate();

  // id는 params로 가져오기
  const tempBooth = {
    id: 1,
    title: '너 내 친구가 되어라',
    keywords: ['게임&체험'],
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
          ContentComponent={BoothDetailContent}
          componentProps={{ id: tempBooth.id }}
          isBottomSheetHeader={false}
          overlapFooter={false}
        />
      </BaseLayer>
    </>
  );
};

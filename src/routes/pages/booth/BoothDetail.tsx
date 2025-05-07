import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StaticBottomSheet } from '../../../components/BottomSheet/variants/StaticBottomSheet';
import { BoothDetailContent } from '../../../components/BottomSheet/innerContent/BoothDetailContent';
import { BaseLayer } from '../../../components/BottomSheet/layout/BaseLayer';
import { GoBackButton } from '../../../components/common/GoBackButton';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { BoothDetailRawData, fetchBoothDetail } from '../../../services/apis/booth/boothDetail';
import { useHeader } from '../../../context/HeaderContext';
import { LoadingPage } from '../LoadingPage';

export const BoothDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setHideHeader } = useHeader();
  const { dayBoothNum } = useParams<{ dayBoothNum: string }>();
  const [boothDetail, setBoothDetail] = useState<BoothDetailRawData | null>(null);
  const selectedDate = location.state?.selectedDate;

  useEffect(() => {
    const getBoothDetail = async () => {
      const result = await fetchBoothDetail(selectedDate, Number(dayBoothNum));
      const booth = result?.[0];
      setBoothDetail(booth ?? null);
    };
    getBoothDetail();
  }, [dayBoothNum, selectedDate]);

  useEffect(() => {
    setHideHeader(true);
    return () => setHideHeader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!boothDetail) {
    return <LoadingPage />;
  }

  if (!boothDetail.cover) {
    return <LoadingPage />;
  }

  return (
    <>
      <BaseLayer backgroundImgSrc={boothDetail.cover}>
        <GoBackButtonContainer>
          <GoBackButton onClick={() => navigate(-1)} />
        </GoBackButtonContainer>
        <StaticBottomSheet
          size={'large'}
          ContentComponent={BoothDetailContent}
          componentProps={{ boothDetail, selectedDate }}
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

export default BoothDetail;

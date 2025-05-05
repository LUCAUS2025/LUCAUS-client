import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BaseButton } from '../../../components/common/BaseButton';
import { mediaBig, mediaSmall, mediaSmall_description, mediaSmall_title } from '../../../styles/responsive';

const Entry = () => {
  const [entryType, setEntryType] = useState<'passable' | 'barrierFree' | null>(null);
  const [focusedArea, setFocusedArea] = useState<'mainGateArea' | 'freeSquare' | '104Stairway'>('mainGateArea');

  const handleEntryType = (type: 'passable' | 'barrierFree') => {
    setEntryType((prev) => (prev === type ? null : type));
  };

  const handleFocusArea = (area: 'mainGateArea' | 'freeSquare' | '104Stairway') => {
    if (focusedArea !== area) {
      setFocusedArea(area);
      setEntryType(null); // 다른 것 선택시 입장 정책 초기화
    }
  };

  const getMapLayerCombination = () => {
    const areaMap: Record<string, string> = {
      mainGateArea: 'images/information/entryMap.webp',
      freeSquare: '',
      '104Stairway': '',
    };

    const entryLayers: Record<string, string> = {
      passable: 'images/layers/passableLayer.png',
      barrierFree: 'images/layers/barrierFreeLayer.png',
    };

    const backgroundMap = focusedArea ? areaMap[focusedArea] : 'images/information/entryMap.webp';
    const entryMapLayer = entryType ? entryLayers[entryType] : '';

    return { backgroundMap, entryMapLayer };
  };

  const { backgroundMap, entryMapLayer } = getMapLayerCombination();

  return (
    <Wrapper>
      <MapSection>
        <BackgroundMapContainer>
          <BackgroundMap src={backgroundMap} alt="지도" />
          {entryType && <EntryMapLayer src={entryMapLayer} alt="입장정책" />}
        </BackgroundMapContainer>
        <OptionBtnContainer>
          <OptionBtn onClick={() => handleEntryType('passable')}></OptionBtn>
          <OptionBtn onClick={() => handleEntryType('barrierFree')}></OptionBtn>
        </OptionBtnContainer>
      </MapSection>
      <ContentContainer>
        <TitleContainer>
          <Title>캠퍼스 내 이동 안내</Title>
          <Description>
            안전을 위해 캠퍼스 내 일부 통행 구역을 제한합니다. <br />
            통행 가능 구역을 확인하시어 안전한 이동 부탁드립니다.
          </Description>
        </TitleContainer>
        <LocationContainer>
          <LocationBtns>
            <LocationBtn active={focusedArea === 'mainGateArea'} onClick={() => handleFocusArea('mainGateArea')}>
              정문 일대
            </LocationBtn>
            <LocationBtn active={focusedArea === 'freeSquare'} onClick={() => handleFocusArea('freeSquare')}>
              해방광장
            </LocationBtn>
            <LocationBtn active={focusedArea === '104Stairway'} onClick={() => handleFocusArea('104Stairway')}>
              104관 계단
            </LocationBtn>
          </LocationBtns>
        </LocationContainer>
      </ContentContainer>
    </Wrapper>
  );
};

export default Entry;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MapSection = styled.div`
  position: relative;
  height: 62vh;
  width: 100%;

  ${mediaSmall`
    height: 58vh;
  `}

  ${mediaBig`
    height: 64vh;
  `}
`;

const BackgroundMapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: visible;
  overflow-x: auto;
  overflow-y: hidden;
`;

const BackgroundMap = styled.img`
  height: 100%;
  width: auto;
  object-position: center;
  overflow: visible;
  z-index: 1;
  position: absolute;
`;

const EntryMapLayer = styled.img`
  height: 100%;
  width: auto;
  object-position: center;
  overflow: visible;
  z-index: 2;
  position: absolute;
  opacity: 0.5;
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
  //justify-content: center;
`;

const LocationBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const LocationBtn = styled(BaseButton)<{ active: boolean }>`
  border-color: ${({ active }) => (active ? '#1447e6' : '#d1d5dc')};
  color: ${({ active }) => (active ? '#1447e6' : '#364153')};
  white-space: nowrap;

  ${mediaSmall_description}
`;

const OptionBtnContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 14px;
  bottom: 25px;
  right: 21px;
`;

const OptionBtn = styled.div`
  z-index: 3;
  width: 48px;
  height: 48px;
  background-color: #a5a5a5;
  border-radius: 50%;
`;

const ContentContainer = styled.div`
  padding: 0px 16px 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 20px;
  line-height: 125%;
  letter-spacing: -0.26px;
  color: #030712;

  ${mediaSmall_title}
`;

const Description = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.26px;
  color: #6a7282;

  ${mediaSmall_description}
`;

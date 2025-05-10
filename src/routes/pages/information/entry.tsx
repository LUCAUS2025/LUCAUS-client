import React, { useState } from 'react';
import styled from 'styled-components';
import { BaseButton } from '../../../components/common/BaseButton';
import { mediaBig, mediaSmall, mediaSmall_description, mediaSmall_title } from '../../../styles/responsive';

const Entry = () => {
  const [entryType, setEntryType] = useState<'passable' | 'barrierFree'>('passable');
  const [focusedArea, setFocusedArea] = useState<'mainGateArea' | 'freeSquare' | '104Stairway'>('mainGateArea');

  const handleEntryType = (type: 'passable' | 'barrierFree') => {
    if (entryType !== type) {
      setEntryType(type);
    }
  };

  const handleFocusArea = (area: 'mainGateArea' | 'freeSquare' | '104Stairway') => {
    if (focusedArea !== area) {
      setFocusedArea(area);
    }
  };

  const getMapLayerCombination = () => {
    // 지도 배경 이미지 매핑
    const areaMap: Record<string, string> = {
      mainGateArea: 'images/information/frontEntry.webp', // 정문일대 지도
      freeSquare: 'images/information/freeSquare.webp', // 해방광장 지도
      '104Stairway': 'images/information/104Stairway.webp', // 104관 계단 지도
    };

    // 지도 레이어 이미지 매핑 (entryType + focusedArea 조합)
    const entryLayers: Record<string, Record<string, string>> = {
      passable: {
        mainGateArea: 'images/layers/passable_mainGate.png', // 정문일대 통행정책
        freeSquare: 'images/layers/passable_freeSquare.png', // 해방광장 통행정책
        '104Stairway': 'images/layers/passable_104Stairway.png', // 104관 계단 통행정책
      },
      barrierFree: {
        mainGateArea: 'images/layers/barrierFree_mainGate.png', // 정문일대 배리어프리
        freeSquare: 'images/layers/barrierFree_freeSquare.png', // 해방광장 배리어프리
        '104Stairway': 'images/layers/barrierFree_104Stairway.png', // 104관 계단 배리어프리
      },
    };

    const legandImages: Record<string, string> = {
      passable: 'images/legends/passableLegend.png', // 통행정책 범례
      barrierFree: 'images/legends/barrierFreeLegend.png', // 배리어프리 범례
    };

    const backgroundMap = areaMap[focusedArea];
    const entryMapLayer = entryLayers[entryType][focusedArea];
    const legandImage = legandImages[entryType];

    return { backgroundMap, entryMapLayer, legandImage };
  };

  const { backgroundMap, entryMapLayer, legandImage } = getMapLayerCombination();

  return (
    <Wrapper>
      <MapSection>
        <BackgroundMapContainer>
          <BackgroundMap src={backgroundMap} alt="지도" />
          <LegandImg src={legandImage} alt="범례" />
          <EntryMapLayer src={entryMapLayer} alt="입장정책" />
        </BackgroundMapContainer>
        <OptionBtnContainer>
          <OptionBtn active={entryType === 'passable'} onClick={() => handleEntryType('passable')}>
            <OptionBtnIcon>🚶🏻‍♂️</OptionBtnIcon>
            <OptionBtnText>통행정책</OptionBtnText>
          </OptionBtn>
          <OptionBtn active={entryType === 'barrierFree'} onClick={() => handleEntryType('barrierFree')}>
            <OptionBtnIcon>👨🏻‍🦽</OptionBtnIcon>
            <OptionBtnText>배리어프리</OptionBtnText>
          </OptionBtn>
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
  width: 100%;
  overflow: hidden;
`;

const BackgroundMapContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const BackgroundMap = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
  z-index: 1;
  position: relative;
`;

const LegandImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
  z-index: 1;
  top: 0;
  left: 0;
`;

const EntryMapLayer = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
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
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 14px;
  top: 370px;
  right: 21px;
  z-index: 4;

  ${mediaSmall`
    top: 350px;
  `}
  ${mediaBig`
    top: 395px;
  `}
`;

const OptionBtn = styled.div<{ active: boolean }>`
  z-index: 3;
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0px 12px 0px #00000033;
  border: 1.5px solid #d1d5dc;
  background-color: #fafafa;
  border-radius: 4px;

  border-color: ${({ active }) => (active ? '#1447e6' : '#d1d5dc')};
`;

const OptionBtnIcon = styled.div`
  font-size: 28px;
`;

const OptionBtnText = styled.div`
  font-size: 10px;
  color: #364153;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  letter-spacing: -0.26px;
  text-align: center;
  vertical-align: middle;
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

import React, { useState } from 'react';
import styled from 'styled-components';
import { BaseButton } from '../../../components/common/BaseButton';
import { mediaBig, mediaSmall, mediaSmall_description, mediaSmall_title } from '../../../styles/responsive';

const Entry = () => {
  const [focusedArea, setFocusedArea] = useState<'mainGateArea' | 'peperoSquare' | '104Stairway'>('mainGateArea');
  const [entryType, setEntryType] = useState<'passable' | 'barrierFree'>('passable');

  const handleFocusArea = (area: 'mainGateArea' | 'peperoSquare' | '104Stairway') => {
    if (focusedArea !== area) {
      setFocusedArea(area);
    }
  };

  const handleEntryType = (type: 'passable' | 'barrierFree') => {
    if (entryType !== type) {
      setEntryType(type);
    }
  };

  const getMapLayerCombination = () => {
    const imageMap: Record<
      'passable' | 'barrierFree',
      Record<'mainGateArea' | 'peperoSquare' | '104Stairway', string>
    > = {
      passable: {
        mainGateArea: 'images/information/entry/frontEntry-passable.webp',
        peperoSquare: 'images/information/entry/peperoSquare-passable.webp',
        '104Stairway': 'images/information/entry/104Stairway-passable.webp',
      },
      barrierFree: {
        mainGateArea: 'images/information/entry/frontEntry-barrierFree.webp',
        peperoSquare: 'images/information/entry/peperoSquare-barrierFree.webp',
        '104Stairway': 'images/information/entry/104Stairway-barrierFree.webp',
      },
    };

    const backgroundMap = imageMap[entryType][focusedArea];
    return { backgroundMap };
  };

  const { backgroundMap } = getMapLayerCombination();

  return (
    <Wrapper>
      <MapSection>
        <BackgroundMapContainer>
          <BackgroundMap src={backgroundMap} alt="지도" />
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
            안전하고 원활한 축제를 위해 LUCAUS 본무대 기간 동안 캠퍼스 내 일부 구역을 통제할 예정입니다. <br />
            통행 가능 구역을 확인하시어 안전한 이동 부탁드립니다.
          </Description>
          <Description>*당일 현장 상황에 따라 변동될 수 있습니다.</Description>
        </TitleContainer>
        <LocationContainer>
          <LocationBtns>
            <LocationBtn active={focusedArea === 'mainGateArea'} onClick={() => handleFocusArea('mainGateArea')}>
              정문 일대
            </LocationBtn>
            <LocationBtn active={focusedArea === 'peperoSquare'} onClick={() => handleFocusArea('peperoSquare')}>
              빼빼로 광장
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
  gap: 15px;
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
  height: 60vh;
  object-fit: cover;
  object-position: center;
  z-index: 1;
  position: relative;
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
  line-height: 150%;
  letter-spacing: -0.26px;
  text-align: center;
`;

const ContentContainer = styled.div`
  padding: 0px 16px 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;
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

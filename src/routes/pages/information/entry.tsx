import React, { useState } from 'react';
import styled from 'styled-components';
import { BaseButton } from '../../../components/common/BaseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

const Entry = () => {
  const [entryType, setEntryType] = useState<string | null>(null); // 입장 정책 -  통행 가능 / 통행 불가능 / 무대관람석 표시
  const [magnifiedType, setMagnifiedType] = useState<string | null>(null); // 확대 여부 - 해방광장(freeSquare) / 104관 계단(104Stairway)

  const handleEntryType = (clickedEntryType: string) => {
    // 같은 것 한번 더 누르면 layer 지워지도록
    if (entryType === clickedEntryType) {
      setEntryType(null);
    } else {
      setEntryType(clickedEntryType);
    }
  };

  const handleMagnified = (clickMagnifiedType: string) => {
    if (magnifiedType === clickMagnifiedType) {
      setMagnifiedType(null);
    } else {
      setMagnifiedType(clickMagnifiedType);
      setEntryType(null); // 돋보기 시 현재 입장 정책 지움
    }
  };

  // 배경 / 확대 조합에 따라 지도 배경과 입장정책 layer src 넣기!!
  const getMapLayerCombination = () => {
    if (!magnifiedType) {
      // magnifiedType 없을 때
      if (entryType === 'passable') {
        return {
          backgroundMap: 'images/information/entryMap.webp', // 기본 배경
          entryMapLayer: 'images/freeSquareMap.png', // passable일 때
        };
      } else if (entryType === 'impassable') {
        return {
          backgroundMap: 'images/information/entryMap.webp', // 기본 배경
          entryMapLayer: '', // impassable일 때는 EntryMapLayer 없음
        };
      } else if (entryType === 'seatArea') {
        return {
          backgroundMap: 'images/information/entryMap.webp', // 기본 배경
          entryMapLayer: '', // 무대 관람석일 때는 EntryMapLayer 없음
        };
      }
    } else {
      // magnifiedType 있을 때
      if (magnifiedType === 'freeSquare') {
        if (entryType === null) {
          return {
            backgroundMap: 'images/freeSquareBackground.png', // 확대시 해방광장 배경
            entryMapLayer: '',
          };
        } else if (entryType === 'passable') {
          return {
            backgroundMap: 'images/freeSquareBackground.png', // 확대시 해방광장 배경
            entryMapLayer: '',
          };
        } else if (entryType === 'impassable') {
          return {
            backgroundMap: 'images/freeSquareBackground.png', // 확대시 해방광장 배경
            entryMapLayer: '',
          };
        } else if (entryType === 'seatArea') {
          return {
            backgroundMap: 'images/freeSquareBackground.png', // 확대시 해방광장 배경
            entryMapLayer: '',
          };
        }
      } else if (magnifiedType === '104Stairway') {
        if (entryType === null) {
          return {
            backgroundMap: 'images/104StairwayBackground.png', // 확대시 104관 계단 배경
            entryMapLayer: '',
          };
        } else if (entryType === 'passable') {
          return {
            backgroundMap: 'images/104StairwayBackground.png', // 확대시 104관 계단 배경
            entryMapLayer: '',
          };
        } else if (entryType === 'impassable') {
          return {
            backgroundMap: 'images/104StairwayBackground.png', // 확대시 104관 계단 배경
            entryMapLayer: '',
          };
        } else if (entryType === 'seatArea') {
          return {
            backgroundMap: 'images/104StairwayBackground.png', // 확대시 104관 계단 배경
            entryMapLayer: '',
          };
        }
      }
    }
    // 기본값
    return {
      backgroundMap: 'images/information/entryMap.webp',
      entryMapLayer: '',
    };
  };

  const { backgroundMap, entryMapLayer } = getMapLayerCombination() || { backgroundMap: '', entryMapLayer: '' };

  return (
    <>
      <Wrapper>
        <MapSection>
          <BackgroundMapContainer>
            <BackgroundMap src={backgroundMap} alt="지도" />
            {entryType && <EntryMapLayer src={entryMapLayer} alt="입장정책" />}
          </BackgroundMapContainer>
          <OptionBtnContainer>
            <OptionBtn onClick={() => handleEntryType('passable')}></OptionBtn>
            <OptionBtn onClick={() => handleEntryType('impassable')}></OptionBtn>
            <OptionBtn onClick={() => handleEntryType('seatArea')}></OptionBtn>
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
            <LocationLabel>정문 일대 약도</LocationLabel>
            <LocationBtns>
              <MagnifierIcon active={magnifiedType}>
                <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
              </MagnifierIcon>
              <LocationBtn active={magnifiedType === 'freeSquare'} onClick={() => handleMagnified('freeSquare')}>
                해방광장
              </LocationBtn>
              <LocationBtn active={magnifiedType === '104Stairway'} onClick={() => handleMagnified('104Stairway')}>
                104관 계단
              </LocationBtn>
            </LocationBtns>
          </LocationContainer>
        </ContentContainer>
      </Wrapper>
    </>
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
  height: 60vh;
  width: 100%;
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
  justify-content: center;
`;

const LocationLabel = styled(BaseButton)`
  border: none;
`;

const LocationBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const MagnifierIcon = styled.div<{ active: string | null }>`
  border-right: 1px solid #d1d5dc;
  padding: 2px 11px 2px 11px;
  color: ${({ active }) => (active ? '#1447e6' : '#d1d5dc')};
`;

const LocationBtn = styled(BaseButton)<{ active: boolean }>`
  border-color: ${({ active }) => (active ? '#1447e6' : '#d1d5dc')};
  color: ${({ active }) => (active ? '#1447e6' : '#364153')};
  white-space: nowrap;
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
  height: 35vh - 60px; // footer 길이 만큼 빼줌
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
`;

const Description = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.26px;
  color: #6a7282;
`;

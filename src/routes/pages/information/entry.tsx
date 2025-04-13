import React from 'react';
import styled from 'styled-components';
import { BaseButton } from '../../../components/common/BaseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'; // Import the icon

const Entry = () => {
  return (
    <>
      <Wrapper>
        <MapSection>
          <BackgroundMapContainer>
            <BackgroundMap src="images/information/entryMap.webp" />
          </BackgroundMapContainer>
          <OptionBtnContainer>
            <OptionBtn></OptionBtn>
            <OptionBtn></OptionBtn>
            <OptionBtn></OptionBtn>
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
              <MagnifierIcon>
                <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
              </MagnifierIcon>
              <LocationBtn>해방광장</LocationBtn>
              <LocationBtn>104관 계단</LocationBtn>
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
  gap: 23px;
`;

const MapSection = styled.div`
  position: relative;
  height: 60vh;
  width: 100%;
`;

const BackgroundMapContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: visible;
  overflow-x: auto;
  overflow-y: hidden;
`;

const BackgroundMap = styled.img`
  height: 100%;
  width: auto;
  object-position: center;
  overflow: visible;
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
  justify-content: space-between;
  gap: 10px;
`;

const MagnifierIcon = styled.div`
  border-right: 1px solid #d1d5dc;
  padding: 2px 11px 2px 11px;
  color: #d1d5dc;
`;

const LocationBtn = styled(BaseButton)``;

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
  padding: 0px 16px 0px 16px;
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

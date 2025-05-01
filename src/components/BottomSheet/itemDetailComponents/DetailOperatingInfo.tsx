import React from 'react';
import styled, { css } from 'styled-components';
import { keywordBaseStyle } from '../../../styles/keyword';
import { dateOptions } from '../../../data/options';

interface DetailOperatingInfoProps {
  type: 'booth' | 'foodTruck';
  selectedDate: number;
  location: string;
}

export const DetailOperatingInfo: React.FC<DetailOperatingInfoProps> = ({ type, selectedDate, location }) => {
  return (
    <Wrapper>
      <Title>부스 운영</Title>
      <InfoContainer>
        <InfoItem>
          <LabelContainer>
            <LabelIcon src="/images/common/dateDark.webp"></LabelIcon>
            <InfoLabel>운영 일자</InfoLabel>
          </LabelContainer>
          <DateContainer>
            <Date active={true}>19</Date>
            <Date active={true}>20</Date>
            <Date active={false}>21</Date>
            <Date active={false}>22</Date>
            <Date active={false}>23</Date>
          </DateContainer>
        </InfoItem>
        <InfoItem>
          <LabelContainer>
            <LabelIcon src="/images/common/clockDark.webp"></LabelIcon>
            <InfoLabel>운영 시간</InfoLabel>
          </LabelContainer>
          {type === 'booth' && selectedDate !== undefined && dateOptions[2] ? (
            Number(selectedDate) <= Number(dateOptions[2].value) ? (
              <InfoText>10:00 ~ 18:00</InfoText>
            ) : (
              <InfoText>10:00 ~ 14:00</InfoText>
            )
          ) : null}
          {type === 'foodTruck' && <InfoText>10:00 ~ 19:00 (재료 소진 시 조기 마감)</InfoText>}
        </InfoItem>
        <InfoItem>
          <LabelContainer>
            <LabelIcon src="/images/common/locationDark.webp"></LabelIcon>
            <InfoLabel>부스 위치</InfoLabel>
          </LabelContainer>
          <InfoText>{location}</InfoText>
        </InfoItem>
      </InfoContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 8px;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 125%;
  letter-spacing: -0.26px;
  color: #030712;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;
const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
const InfoLabel = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.26px;
`;
const LabelIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
const Date = styled.div<{ active: boolean }>`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.26px;
  text-align: center;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;

  ${({ active }) =>
    active
      ? css`
          font-size: 14px !important;
          ${keywordBaseStyle}
        `
      : css`
          color: #09090b;
        `}
`;
const InfoText = styled.div`
  color: #364153;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.26px;
`;

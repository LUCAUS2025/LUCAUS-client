import React from 'react';
import styled, { css } from 'styled-components';
import { keywordBaseStyle } from '../../../styles/keyword';
import { dateOptions } from '../../../data/options';
import { mediaSmall, mediaSmall_description, mediaSmall_subTitle } from '../../../styles/responsive';

interface DetailOperatingInfoProps {
  type: 'booth' | 'foodTruck';
  selectedDate: number;
  location: string;
  opDateList: number[];
}

export const DetailOperatingInfo: React.FC<DetailOperatingInfoProps> = ({
  type,
  selectedDate,
  location,
  opDateList,
}) => {
  return (
    <Wrapper>
      <InfoContainer>
        <InfoItem>
          <LabelContainer>
            <LabelIcon src="/images/common/dateDark.webp"></LabelIcon>
            <InfoLabel>운영 일자</InfoLabel>
          </LabelContainer>
          <DateContainer>
            <Date active={opDateList?.includes(dateOptions[0].value as number)}>{dateOptions[0].value}</Date>
            <Date active={opDateList?.includes(dateOptions[1].value as number)}>{dateOptions[1].value}</Date>
            <Date active={opDateList?.includes(dateOptions[2].value as number)}>{dateOptions[2].value}</Date>
            <Date active={opDateList?.includes(dateOptions[3].value as number)}>{dateOptions[3].value}</Date>
            <Date active={opDateList?.includes(dateOptions[4].value as number)}>{dateOptions[4].value}</Date>
          </DateContainer>
        </InfoItem>

        <InfoItem>
          <LabelContainer>
            <LabelIcon src="/images/common/clockDark.webp"></LabelIcon>
            <InfoLabel>운영 시간</InfoLabel>
          </LabelContainer>
          <TimeContainer>
            <InfoTextWrapper>
              {type === 'booth' && <InfoText>10:00 ~ 17:00</InfoText>}
              {type === 'foodTruck' && <InfoText>10:00 ~ 19:00 (재료 소진 시 마감)</InfoText>}
            </InfoTextWrapper>
            <TodayTime>{selectedDate}일 기준</TodayTime>
          </TimeContainer>
        </InfoItem>

        <InfoItem>
          <LabelContainer>
            <LabelIcon src="/images/common/locationDark.webp"></LabelIcon>
            {type === 'booth' && <InfoLabel>부스 위치</InfoLabel>}
            {type === 'foodTruck' && <InfoLabel>트럭 위치</InfoLabel>}
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

  ${mediaSmall_subTitle}
`;

const LabelIcon = styled.img`
  width: 20px;
  height: 20px;

  ${mediaSmall`
    width: 18px;
    height: 18px;
  `}
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

  ${mediaSmall_description}

  ${({ active }) =>
    active
      ? css`
          font-size: 14px;
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
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaSmall_description}
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`;

const InfoTextWrapper = styled.div`
  align-items: center;
`;

const TodayTime = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.26px;
  color: #6a7282;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

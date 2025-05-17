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
        {/* 운영 일자 */}
        <InfoItem>
          <LabelContainer>
            <LabelIcon src="/images/common/dateDark.webp" />
            <InfoLabel>운영 일자</InfoLabel>
          </LabelContainer>
          <DateContainer>
            {dateOptions.map(({ value }) => (
              <Date key={value} active={opDateList?.includes(value as number)}>
                {value}
              </Date>
            ))}
          </DateContainer>
        </InfoItem>

        {/* 운영 시간 - booth와 foodTruck 분기 */}
        {type === 'booth' ? (
          <BoothTimeItem>
            <LabelContainer>
              <LabelIcon src="/images/common/clockDark.webp" />
              <InfoLabel>운영 시간</InfoLabel>
            </LabelContainer>
            <BoothTimeRow>
              <TimeText>10:00 ~ 18:00</TimeText>
            </BoothTimeRow>
          </BoothTimeItem>
        ) : (
          <FoodTruckTimeItem>
            <LabelContainer>
              <LabelIcon src="/images/common/clockDark.webp" />
              <InfoLabel>운영 시간</InfoLabel>
            </LabelContainer>
            <FoodTruckTimeWrapper>
              <FoodTruckTimeRow>
                <FoodTruckTimeText>10:00 ~ 19:00</FoodTruckTimeText>
              </FoodTruckTimeRow>
              <TimeSubText>*재료 소진 시 조기 마감</TimeSubText>
            </FoodTruckTimeWrapper>
          </FoodTruckTimeItem>
        )}

        {/* 부스 위치 */}
        <InfoItem>
          <LabelContainer>
            <LabelIcon src="/images/common/locationDark.webp" />
            <InfoLabel>{type === 'booth' ? '부스 위치' : '트럭 위치'}</InfoLabel>
          </LabelContainer>
          <BoothTimeRow>
            <TimeText>{location}</TimeText>
            {type === 'booth' && <TodayTime>{selectedDate}일 기준</TodayTime>}
          </BoothTimeRow>
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

const BoothTimeItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const FoodTruckTimeItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  min-width: 90px;
  align-items: center;
`;

const InfoLabel = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.26px;
  ${mediaSmall_subTitle}
  color: #364153;
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
  letter-spacing: -0.26px;
  line-height: 1;
  text-align: center;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  padding: 10px;
  text-align: center;

  ${mediaSmall_description}

  ${({ active }) =>
    active
      ? css`
          color: #1447e6;
          background-color: #e7f1ff;
          border-radius: 50%;
        `
      : css`
          color: #09090b;
        `}
`;

const BoothTimeRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const FoodTruckTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4px;
`;

const FoodTruckTimeRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TimeText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #364153;
  letter-spacing: -0.26px;

  ${mediaSmall_description}
`;

const FoodTruckTimeText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #364153;
  letter-spacing: -0.26px;
  padding-top: 2px;

  ${mediaSmall_description};
`;

const TodayTime = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #6a7282;
  white-space: nowrap;
  letter-spacing: -0.26px;
  ${mediaSmall`
    font-size: 11px;
  `}
`;

const TimeSubText = styled.div`
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #6a7282;
  letter-spacing: -0.26px;
  ${mediaSmall`
    font-size: 11px;
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
  align-self: center;
  ${mediaSmall_description}
`;

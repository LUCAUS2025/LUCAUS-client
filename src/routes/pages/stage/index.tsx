import React, { useState } from 'react';
import { Thumbnail } from '../../../components/home/thumbnail';
import { LineUp } from '../../../components/stage/lineUp';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DateDropDown } from '../../../components/common/DropDown/DateDropDown';
import { dateOptions, Option } from '../../../data/options';

const stageOptions = ['버스킹', '응원제', '본무대', '아티스트'];

export const Stage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Option>(dateOptions[0]);
  const [selectedStage, setSelectedStage] = useState(stageOptions[0]); // 기본값: "버스킹"
  const [isStageOptionActive, setIsStageOptionActive] = useState(false);

  const handleStageSelect = (option: string) => {
    setSelectedStage(option);
    setIsStageOptionActive(false);
  };

  return (
    <>
      <DropDownContainer>
        <DateDropDown selectedDate={selectedDate} setSelectedDate={setSelectedDate} darkMode={false} />
        <DropDownContainer>
          {stageOptions.map((option) => (
            <OptionItem key={option} onClick={() => handleStageSelect(option)}>
              {option}
            </OptionItem>
          ))}
        </DropDownContainer>
      </DropDownContainer>
      <img src="./images/home/stage/ticket.png" onClick={() => navigate('/guide/ticketing')} style={{ width: '80%' }} />
      <Title>청룡가요제</Title>
      <Subtitle>숨겨진 보컬 천재들의 뜨거운 강연을 만나보세요.</Subtitle>
      <Thumbnail />
      <Title>무대 기획전</Title>
      <Subtitle>축제 기획단에서 야심차게 준비했다!</Subtitle>
      <Title>본무대 라인업</Title>
      <Subtitle>이곳에서만 볼 수 있는 특별한 무대! 함께 즐겨요.</Subtitle>
      <LineUp />
      <Title>아티스트 라인업</Title>
      <Subtitle>올해 축제를 빛낼 아티스트를 지금 바로 확인해보세요.</Subtitle>
      <LineUp />
    </>
  );
};

export default Stage;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

export const Subtitle = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
`;

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  gap: 0.5rem;
`;

const OptionItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.375rem;
  color: #364153;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  border: 1px solid #d1d5dc;
  box-shadow: 0px 0px 12px 0px #00000014;

  &:hover {
    background-color: #f3f4f6;
  }
`;

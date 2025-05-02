import React, { useState, useRef } from 'react';
import { Thumbnail } from '../../../components/home/thumbnail';
import { LineUp } from '../../../components/stage/lineUp';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DateDropDown } from '../../../components/common/DropDown/DateDropDown';
import { dateOptions, Option } from '../../../data/options';

const stageOptions = ['버스킹', '응원제', '본무대', '아티스트'];
export const stagedateOptions = ['13일', '14일', '22일', '23일'];
// stagedateOptions를 Option 타입으로 변환
const customDateOptions: Option[] = stagedateOptions.map((date) => ({
  label: date,
  value: date,
}));

export const Stage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Option>(dateOptions[0]);
  const [selectedStage, setSelectedStage] = useState(stageOptions[0]); // 기본값: "버스킹"

  // 각 섹션에 대한 ref 생성
  const buskingRef = useRef<HTMLDivElement>(null);
  const cheeringRef = useRef<HTMLDivElement>(null);
  const mainStageRef = useRef<HTMLDivElement>(null);
  const artistRef = useRef<HTMLDivElement>(null);

  const handleStageSelect = (option: string) => {
    setSelectedStage(option);

    // 선택된 옵션에 따라 해당 섹션으로 스크롤
    const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
      버스킹: buskingRef,
      응원제: cheeringRef,
      본무대: mainStageRef,
      아티스트: artistRef,
    };

    const targetRef = sectionRefs[option];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <DropDownContainer>
        <DateDropDown
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          darkMode={false}
          customData={customDateOptions} // customData를 stagedateOptions로 설정
        />
        <DropDownContainer style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {stageOptions.map((option) => (
            <OptionItem key={option} selected={selectedStage === option} onClick={() => handleStageSelect(option)}>
              {option}
            </OptionItem>
          ))}
        </DropDownContainer>
      </DropDownContainer>
      <img
        src="./images/home/stage/ticket.png"
        onClick={() => navigate('/guide/ticketing')}
        style={{ width: '80%' }}
        alt="티켓 안내"
      />
      <div ref={buskingRef}>
        <Title>버스킹</Title>
      </div>
      <Subtitle>숨겨진 보컬 천재들의 뜨거운 강연을 만나보세요.</Subtitle>
      <Thumbnail />

      <div ref={cheeringRef}>
        <Title>응원제</Title>
      </div>
      <Subtitle>축제 기획단에서 야심차게 준비했다!</Subtitle>

      <div ref={mainStageRef}>
        <Title>본무대 라인업</Title>
      </div>
      <Subtitle>이곳에서만 볼 수 있는 특별한 무대! 함께 즐겨요.</Subtitle>
      <LineUp />

      <div ref={artistRef}>
        <Title>아티스트 라인업</Title>
      </div>
      <Subtitle>올해 축제를 빛낼 아티스트를 지금 바로 확인해보세요.</Subtitle>
      <LineUp />
    </>
  );
};

export default Stage;

// 스타일 컴포넌트
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

const OptionItem = styled.div<{ selected: boolean }>`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.375rem;
  color: ${({ selected }) => (selected ? '#1447E6' : '#364153')};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  border: 1px solid ${({ selected }) => (selected ? '#1447E6' : '#D1D5DC')};
  box-shadow: 0px 0px 12px 0px #00000014;
  font-weight: 400;
  &:hover {
    background-color: #f3f4f6;
  }
`;

import React, { useState, useRef, useEffect } from 'react';
import { Thumbnail } from '../../../components/home/thumbnail';
import { LineUp } from '../../../components/stage/lineUp';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DateDropDown } from '../../../components/common/DropDown/DateDropDown';
import { Option } from '../../../data/options';
import Footer from '../../../components/home/Footer';
import ArtistlineUp from '../../../components/stage/ArtistlineUp';

const stagedateOptions = ['21일', '22일', '23일'];

const customDateOptions: Option[] = stagedateOptions.map((date) => ({
  label: date,
  value: date,
}));

const stageOptionsByDate: { [key: string]: string[] } = {
  // '13일': ['버스킹'],
  // '14일': ['버스킹'],
  '21일': ['본무대'],
  '22일': ['버스킹', '무대기획전', '본무대', '아티스트'],
  '23일': ['응원제', '본무대', '아티스트'],
};

export const Stage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Option>(customDateOptions[0]);
  const [selectedStage, setSelectedStage] = useState(stageOptionsByDate[customDateOptions[0].value][0]);

  const buskingRef = useRef<HTMLDivElement>(null);
  const cheeringRef = useRef<HTMLDivElement>(null);
  const mainStageRef = useRef<HTMLDivElement>(null);
  const artistRef = useRef<HTMLDivElement>(null);
  const mukiRef = useRef<HTMLDivElement>(null);

  const availableStages = stageOptionsByDate[selectedDate.value] || [];

  useEffect(() => {
    if (!availableStages.includes(selectedStage)) {
      setSelectedStage(availableStages[0]);
    }
  }, [selectedDate]);

  const handleStageSelect = (option: string) => {
    setSelectedStage(option);
    const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
      버스킹: buskingRef,
      응원제: cheeringRef,
      본무대: mainStageRef,
      아티스트: artistRef,
      무대기획전: mukiRef,
    };

    const targetRef = sectionRefs[option];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isSelectedDate = (date: string) => selectedDate.value === date;

  return (
    <>
      <DropDownContainer>
        <DateDropDown
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          darkMode={false}
          customData={customDateOptions}
        />
        <OptionItemContainer style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {availableStages.map((option) => (
            <OptionItem key={option} selected={selectedStage === option} onClick={() => handleStageSelect(option)}>
              {option}
            </OptionItem>
          ))}
        </OptionItemContainer>
      </DropDownContainer>

      <Container>
        <img
          src="/images/home/stage/ticket.png"
          onClick={() => navigate('/guide/ticketing')}
          style={{ width: '100%' }}
          alt="티켓 안내"
        />

        {/* 버스킹 */}
        {(isSelectedDate('13일') || isSelectedDate('14일')) && (
          <div ref={buskingRef}>
            <Title>버스킹</Title>
            <Subtitle>숨겨진 보컬 천재들의 뜨거운 강연을 만나보세요.</Subtitle>
            <Thumbnail />
          </div>
        )}

        {isSelectedDate('22일') && (
          <div ref={buskingRef}>
            <Title>청룡가요제</Title>
            <Subtitle>좌우로 넘겨보며 청룡가요제를 즐겨보세요!</Subtitle>
            <Thumbnail />
          </div>
        )}

        {/* 무대기획전 */}
        {isSelectedDate('22일') && (
          <div ref={mukiRef}>
            <Title>무대기획전</Title>
            <img
              src="/images/home/stage/mudaeki.png"
              alt="무대기획전 포스터"
              style={{ width: '100%', borderRadius: '12px' }}
            />
          </div>
        )}

        {/* 응원제 */}
        {isSelectedDate('23일') && (
          <div ref={cheeringRef}>
            <Title>응원제</Title>
            <img
              src="/images/home/stage/ticket.png"
              alt="응원제 포스터"
              style={{ width: '100%', borderRadius: '12px' }}
            />
          </div>
        )}

        {/* 본무대 */}
        {(isSelectedDate('22일') || isSelectedDate('23일')) && (
          <div ref={mainStageRef}>
            <Title>본무대 라인업</Title>
            <Subtitle>이곳에서만 볼 수 있는 특별한 무대! 함께 즐겨요.</Subtitle>
            <LineUp />
          </div>
        )}

        {/* 아티스트 */}
        {(isSelectedDate('22일') || isSelectedDate('23일')) && (
          <div ref={artistRef}>
            <Title>아티스트 라인업</Title>
            <Subtitle>올해 축제를 빛낼 아티스트를 지금 바로 확인해보세요.</Subtitle>
            <ArtistlineUp />
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Stage;

// 스타일 컴포넌트
export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;

export const Subtitle = styled.div`
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 24px;
  margin-top: 0.5rem;
`;

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  width: 100%;
  background-color: #fafafa;
  position: fixed;
  height: 40px;
`;

const OptionItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  overflow-x: auto;
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

const Container = styled.div`
  padding: 64px 16px 30px 16px;
  display: flex;
  flex-direction: column;
  align-items: justify-content;
  min-height: 63vh;
`;

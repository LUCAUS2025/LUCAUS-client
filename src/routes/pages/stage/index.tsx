import React, { useState, useEffect, useRef } from 'react';
import { Thumbnail } from '../../../components/home/thumbnail';
import { LineUp } from '../../../components/stage/lineUp';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DateDropDown } from '../../../components/common/DropDown/DateDropDown';
import { Option } from '../../../data/options';
import Footer from '../../../components/home/Footer';

const stagedateOptions = ['21일', '22일', '23일'];

const customDateOptions: Option[] = stagedateOptions.map((date) => ({
  label: date,
  value: date,
}));

const stageOptionsByDate: { [key: string]: string[] } = {
  '21일': ['무대기획전', '아티스트-21일'],
  '22일': ['청룡가요제', '학생무대', '아티스트-22일'],
  '23일': ['응원한마당', '학생무대', '아티스트-23일'],
};

export const Stage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Option>(customDateOptions[0]);
  const [selectedStage, setSelectedStage] = useState(stageOptionsByDate[customDateOptions[0].value][0]);
  const disableObserverRef = useRef(false); // 👈 observer 감지 중단 flag

  const availableStages = stageOptionsByDate[selectedDate.value] || [];

  useEffect(() => {
    setSelectedStage(availableStages[0]);
    window.scrollTo(0, 0); // 날짜 변경 시 스크롤 최상단 이동
  }, [selectedDate]);

  const handleStageSelect = (option: string) => {
    disableObserverRef.current = true; // 감지 일시 중단
    setSelectedStage(option);

    setTimeout(() => {
      const target = document.querySelector(`[data-stage="${option}"]`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);

    setTimeout(() => {
      disableObserverRef.current = false; // 감지 재활성화
    }, 500);
  };

  const isSelectedDate = (date: string) => selectedDate.value === date;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (disableObserverRef.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const topVisible = visible[0].target as HTMLElement;
          const stage = topVisible.dataset.stage;

          // stage는 정확히 availableStages에 포함된 값만 허용
          if (stage && availableStages.includes(stage)) {
            setSelectedStage(stage);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      },
    );

    const elements = availableStages
      .map((stage) => document.querySelector(`[data-stage="${stage}"]`))
      .filter(Boolean) as HTMLElement[];

    // 옵저버는 학생무대, 아티스트 등 상위 블록만 감지
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selectedDate, availableStages]);

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
              {option.replace(/-.*$/, '')}
            </OptionItem>
          ))}
        </OptionItemContainer>
      </DropDownContainer>

      <Container>
        <img
          src="/images/home/stage/ticket.webp"
          onClick={() => navigate('/guide/ticketing')}
          style={{ width: '100%', cursor: 'pointer' }}
          alt="티켓 안내"
        />

        {isSelectedDate('21일') && (
          <div id="무대기획전" data-stage="무대기획전">
            <Title>무대기획전</Title>
            <Subtitle>축제 기획단에서 야심차게 준비했다!</Subtitle>
            <img
              src="/images/home/stage/muki/21.webp"
              alt="무대기획전 포스터"
              style={{ width: '100%', borderRadius: '12px' }}
            />
          </div>
        )}

        {isSelectedDate('22일') && (
          <div id="청룡가요제" data-stage="청룡가요제">
            <Title>청룡가요제</Title>
            <Subtitle>숨겨진 보컬 천재들의 뜨거운 경연을 만나보세요.</Subtitle>
            <Thumbnail
              artistImages={[
                '/images/home/stage/dragon/새벽.webp',
                '/images/home/stage/dragon/아침.webp',
                '/images/home/stage/dragon/노을.webp',
                '/images/home/stage/dragon/밤.webp',
              ]}
            />
          </div>
        )}

        {isSelectedDate('23일') && (
          <div id="응원한마당" data-stage="응원한마당">
            <Title>응원한마당</Title>
            <Subtitle>Hurrah-C의 뜨거운 응원과 하나 되는 함성!</Subtitle>
            <img
              src="/images/home/stage/muki/23.webp"
              alt="응원제 포스터"
              style={{ width: '100%', borderRadius: '12px' }}
            />
          </div>
        )}

        {isSelectedDate('22일') && (
          <div id="학생무대" data-stage="학생무대">
            <Title>학생무대 라인업</Title>
            <Subtitle>이곳에서만 볼 수 있는 특별한 무대! 함께 즐겨요.</Subtitle>
            <LineUp
              artists={['페어로근', 'Dance P.O.zz', '01OB']}
              artistImages={[
                'images/home/stage/main-artist/1.webp',
                'images/home/stage/main-artist/2.webp',
                'images/home/stage/main-artist/3.webp',
              ]}
              bannerImages={[
                'images/home/stage/main-stage/22-1.webp',
                'images/home/stage/main-stage/22-2.webp',
                'images/home/stage/main-stage/22-3.webp',
              ]}
              showListToggle={true}
              times={['16:45-17:00', '17:02-17:17', '17:19-17:34']}
              categories={['밴드', '댄스', '밴드']}
            />
          </div>
        )}

        {isSelectedDate('23일') && (
          <div id="학생무대" data-stage="학생무대">
            <Title>학생무대 라인업</Title>
            <Subtitle>이곳에서만 볼 수 있는 특별한 무대! 함께 즐겨요.</Subtitle>
            <LineUp
              artists={['Movement', '김승재와\n흑백 건반들', '블루드래곤', 'A.M.P', '손니버스']}
              artistImages={[
                'images/home/stage/main-artist/4.webp',
                'images/home/stage/main-artist/5.webp',
                'images/home/stage/main-artist/6.webp',
                'images/home/stage/main-artist/7.webp',
                'images/home/stage/main-artist/8.webp',
              ]}
              bannerImages={[
                'images/home/stage/main-stage/23-5.webp',
                'images/home/stage/main-stage/23-1.webp',
                'images/home/stage/main-stage/23-2.webp',
                'images/home/stage/main-stage/23-4.webp',
                'images/home/stage/main-stage/23-3.webp',
              ]}
              showListToggle={true}
              times={['17:22-17:37', '17:39-17:54', '17:56-18:11', '18:13-18:28', '18:30-18:45']}
              categories={['댄스', '밴드', '밴드', '밴드', '댄스']}
            />
          </div>
        )}

        {selectedDate.value === '21일' && (
          <div id="아티스트" data-stage="아티스트-21일">
            <Title>아티스트 라인업</Title>
            <Subtitle>올해 축제를 빛낼 아티스트를 지금 바로 확인해보세요.</Subtitle>
            <LineUp
              artists={['쏜애플', '에스파', '정동원(JD1)']}
              artistImages={[
                'images/home/stage/artist-artist/1.webp',
                'images/home/stage/artist-artist/2.webp',
                'images/home/stage/artist-artist/3.webp',
              ]}
              bannerImages={[
                'images/home/stage/artist-stage/21-1.webp',
                'images/home/stage/artist-stage/21-2.webp',
                'images/home/stage/artist-stage/21-3.webp',
              ]}
              showListToggle={false}
              instagram={[
                'https://www.instagram.com/thornapple_official/?hl=ko',
                'https://www.instagram.com/aespa_official/',
                'https://www.instagram.com/dongwon_15/',
              ]}
            />
          </div>
        )}
        {selectedDate.value === '22일' && (
          <div id="아티스트" data-stage="아티스트-22일">
            <Title>아티스트 라인업</Title>
            <Subtitle>올해 축제를 빛낼 아티스트를 지금 바로 확인해보세요.</Subtitle>
            <LineUp
              artists={['나상현씨밴드', '스테이씨', '창모', '행주']}
              artistImages={[
                'images/home/stage/artist-artist/4.webp',
                'images/home/stage/artist-artist/5.webp',
                'images/home/stage/artist-artist/6.webp',
                'images/home/stage/artist-artist/7.webp',
              ]}
              bannerImages={[
                'images/home/stage/artist-stage/22-4.webp',
                'images/home/stage/artist-stage/22-5.webp',
                'images/home/stage/artist-stage/22-6.webp',
                'images/home/stage/artist-stage/22-7.webp',
              ]}
              showListToggle={false}
              instagram={[
                'https://www.instagram.com/band_nah/',
                'https://www.instagram.com/stayc_highup/',
                'https://www.instagram.com/changmo_/?hl=ko',
                'https://www.instagram.com/hangzoo/',
              ]}
            />
          </div>
        )}
        {selectedDate.value === '23일' && (
          <div id="아티스트" data-stage="아티스트-23일">
            <Title>아티스트 라인업</Title>
            <Subtitle>올해 축제를 빛낼 아티스트를 지금 바로 확인해보세요.</Subtitle>
            <LineUp
              artists={['YB', 'NCT DREAM', '다이나믹 듀오']}
              artistImages={[
                'images/home/stage/artist-artist/8.webp',
                'images/home/stage/artist-artist/9.webp',
                'images/home/stage/artist-artist/10.webp',
              ]}
              bannerImages={[
                'images/home/stage/artist-stage/23-8.webp',
                'images/home/stage/artist-stage/23-9.webp',
                'images/home/stage/artist-stage/23-10.webp',
              ]}
              showListToggle={false}
              instagram={[
                'https://www.instagram.com/yb_official_insta/',
                'https://www.instagram.com/nct_dream/',
                'https://www.instagram.com/gaekogeem/?hl=ko',
              ]}
            />
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
  padding-left: 1rem;
  padding-bottom: 0.5rem;
  gap: 0.5rem;
  max-width: 584px;
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
  background-color: ${({ selected }) => (selected ? '#ffffff' : '#fafafa')};
`;

const Container = styled.div`
  padding: 64px 16px 30px 16px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

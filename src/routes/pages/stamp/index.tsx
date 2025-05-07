import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Auth from './auth';
import Intro from './intro';
import Signup from './auth/signup/Signup';
import Login from './auth/login/Login';

const StampEntrance = () => {
  const [selectedIndex, setSelectedIndex] = useState<string>('stamp');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); // 쿼리 파라미터 파싱
  const tab = searchParams.get('tab'); // 'tab' 파라미터 값 가져오기
  useEffect(() => {
    if (tab === 'intro') {
      setSelectedIndex('intro');
    } else if (tab === 'stamp') {
      setSelectedIndex('stamp');
    }
  }, [location.search]); // location.search가 변경될 때마다 실행

  // 회원가입 or 로그인 화면 선택
  const [whichView, setWhichView] = useState<string>('default');

  const navigate = useNavigate();

  const handleClickIndex = (index: string) => {
    setSelectedIndex(index);
    navigate(`?tab=${index}`);
  };

  return (
    <Wrapper>
      <ContentBox>
        <>
          <EmptyBox />
          {/* <IndexBox>
            <EachIndex
              onClick={() => {
                handleClickIndex('intro');
              }}
              isSelected={selectedIndex === 'intro'}
            >
              광장기획전 소개
            </EachIndex>
            <EachIndex
              onClick={() => {
                handleClickIndex('stamp');
              }}
              isSelected={selectedIndex === 'stamp'}
            >
              스탬프
            </EachIndex>
          </IndexBox> */}
          {selectedIndex == 'stamp' ? <Auth setWhichView={setWhichView} /> : <Intro />}
        </>
      </ContentBox>

      <WaveWrapper>
        <WaveBox>
          <WaveImg src="/images/wave/wave.png" alt="wave" />
        </WaveBox>
        <ColorBox isDefault={whichView} />
      </WaveWrapper>
    </Wrapper>
  );
};

export default StampEntrance;

interface EachIndexProps {
  isSelected: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px - 80px);
  justify-content: space-between;
  overflow-y: auto;
  position: relative;
`;

const IndexBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10%;
`;

const EachIndex = styled.div<EachIndexProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50%;
  min-height: 64px;
  color: ${({ isSelected }) => (isSelected ? 'black' : '#888')};
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  border-bottom: ${({ isSelected }) => (isSelected ? '2px solid #1447e6' : '2px solid #ffffff')};
`;

const EmptyBox = styled.div`
  height: 64px;
`;

interface ColorBoxProps {
  isDefault: string;
}

const ColorBox = styled.div<ColorBoxProps>`
  width: 100%;
  flex-grow: 1;
  min-height: calc(100vh - 200px - 230px - 120px - 80px - 120px);
  background-color: ${({ isDefault }) => (isDefault == 'default' ? '#e0efff' : '#F3F9FF')};
`;

const WaveWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;
`;

const WaveBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 230px;
  overflow-y: hidden;
`;

const WaveImg = styled.img`
  display: flex;
  width: 100%;
`;

const ContentBox = styled.div`
  position: relative;
  z-index: 1;
`;

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Auth from './auth';
import Intro from './intro';

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

  const handleClickIndex = (index: string) => {
    setSelectedIndex(index);
  };

  return (
    <Wrapper>
      <IndexBox>
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
      </IndexBox>
      <ContentBox>{selectedIndex == 'stamp' ? <Auth /> : <Intro />}</ContentBox>
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
`;

const IndexBox = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid red;
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
  border-bottom: ${({ isSelected }) => (isSelected ? '2px solid #1ab888' : '2px solid #ffffff')};
`;

// 이거로 반응형 구현
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 120px - 70px);
  overflow-y: auto;
`;

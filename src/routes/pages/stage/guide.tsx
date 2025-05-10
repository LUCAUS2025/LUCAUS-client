import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Ticketing from '../../../components/stage/Ticketing';
import Watchiing from '../../../components/stage/Watching';
import { Wrapper16 } from '../Home';

const Guide = () => {
  const { tab } = useParams<{ tab: string }>();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(tab === 'ticketing' ? 'ticketing' : 'watching');

  const handleTabClick = (tab: string) => {
    setCurrentTab(tab);
    navigate(`/guide/${tab}`);
  };

  return (
    <>
      <Tabs>
        <Tab active={currentTab === 'ticketing'} onClick={() => handleTabClick('ticketing')}>
          공연 티켓팅 안내
        </Tab>
        <Tab active={currentTab === 'watching'} onClick={() => handleTabClick('watching')}>
          공연 관람 가이드
        </Tab>
      </Tabs>
      <Wrapper16>
        {currentTab === 'ticketing' && <Ticketing />}
        {currentTab === 'watching' && <Watchiing />}
      </Wrapper16>
    </>
  );
};

export default Guide;

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 1rem;
`;
const Tab = styled.div<{ active?: boolean }>`
  padding: 16px;
  cursor: pointer;
  border-bottom: 1px solid #d1d5dc;
  width: 50%;
  text-align: center;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  border-bottom: ${({ active }) => (active ? '2px solid #1447e6' : '1px solid #d1d5dc')};
  &:hover {
    font-weight: bold;
    border-bottom: 2px solid #1447e6;
  }
`;

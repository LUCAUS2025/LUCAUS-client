import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Ticketing from '../../../components/stage/Ticketing';
import Watchiing from '../../../components/stage/Watching';

const AppBar = styled.div` ... `;
const BackArrow = styled.span` ... `;

interface LayoutProps {
  children?: React.ReactNode;
}

const Guide: React.FC<LayoutProps> = ({ children }) => {
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
      {currentTab === 'ticketing' && <Ticketing />}
      {currentTab === 'watching' && <Watchiing />}
      {children}
    </>
  );
};

export default Guide;

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 1.2rem;
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

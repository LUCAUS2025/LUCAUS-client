import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div` ... `;
const AppBar = styled.div` ... `;
const BackArrow = styled.span` ... `;

interface LayoutProps {
  children?: React.ReactNode;
}

const Guide: React.FC<LayoutProps> = ({ children }) => {
  const { tab } = useParams<{ tab: string }>();
  const navigate = useNavigate();

  const current = tab === 'ticketing' ? 'ticketing' : 'watching';

  return (
    <>
      <AppBar>
        <BackArrow onClick={() => navigate('/stage')}>←</BackArrow>
        오늘의 공연
      </AppBar>

      <Tabs>
        <Tab active={current === 'ticketing'} onClick={() => navigate('/guide/ticketing')}>
          공연 티켓팅 안내
        </Tab>
        <Tab active={current === 'watching'} onClick={() => navigate('/guide/watching')}>
          공연 관람 가이드
        </Tab>
      </Tabs>
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

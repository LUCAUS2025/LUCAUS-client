import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div` ... `;
const AppBar = styled.div` ... `;
const BackArrow = styled.span` ... `;
const Tabs = styled.div` ... `;
const Tab = styled.div<{ active?: boolean }>` ... `;

interface LayoutProps {
  children?: React.ReactNode;
}

const Guide: React.FC<LayoutProps> = ({ children }) => {
  const { tab } = useParams<{ tab: string }>();
  const navigate = useNavigate();

  const current = tab === 'ticketing' ? 'ticketing' : 'watching';

  return (
    <Container>
      <AppBar>
        <BackArrow onClick={() => navigate('/stage')}>←</BackArrow>
        오늘의 공연
      </AppBar>

      <Tabs>
        <Tab active={current === 'ticketing'} onClick={() => navigate('/performance/ticketing')}>
          공연 티켓팅 안내
        </Tab>
        <Tab active={current === 'watching'} onClick={() => navigate('/performance/watching')}>
          공연 관람 가이드
        </Tab>
      </Tabs>
      {children}
    </Container>
  );
};

export default Guide;

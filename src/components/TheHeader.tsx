import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const TheHeader = () => {
  const navigate = useNavigate();

  return (
    <Header onClick={() => navigate('/')}>
      <img src="./images/home/lucaus.png" alt="logo" />
    </Header>
  );
};

const Header = styled.div`
  background-color: #1447e6;
  color: white;
  text-align: center;
  height: 10%;
  padding: 10%;
`;

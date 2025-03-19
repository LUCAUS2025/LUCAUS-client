import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const TheHeader = () => {
  const navigate = useNavigate();

  return (
    <Header onClick={() => navigate('/')}>
      <Icon className="left-icon"></Icon>
      <img style={{ height: '24px' }} src="./images/home/lucaus.png" alt="logo" />
      <Icon></Icon>
    </Header>
  );
};

const Header = styled.div`
  background-color: #1447e6;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  padding: 0 3%;
`;

const Icon = styled.div`
  background-size: cover;
  width: 30px;
  height: 30px;

  &.left-icon {
    background-image: url('./images/home/icon-L.png');
  }

  &:not(.left-icon) {
    background-image: none;
  }
`;

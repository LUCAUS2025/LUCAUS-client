import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMenu } from '../../context/MenuContext';
import { WrapperH } from './Header';

export const HomeHeader = () => {
  const navigate = useNavigate();
  const { toggleMenu } = useMenu();

  const openMenu = (event: React.MouseEvent) => {
    event.stopPropagation(); // 부모 Header의 onClick 이벤트 전파 방지
    toggleMenu();
  };

  return (
    <WrapperH>
      <Header onClick={() => navigate('/')}>
        <Icon onClick={openMenu} className="left-icon"></Icon>
        <img style={{ height: '36px' }} src="/images/common/logo.webp" alt="logo" />
        <Icon></Icon>
      </Header>
    </WrapperH>
  );
};
export default HomeHeader;

const Header = styled.div`
  background-color: #1447e6;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 3%;
`;

const Icon = styled.div`
  background-size: cover;
  width: 30px;
  height: 30px;

  &.left-icon {
    background-image: url('/images/home/icon-L.webp');
  }
`;

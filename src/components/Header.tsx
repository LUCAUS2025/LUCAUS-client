import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMenu } from '../context/MenuContext';

interface TheHeaderProps {
  title?: string;
}

export const TheHeader = ({ title = '오늘의 공연' }: TheHeaderProps) => {
  const navigate = useNavigate();
  const { toggleMenu } = useMenu();

  const openMenu = (event: React.MouseEvent) => {
    event.stopPropagation(); // 부모 Header의 onClick 이벤트 전파 방지
    toggleMenu();
  };

  return (
    <Wrapper>
      <Header onClick={() => navigate('/')}>
        <Icon onClick={openMenu} className="left-icon"></Icon>
        <img style={{ height: '24px' }} src="./images/home/lucaus.webp" alt="logo" />
        <Icon></Icon>
      </Header>
    </Wrapper>
  );
};
export default TheHeader;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
`;

const Header = styled.div`
  background-color: #f9fafb;
  color: #030712;
  text-align: center;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 3%;
`;

const Icon = styled.div`
  background-size: cover;
  width: 30px;
  height: 30px;

  &.left-icon {
    background-image: url('./images/home/icon-L.webp');
  }

  &:not(.left-icon) {
    background-image: none;
  }
`;

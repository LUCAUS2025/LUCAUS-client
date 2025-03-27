import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMenu } from '../context/MenuContext';
import exp from 'constants';

interface TheHeaderProps {
  title?: string;
  backgroundColor?: string;
  textColor?: string;
}

export const Header = ({
  title = './images/home/lucaus.webp',
  backgroundColor = '#1447e6',
  textColor = '#000',
}: TheHeaderProps) => {
  const navigate = useNavigate();
  const { toggleMenu } = useMenu();

  const openMenu = (event: React.MouseEvent) => {
    event.stopPropagation(); // 부모 Header의 onClick 이벤트 전파 방지
    toggleMenu();
  };

  return (
    <Wrapper>
      <HeaderWrapper onClick={() => navigate('/')}>
        <Icon onClick={openMenu} className="left-icon"></Icon>
        <Icon></Icon>
      </HeaderWrapper>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
`;

const HeaderWrapper = styled.div`
  background-color: #F9FAFB;
  color: white;
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

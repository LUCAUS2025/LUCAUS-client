import styled from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useMenu } from '../../context/MenuContext';
import { Wrapper } from './HomeHeader';

export const Header = () => {
  const navigate = useNavigate();
  const { toggleMenu } = useMenu();
  const location = useLocation();
  useEffect(() => {
    console.log('params:', location.pathname);
  }, []);

  const title = useMemo(() => {
    const path = location.pathname;

    if (path === '/') return '청람';
    if (path.startsWith('/guide')) return '오늘의 공연';
    if (path.includes('stage')) return '오늘의 공연';
    if (path.includes('booth')) return '거리문화제';
    if (path.includes('foodTruck')) return '푸드트럭';
    if (path.includes('information')) return '정보';
    if (path.includes('entry')) return '이동 정책';
    if (path.includes('notice')) return '공지사항';
    if (path.includes('lostitem')) return '분실물 안내';
    if (path.includes('barrierfree')) return '배리어프리';
    if (path.startsWith('/stamp/board')) return '광장기획전 스탬프';
    if (path.startsWith('/stamp/auth')) return '로그인';

    return '오늘의 공연'; // default
  }, [location.pathname]);

  const openMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    toggleMenu();
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Icon onClick={openMenu} className="left-icon" />
        <Title>{title}</Title>
        <Icon />
      </HeaderWrapper>
    </Wrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  background-color: #f9fafb;
  color: black;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  height: 60px;
  padding: 0 3%;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
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

import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useMenu } from '../../context/MenuContext';

export const Header = () => {
  const navigate = useNavigate();
  const { toggleMenu } = useMenu();
  const location = useLocation();

  // 경로에 따라 타이틀 정의
  const title = useMemo(() => {
    const path = location.pathname;

    if (path === '/') return '청람';
    if (path.includes('guide')) return '오늘의 공연';
    if (path.includes('stage')) return '오늘의 공연';
    if (path.includes('booth')) return '거리문화제';
    if (path.includes('foodTruck')) return '푸드트럭';
    if (path.includes('information')) return '정보';
    if (path.includes('entry')) return '통행 정책';
    if (path.includes('notice')) return '공지사항';
    if (path.includes('lostitem')) return '분실물 안내';
    if (path.includes('barrierfree')) return '배리어프리';
    if (path.includes('/stamp/board')) return '도장판';
    if (path.includes('/stamp/auth')) return '도장판';
    if (path.includes('/stamp/login')) return '로그인';
    if (path.includes('/stamp/signup')) return '회원가입';

    return '오늘의 공연';
  }, [location.pathname]);

  // arrow 아이콘을 보여줄 경로
  const arrowPaths = ['entry', 'notice', 'lostitem', 'barrierfree', 'login', 'signup'];

  // 현재 경로가 arrow 아이콘 대상인지 판단
  const showArrowIcon = arrowPaths.some((path) => location.pathname.includes(path));

  // 아이콘 클릭 핸들러
  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (showArrowIcon) {
      navigate(-1); // 이전 페이지로
    } else {
      toggleMenu(); // 메뉴 열기
    }
  };

  const openMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    toggleMenu();
  };

  return (
    <WrapperH>
      <HeaderWrapper>
        <Icon onClick={handleIconClick} className={`left-icon ${showArrowIcon ? 'arrow-icon' : ''}`} />
        <Title>{title}</Title>
        <Icon />
      </HeaderWrapper>
    </WrapperH>
  );
};

export default Header;

export const WrapperH = styled.div`
  position: fixed;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
`;

const HeaderWrapper = styled.div`
  background-color: #f9fafb;
  color: black;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 3%;
  gap: 10px;
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
    background-image: url('/images/home/icon-L-black.webp');
  }

  &.left-icon.arrow-icon {
    background-image: url('/images/home/icon-L-arrow.webp');
  }

  &:not(.left-icon) {
    background-image: none;
  }
`;

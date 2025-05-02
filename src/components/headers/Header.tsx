import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { useMenu } from '../../context/MenuContext';

export const Header = () => {
  const navigate = useNavigate();
  const { toggleMenu } = useMenu();
  const params = useParams();

  const title = useMemo(() => {
    const paramValues = Object.values(params);

    // 파라미터가 없을 경우(예: 홈)
    if (paramValues.length === 0) return '청람';

    const param = paramValues[0];

    // param에 따라 타이틀 결정
    switch (param) {
      case 'stage':
        return '오늘의 공연';
      case 'booth':
        return '거리문화제';
      case 'foodTruck':
        return '푸드트럭';
      case 'information':
        return '정보';
      case 'entry':
        return '이동 정책';
      case 'notice':
        return '공지사항';
      case 'lostitem':
        return '분실물 안내';
      case 'barrierfree':
        return '배리어프리';
      case 'board':
        return '광장기획전 스탬프';
      case 'auth':
        return '로그인';
      default:
        return '오늘의 공연';
    }
  }, [params]);

  const openMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    toggleMenu();
  };

  return (
    <Wrapper>
      <HeaderWrapper onClick={() => navigate('/')}>
        <Icon onClick={openMenu} className="left-icon" />
        <Title>{title}</Title>
        <Icon />
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
  background-color: #f9fafb;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
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

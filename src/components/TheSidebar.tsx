import styled from 'styled-components';
import { useMenu } from '../context/MenuContext';

const TheSidebar = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <>
      {/* 오버레이 */}
      <Overlay isOpen={isMenuOpen} onClick={toggleMenu} />

      {/* 사이드바 */}
      <SidebarContainer isOpen={isMenuOpen}>
        <CloseButton onClick={toggleMenu}>✕</CloseButton>
        <div>
          <h3>공연</h3>
          <MenuItem href="#">오늘의 공연</MenuItem>
          <MenuItem href="#">공연 티켓팅 안내</MenuItem>
          <MenuItem href="#">관람 가이드</MenuItem>
          <h3>거리문화제</h3>
          <MenuItem href="#">부스배치도</MenuItem>
          <h3>푸드트럭</h3>
          <MenuItem href="#">푸드트럭 지도</MenuItem>
          <h3>정보</h3>
          <MenuItem href="#">분실물 안내</MenuItem>
          <MenuItem href="#">배리어 프리</MenuItem>
          <MenuItem href="#">안전</MenuItem>
          <MenuItem href="#">총학생회 공지사항</MenuItem>
        </div>
      </SidebarContainer>
    </>
  );
};

export default TheSidebar;

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  padding: 20px;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
`;

const MenuItem = styled.a`
  font-size: 16px;
  color: #333;
  text-decoration: none;
  margin: 10px 0;
  transition: font-size 0.3s ease;
  &:hover {
    color: #1e3a8a;
    font-size: 20px;
  }
`;

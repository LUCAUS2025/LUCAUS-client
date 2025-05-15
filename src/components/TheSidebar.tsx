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
        <MenuDom>
          <MenuGap />
          <ItemContainer>
            <MenuHeading>공연</MenuHeading>
            <MenuItem href="/stage">오늘의 공연</MenuItem>
            <MenuItem href="/guide/ticketing">공연 티켓팅 안내</MenuItem>
            <MenuItem href="/guide/watching">관람 가이드</MenuItem>
          </ItemContainer>
          <ItemContainer>
            <MenuHeading>거리문화제</MenuHeading>
            <MenuItem href="/booth">부스배치도</MenuItem>
          </ItemContainer>
          <ItemContainer>
            <MenuHeading>광장기획전</MenuHeading>
            <MenuItem href="/stamp/auth?tab=stamp">스탬프</MenuItem>
          </ItemContainer>
          <ItemContainer>
            <MenuHeading>푸드트럭</MenuHeading>
            <MenuItem href="/foodTruck">푸드트럭 안내</MenuItem>
          </ItemContainer>
          <ItemContainer>
            <MenuHeading>정보</MenuHeading>
            <MenuItem href="/lostitem">분실물 안내</MenuItem>
            <MenuItem href="/barrierfree">배리어프리</MenuItem>
            <MenuItem href="/entry">입장 정책 및 이동 동선</MenuItem>
            <MenuItem href="/notice">총학생회 공지사항</MenuItem>
          </ItemContainer>
        </MenuDom>
      </SidebarContainer>
    </>
  );
};

export default TheSidebar;

const MenuGap = styled.div`
  padding-top: 50px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background-color: white;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 100;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 50;
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

const MenuDom = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
`;

const MenuItem = styled.a`
  font-size: 16px;
  color: #333;
  text-decoration: none;
  padding: 8px 16px;
  transition:
    font-size 0.3s ease,
    font-weight 0.3s ease;
  &:hover {
    background-color: #e7f1ff;
  }
`;

const MenuHeading = styled.h3`
  padding: 0 16px;
`;

import React from 'react';
import { TheHeader } from '../../components/TheHeader';
import { Outlet } from 'react-router-dom';
import { TheFooter } from '../../components/TheFooter';
import styled from 'styled-components';
import { MenuProvider } from '../../context/MenuContext';
import TheSidebar from '../../components/TheSidebar';

export const DefaultLayout = () => {
  return (
    <>
      <AppDom>
        <MenuProvider>
          <TheHeader />
          <TheSidebar />
          <Outlet />
          <TheFooter />
        </MenuProvider>
      </AppDom>
    </>
  );
};

const AppDom = styled.div`
  width: min(100vw, 600px); // 화면 너비에 맞추면서 최대 600px로 제한
  height: 100vh; // 웹 뷰
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
  }
`;

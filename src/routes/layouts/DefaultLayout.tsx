import React from 'react';
import { Outlet } from 'react-router-dom';
import { TheFooter } from '../../components/TheFooter';
import styled from 'styled-components';
import { MenuProvider } from '../../context/MenuContext';
import TheSidebar from '../../components/TheSidebar';
import TheHeader from '../../components/HomeHeader';

export const DefaultLayout = () => {
  return (
    <>
      <AppDom>
        <MenuProvider>
          <TheHeader />
          <TheSidebar />
          <Content>
            <Outlet />
          </Content>
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

  font-family: 'Pretendard-Regular';
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
`;

const Content = styled.div`
  padding: 60px 0px 60px 0px; // 상단 헤더와 하단 푸터를 제외한 여백
`;

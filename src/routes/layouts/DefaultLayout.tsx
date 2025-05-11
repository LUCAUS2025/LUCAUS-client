import React from 'react';
import { Outlet } from 'react-router-dom';
import { TheFooter } from '../../components/TheFooter';
import styled from 'styled-components';
import { MenuProvider } from '../../context/MenuContext';
import { HeaderProvider, useHeader } from '../../context/HeaderContext';
import TheSidebar from '../../components/TheSidebar';
import TheHeader from '../../components/TheHeader';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const LayoutContent = () => {
  const { hideHeader } = useHeader();

  return (
    <LayoutDom>
      {!hideHeader && <TheHeader key="header-visible" />}
      <TheSidebar />
      <Content hideHeader={hideHeader}>
        <Outlet />
      </Content>
      <TheFooter />
    </LayoutDom>
  );
};

export const DefaultLayout = () => {
  return (
    <AppDom>
      <MenuProvider>
        <HeaderProvider>
          <LayoutContent />
        </HeaderProvider>
      </MenuProvider>
      <Analytics />
      <SpeedInsights />
    </AppDom>
  );
};

const LayoutDom = styled.div`
  width: min(100vw, 600px);
  @media (max-width: 600px) {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
  }
`;

export const AppDom = styled.div`
  width: min(100vw, 600px);
  height: 100vh;
  margin: 0 auto;
  font-family: 'Pretendard-Regular';
  background-color: white;

  @media (max-width: 600px) {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
  }
`;

const Content = styled.div<{ hideHeader: boolean }>`
  padding: ${({ hideHeader }) => (hideHeader ? '0px' : '60px')} 0px 60px 0px;
`;

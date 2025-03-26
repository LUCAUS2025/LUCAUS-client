import React from 'react';
import { Thumbnail } from '../../components/home/thumbnail';
import styled from 'styled-components';
import { Banner } from '../../components/home/banner';
import Toast from '../../components/home/Toast';
import { Subtitle, Title } from './stage';
import HomeNotice from '../../components/home/HomeNotice';

export const Home = () => {
  return (
    <>
      <Banner />
      <Title>이 무대 절대 놓치지 마세요!</Title>
      <Subtitle>올해 축제를 빛낼 아티스트들을 지금 확인하세요</Subtitle>
      <Toast />
      <Thumbnail />

      <HomeNotice />

      <Title>놓칠 수 없는 부스</Title>
      <Subtitle>꼭 가봐야할 부스를 추천해드려요.</Subtitle>
      <Thumbnail />

      <Bottom>
        <div style={{ fontSize: '20px' }}>축제기획단 X 멋쟁이사자처럼 중앙대학교</div>
        <br />© 2025 CAU LIKELION All rights reserved.
      </Bottom>
    </>
  );
};

const Bottom = styled.div`
  background-color: #e0efff;
  color: #364153;
  text-align: center;
  padding: 20px;
`;

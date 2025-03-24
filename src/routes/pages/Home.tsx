import React from 'react';
import { Thumbnail } from '../../components/home/thumbnail';
import styled from 'styled-components';
import { Banner } from '../../components/home/banner';
import Toast from '../../components/home/Toast';

export const Home = () => {
  return (
    <>
      <Banner />
      <h3>이 무대 절대 놓치지 마세요!</h3>
      <div>올해 축제를 빛낼 아티스트들을 지금 확인하세요</div>
      <Toast />
      <Thumbnail />

      <h3>최근 공지사항</h3>

      <h3>놓칠 수 없는 부스</h3>
      <div>꼭 가봐야할 부스를 추천해드려요.</div>
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

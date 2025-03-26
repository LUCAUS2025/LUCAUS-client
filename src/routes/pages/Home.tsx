import React from 'react';
import { Thumbnail } from '../../components/home/thumbnail';
import styled from 'styled-components';
import { Banner } from '../../components/home/banner';
import Toast from '../../components/home/Toast';
import { Subtitle, Title } from './stage';

export const Home = () => {
  return (
    <>
      <Banner />
      <Title>이 무대 절대 놓치지 마세요!</Title>
      <Subtitle>올해 축제를 빛낼 아티스트들을 지금 확인하세요</Subtitle>
      <Toast />
      <Thumbnail />

      <NoticeSection>
        <SectionHeader>
          <Title>최근 공지사항</Title>
          <MoreButton>더보기</MoreButton>
        </SectionHeader>
        <NoticeCard>
          <NoticeTitle>베리어 프리존 안내</NoticeTitle>
          <NoticeContent>베리어 프리존 안내</NoticeContent>
          <NoticeDate>25.05.01</NoticeDate>
        </NoticeCard>
        <NoticeCard>
          <NoticeTitle>베리어 프리존 안내</NoticeTitle>
          <NoticeContent>베리어 프리존 안내</NoticeContent>
          <NoticeDate>25.05.01</NoticeDate>
        </NoticeCard>
      </NoticeSection>

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

const NoticeSection = styled.div`
  margin: 40px 0;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MoreButton = styled.div`
  font-size: 14px;
  color: #6b7280;
  cursor: pointer;
`;

const NoticeCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 16px;
  padding: 20px;
  margin-top: 12px;
  position: relative;
`;

const NoticeTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #111827;
`;

const NoticeContent = styled.div`
  font-size: 16px;
  color: #6b7280;
  margin-top: 4px;
`;

const NoticeDate = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 14px;
  color: #6b7280;
`;

const Bottom = styled.div`
  background-color: #e0efff;
  color: #364153;
  text-align: center;
  padding: 20px;
`;

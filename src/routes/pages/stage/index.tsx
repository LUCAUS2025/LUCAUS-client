import React from 'react';
import { Thumbnail } from '../../../components/home/thumbnail';
import { LineUp } from '../../../components/stage/lineUp';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Stage = () => {
  const navigate = useNavigate();

  return (
    <>
      <img src="./images/home/stage/ticket.png" onClick={() => navigate('/guide/ticketing')} style={{ width: '80%' }} />
      <Title>청룡가요제</Title>
      <Subtitle>숨겨진 보컬 천재들의 뜨거운 강연을 만나보세요.</Subtitle>
      <Thumbnail />

      <Title>무대 기획전</Title>
      <Subtitle>축제 기획단에서 야심차게 준비했다!</Subtitle>

      <Title>본무대 라인업</Title>
      <Subtitle>이곳에서만 볼 수 있는 특별한 무대! 함께 즐겨요.</Subtitle>
      <LineUp />

      <Title>아티스트 라인업</Title>
      <Subtitle>올해 축제를 빛낼 아티스트를 지금 바로 확인해보세요.</Subtitle>
      <LineUp />
    </>
  );
};

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

export const Subtitle = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
`;

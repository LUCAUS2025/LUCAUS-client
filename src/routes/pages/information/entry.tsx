import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/stage/Watching';

const Entry = () => {
  return (
    <>
      <SectionTitle>입장 정책 및 이동 동선</SectionTitle>
      <SectionTitle>입장 지도</SectionTitle>
      <MapImage />
      <Description>
        입장 정책 및 이동 동선 및 입장 정책에 대한
        <br />
        설명글 텍스트
      </Description>
    </>
  );
};
export default Entry;

const MapImage = styled.div` ... `;
const Description = styled.div` ... `;

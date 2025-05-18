import React from 'react';
import styled from 'styled-components';
import { Box } from './Watching';
import { BlackButton } from '../common/BaseButton';

export const Description = styled.div`
  margin-top: 16px;
  line-height: 1.5;
`;

const Ticketing: React.FC = () => {
  return (
    <>
      <Description>
        티켓팅 방식 및 입장 정책에 대한
        <br />
        설명글 텍스트
      </Description>
    </>
  );
};

export default Ticketing;

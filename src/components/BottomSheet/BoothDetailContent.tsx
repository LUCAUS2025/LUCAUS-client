import React from 'react';
import styled from 'styled-components';
import { keywordBaseStyle } from '../../styles/keyword';
import {
  DetailWrapper,
  HeaderContainer,
  TitleContainer,
  ItemTitle,
  ItemId,
  ItemHost,
  ItemDescription,
  Keywords,
  Keyword,
} from '../../styles/itemDetailStyles';
import { DetailOperatingInfo } from './ItemDetailComponents/DetailOperatingInfo';

export const BoothDetailContent = () => {
  return (
    <DetailWrapper>
      <HeaderContainer>
        <TitleContainer>
          <ItemTitle>
            <ItemId>#1&nbsp;</ItemId>너 내 친구과 되어라
          </ItemTitle>
          <ItemHost>LIKELION CAU</ItemHost>
          <Keywords>
            <Keyword>#게임</Keyword>
            <Keyword>#체험</Keyword>
          </Keywords>
        </TitleContainer>
        <ItemDescription>
          랜덤으로 짝이 된 참가자와 미션을 완료하면 새로운 인연과 깜짝 선물이 함께! 서로의 MBTI를 맞혀보거나 간단한
          게임을 즐기며 자연스럽게 친해져 보세요. 혼자 와도 걱정 NO! 이 부스를 나오면 친구 한 명쯤은 생겨 있을걸요?
        </ItemDescription>
      </HeaderContainer>
      <DetailOperatingInfo />
    </DetailWrapper>
  );
};

// styles/itemDetailStyles.ts
import styled from 'styled-components';
import { keywordBaseStyle } from './keyword';

export const DetailWrapper = styled.div`
  padding: 26px 20px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const ItemTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 125%;
  letter-spacing: -0.26px;
  display: flex;
  flex-direction: row;

  @media (max-width: 380px) {
    font-size: 18px;
  }
`;

export const ItemId = styled.div``;

export const ItemHost = styled.div`
  color: #6a7282;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  @media (max-width: 380px) {
    font-size: 13px;
  }
`;

export const Keywords = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const Keyword = styled.div`
  ${keywordBaseStyle};

  @media (max-width: 380px) {
    font-size: 11px;
  }
`;

export const ItemDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 8px;
  color: #364153;
  white-space: pre-line;

  @media (max-width: 380px) {
    font-size: 13px;
  }
`;

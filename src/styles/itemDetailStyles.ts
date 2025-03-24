// styles/itemDetailStyles.ts
import styled, { css } from 'styled-components';
import { keywordBaseStyle } from './keyword';

// ✅ 공통 Wrapper
export const DetailWrapper = styled.div`
  padding: 36px 20px;
  gap: 40px;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// ✅ 공통 Title 영역
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
`;

export const ItemId = styled.div``;

export const ItemHost = styled.div`
  color: #6a7282;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`;

// ✅ 공통 키워드
export const Keywords = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const Keyword = styled.div`
  ${keywordBaseStyle};
`;

// ✅ 공통 설명
export const ItemDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`;

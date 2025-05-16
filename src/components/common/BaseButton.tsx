import styled from 'styled-components';

export const BaseButton = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 14px;
  color: '#364153';
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  //height: 32px;
  background-color: #fafafa;
  padding: 6px 12px;
  position: relative;
  border: 1px solid #d1d5dc;
  white-space: nowrap;
`;

export const BlackButton = styled.div`
  width: 106px;
  height: 42px;
  gap: 10px;
  border-radius: 8px;
  background: #1e2939;
  color: #f9fafb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

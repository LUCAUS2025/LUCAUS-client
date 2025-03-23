// styles/bottomSheetStyles.ts
import { css } from 'styled-components';

export const bottomSheetBaseStyle = css`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 60px;
  z-index: 1;
  left: 0;
  right: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #fafafa;
  transition: transform 300ms ease-out;
  width: min(100vw, 600px);
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

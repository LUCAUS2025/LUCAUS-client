// styles/responsive.ts
import { css } from 'styled-components';

export const mediaSmall = (styles: TemplateStringsArray | string) => css`
  @media (max-width: 380px) {
    ${styles}
  }
`;

export const mediaBig = (styles: TemplateStringsArray | string) => css`
  @media (min-width: 410px) {
    ${styles}
  }
`;

export const mediaMediumPad = (styles: TemplateStringsArray | string) => css`
  @media (min-width: 420px) and (max-width: 520px) {
    ${styles}
  }
`;

export const mediaLargePad = (styles: TemplateStringsArray | string) => css`
  @media (min-width: 520px) and (max-width: 550px) {
    ${styles}
  }
`;

export const mediaLarggestPad = (styles: TemplateStringsArray | string) => css`
  @media (min-width: 550px) and (max-width: 800px) {
    ${styles}
  }
`;

export const mediaAboveDesktop = (styles: TemplateStringsArray | string) => css`
  @media (min-width: 801px) {
    ${styles}
  }
`;

export const mediaSmall_title = css`
  ${mediaSmall`
    font-size: 18px;
  `}
`;

export const mediaSmall_subTitle = css`
  ${mediaSmall`
    font-size: 14px;
  `}
`;

export const mediaSmall_description = css`
  ${mediaSmall`
    font-size: 13px;
  `}
`;

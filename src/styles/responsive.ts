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

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface Props {
  children: React.ReactNode;
}
export const Page = ({ children }: Props) => (
  <div
    css={css`
      margin: 10px auto 20px auto;
      padding: 30px 20px;
      max-width: 60%;
    `}
  >
    {children}
  </div>
);

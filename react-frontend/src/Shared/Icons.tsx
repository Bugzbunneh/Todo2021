/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import user from './SVGs/user.svg';
import burgerMenu from './SVGs/burgerMenu.svg';

export const UserIcon = () => (
  <img
    src={user}
    alt="User"
    width="12px"
    css={css`
      width: 12px;
      opacity: 0.8;
    `}
  />
);

export const BurgerMenuIcon = () => (
  <img
    src={burgerMenu}
    alt="Menu Icon"
    width="18px"
    css={css`
      width: 24px;
      opacity: 1;
    `}
  />
);

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BurgerMenuIcon } from './Icons';
import { gray3, fontFamily, fontSize, lightBlue2, gray6 } from './Styles';

const burgerButtonStyle = css`
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  padding: 0px 10px;
`;

const navLinkStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${gray6};
  height: 30px;
  padding: 5px 10px;
  text-decoration: none;
  cursor: pointer;

  :hover {
    background-color: ${lightBlue2};
  }
`;

export const SideNav: React.FC = () => {
  const [width, setWidth] = useState(0);

  const handleOpen = () => {
    setWidth(200);
  };

  const handleClose = () => {
    setWidth(0);
  };

  return (
    <div>
      <div css={burgerButtonStyle} onClick={handleOpen}>
        <BurgerMenuIcon />
      </div>
      <div>
        <div
          css={css`
            height: 100%;
            width: ${width}px;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            background-color: ${gray3};
            overflow-x: hidden;
            padding: 30px 0 0 0;
            transition: 0.5s;
          `}
        >
          <div
            css={css`
              position: absolute;
              top: 0;
              right: 25px;
              font-size: 36px;
              margin-left: 50px;
              color: ${gray6};
              :hover {
                cursor: pointer;
              }
            `}
            onClick={handleClose}
          >
            &times;
          </div>
          <div
            css={css`
              font-family: ${fontFamily};
              font-size: ${fontSize};
              font-weight: bold;
              margin: 15px 0 15px 0;
              color: ${gray6};
            `}
          >
            Menu
          </div>
          <Link
            to="todo"
            css={css`
              ${navLinkStyle}
            `}
          >
            <span>Todos</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

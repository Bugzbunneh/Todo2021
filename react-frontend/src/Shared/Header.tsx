/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useAuth } from 'Api/Auth';
import { Link } from 'react-router-dom';
import { UserIcon } from './Icons';
import { SideNav } from './SideNav';
import { gray5, linkStyle } from './Styles';

export const Header: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1%;
        background-color: ${gray5};
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
      `}
    >
      <SideNav />
      <div>App name</div>

      {!loading &&
        (isAuthenticated ? (
          <div>
            <Link
              to="signout"
              css={css`
                ${linkStyle}
                span {
                  margin-left: 7px;
                }
              `}
            >
              <UserIcon />
              <span>Sign Out</span>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="signin" css={linkStyle}>
              <UserIcon />
              <span>Sign In</span>
            </Link>
          </div>
        ))}
    </div>
  );
};

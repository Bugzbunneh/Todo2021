/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useAuth } from 'Api/Auth';
import { Link } from 'react-router-dom';
import { lilac1 } from './Styles';

export const Header: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-evenly;
        padding: 1%;
        background-color: ${lilac1};
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
      `}
    >
      <span>Environment: {process.env.REACT_APP_ENV || 'dev'}</span>
      <Link
        to="todo"
        css={css`
          text-decoration: none;
        `}
      >
        Todos
      </Link>
      <Link
        to="wotd"
        css={css`
          text-decoration: none;
        `}
      >
        Word of the Day
      </Link>
      {!loading &&
        (isAuthenticated ? (
          <Link
            to="signout"
            css={css`
              text-decoration: none;
            `}
          >
            Sign Out
          </Link>
        ) : (
          <Link
            to="signin"
            css={css`
              text-decoration: none;
            `}
          >
            Sign in
          </Link>
        ))}
    </div>
  );
};

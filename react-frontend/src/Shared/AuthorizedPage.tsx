import React from 'react';
import { Page } from './Page';
import { useAuth } from 'Api/Auth';

export const AuthorizedPage: React.FC = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return (
      <Page>
        <h1>You do not have access to this page</h1>
      </Page>
    );
  }
};

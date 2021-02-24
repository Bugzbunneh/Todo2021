import React from 'react';
import { Page } from 'Shared/Page';
import { useAuth } from 'Api/Auth';

type SignoutAction = 'signout' | 'signout-callback';

interface Props {
  action: SignoutAction;
}

export const SignOutPage = ({ action }: Props) => {
  let message = 'Signing out ...';

  const { signOut } = useAuth();

  switch (action) {
    case 'signout':
      signOut();
      break;
    case 'signout-callback':
      message = 'You successfully signed out!';
      break;
  }

  return (
    <Page>
      <h1>Sign out page</h1>
      <h2>{message}</h2>
    </Page>
  );
};

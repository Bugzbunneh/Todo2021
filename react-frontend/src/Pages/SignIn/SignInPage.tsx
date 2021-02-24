import React from 'react';
import { Page } from 'Shared/Page';
import { useAuth } from 'Api/Auth';

type SigninAction = 'signin' | 'signin-callback';

interface Props {
  action: SigninAction;
}

export const SignInPage = ({ action }: Props) => {
  const { signIn } = useAuth();

  if (action === 'signin') {
    signIn();
  }
  return (
    <Page>
      <h1>Sign in page</h1>
      <h2>Signing in ...</h2>
    </Page>
  );
};

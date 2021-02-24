export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://todo2021-backend.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://todo2021-staging-backend.azurewebsites.net'
    : 'http://localhost:5000';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-61ugus9t.eu.auth0.com',
  client_id: 'ymZcnf95xHi18p8NLjVsU2XV3tCT3jdu',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile email',
  audience: 'https://todo',
};

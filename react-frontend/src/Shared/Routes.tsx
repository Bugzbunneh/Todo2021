import { Routes, Route } from 'react-router-dom';
import { TodoLandingPage } from 'Pages/Todo/TodoLandingPage';
import { NotFoundPage } from 'Pages/NotFound/NotFoundPage';
import { WordOfTheDayPage } from 'Pages/WordOfTheDay/WordOfTheDayPage';
import { SignInPage } from 'Pages/SignIn/SignInPage';
import { SignOutPage } from 'Pages/SignOut/SignOutPage';
import { AuthorizedPage } from './AuthorizedPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <AuthorizedPage>
            <TodoLandingPage />
          </AuthorizedPage>
        }
      />
      <Route path="signin" element={<SignInPage action={'signin'} />} />
      <Route
        path="signin-callback"
        element={<SignInPage action={'signin-callback'} />}
      />
      <Route path="signout" element={<SignOutPage action={'signout'} />} />
      <Route
        path="signout-callback"
        element={<SignOutPage action={'signout-callback'} />}
      />
      <Route
        path="todo"
        element={
          <AuthorizedPage>
            <TodoLandingPage />
          </AuthorizedPage>
        }
      />
      <Route path="wotd" element={<WordOfTheDayPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useContext, useEffect } from 'react';
import { Page } from 'Shared/Page';
import { black1, DarkScrollbar } from 'Shared/Styles';
import { TodoList } from './Components/TodoList/TodoList';
import { AddTodoForm } from './Components/AddTodoForm/AddTodoForm';
import { StoreContext } from 'Stores/Provider';
import { observer } from 'mobx-react';

export const TodoLandingPage: React.FC = observer(() => {
  const { todoListStore } = useContext(StoreContext);

  useEffect(() => {
    const doGetTodos = async () => {
      await todoListStore.fetchTodos();
    };
    doGetTodos();
  }, []);

  return (
    <Page>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 15px;
          background-color: ${black1};
          height: 75vh;
        `}
      >
        <h1
          css={css`
            color: white;
          `}
        >
          My Todos
        </h1>

        <div
          css={css`
            width: 50vw;
          `}
        >
          <AddTodoForm />
          <div
            css={css`
              height: 52vh;
              width: inherit;
              overflow: auto;
              margin: 10px 0 0 0;
              padding: 0 15px 0 0;
              ${DarkScrollbar}
            `}
          >
            <TodoList data={todoListStore.todoList} />
          </div>
        </div>
      </div>
    </Page>
  );
});

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { observer } from 'mobx-react';
import { ITodo } from 'Pages/Todo/Interfaces/ITodo';
import { Todo } from '../Todo/Todo';

interface IProps {
  data: ITodo[];
}
export const TodoList: React.FC<IProps> = observer(({ data }) => {
  return (
    <ul
      css={css`
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: inherit;
        padding: 0;
        margin: 0;
      `}
    >
      {data.map((todo) => (
        <li
          key={todo.todoId}
          css={css`
            width: inherit;
          `}
        >
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
});

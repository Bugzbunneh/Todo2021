/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ITodo } from 'Pages/Todo/Interfaces/ITodo';
import { black2, gray5, lightBlue1, red2 } from 'Shared/Styles';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import { CompleteButton } from '../CompleteButton/CompleteButton';
import { observer } from 'mobx-react';

interface IProps {
  todo: ITodo;
}
export const Todo: React.FC<IProps> = observer(({ todo }) => {
  return (
    <div
      css={css`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: inherit;
        height: 100%;
        padding: 5px 10px 5px 10px;
        margin: 0 0 10px 0;
        background-color: ${black2};
        border-radius: 8px;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            width: 70%;
            text-align: left;
          `}
        >
          <div
            css={css`
              font-weight: bold;
              font-size: 30px;
              color: ${lightBlue1};
              width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            `}
          >
            {todo.title}
          </div>
          <div
            css={css`
              font-size: 18px;
              color: ${lightBlue1};
              margin: 0 0 3px 0;
              width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            `}
          >
            {todo.description}
          </div>
          <div
            css={css`
              font-size: 12px;
            `}
          >
            <i
              css={css`
                margin: 0 25px 0 0;
                color: ${gray5};
              `}
            >
              <span>Created at: {todo.dateCreated.toLocaleDateString()}</span>
            </i>
            <i
              css={css`
                color: ${red2};
              `}
            >
              {todo.dateDeadline && (
                <span>Deadline: {todo.dateDeadline.toLocaleDateString()}</span>
              )}
            </i>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            width: 30%;
            justify-content: space-around;
            align-items: center;
          `}
        >
          {!todo.dateCompleted && (
            <div>
              <CompleteButton todoId={todo.todoId} />
            </div>
          )}
          <div>
            <DeleteButton todoId={todo.todoId} />
          </div>
        </div>
      </div>
    </div>
  );
});

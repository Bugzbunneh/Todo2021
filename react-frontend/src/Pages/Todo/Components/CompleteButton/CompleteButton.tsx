import { IPutTodoData } from 'Pages/Todo/Interfaces/ITodo';
import { useContext } from 'react';
import { PrimaryButton } from 'Shared/Styles';
import { StoreContext } from 'Stores/Provider';

interface IProps {
  todoId: number;
}
export const CompleteButton: React.FC<IProps> = ({ todoId }) => {
  const { todoListStore } = useContext(StoreContext);

  const handleClick = async () => {
    const todoPutValues: IPutTodoData = {
      todoId: todoId,
      dateCompleted: new Date(),
    };
    await todoListStore.putTodo(todoPutValues);
  };

  return <PrimaryButton onClick={handleClick}>Complete</PrimaryButton>;
};

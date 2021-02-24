import { useContext } from 'react';
import { SecondaryButton } from 'Shared/Styles';
import { StoreContext } from 'Stores/Provider';

interface IProps {
  todoId: number;
}
export const DeleteButton: React.FC<IProps> = ({ todoId }) => {
  const { todoListStore } = useContext(StoreContext);

  const handleClick = async () => {
    await todoListStore.deleteTodo(todoId);
  };

  return <SecondaryButton onClick={handleClick}>Delete</SecondaryButton>;
};

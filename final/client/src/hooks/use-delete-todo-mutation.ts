import { trpc } from '../utils/trpc';

const useDeleteTodoMutation = () => {
  const utils = trpc.useContext();

  return trpc.todo.delete.useMutation({
    onSuccess() {
      utils.todo.all.invalidate();
    },
  });
};

export default useDeleteTodoMutation;

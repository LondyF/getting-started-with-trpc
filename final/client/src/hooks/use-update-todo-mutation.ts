import { trpc } from '../utils/trpc';

const useUpdateTodoMutation = () => {
  const utils = trpc.useContext();

  return trpc.todo.update.useMutation({
    onSuccess: () => {
      utils.todo.all.invalidate();
    },
  });
};

export default useUpdateTodoMutation;

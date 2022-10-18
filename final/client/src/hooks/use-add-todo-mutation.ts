import { trpc } from '../utils/trpc';

const useAddTodoMutation = () => {
  const utils = trpc.useContext();

  return trpc.todo.add.useMutation({
    onSuccess() {
      utils.todo.all.invalidate();
    },
  });
};

export default useAddTodoMutation;

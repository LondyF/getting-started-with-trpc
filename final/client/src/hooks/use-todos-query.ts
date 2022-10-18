import { trpc } from '../utils/trpc';

const useTodosQuery = () => {
  return trpc.todo.all.useQuery();
};

export default useTodosQuery;

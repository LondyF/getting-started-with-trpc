import React from 'react';

import { httpLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { trpc } from './utils/trpc';
import Todo from './components/todo';

const API_URL = 'http://localhost:3000/trpc';

const App: React.FC = () => {
  const [queryClient] = React.useState(() => new QueryClient());
  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      links: [
        httpLink({
          url: API_URL,
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Todo />
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;

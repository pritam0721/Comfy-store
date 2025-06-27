import { RouterProvider } from 'react-router-dom';
import { router } from './router/routerPage';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './router/routerPage';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

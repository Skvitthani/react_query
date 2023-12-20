import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StackNavigation />
      </QueryClientProvider>
    </>
  );
};

export default App;

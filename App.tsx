import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import StackNavigation from './src/navigation/StackNavigation';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StackNavigation />
    </QueryClientProvider>
  );
};

export default App;

import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <StackNavigation />
    </ApolloProvider>
  );
};

export default App;

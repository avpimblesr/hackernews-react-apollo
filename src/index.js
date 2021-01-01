import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import App from './components/App';

import {
  ApolloProvider,
  ApolloProviderClient,
  createHttpLink,
  InMemoryCatch
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = newApolloClient({
  link: httpLink,
  cache: new InMemoryCatch()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
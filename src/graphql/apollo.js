import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const apollo = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NODE_ENV === 'DEV' ? process.env.DEV_NODE_ENDPOINT : process.env.PROD_NODE_ENDPOINT,
    credentials: 'include',
  }),
  cache: new InMemoryCache(),
});

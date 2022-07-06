import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const apollo = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_ENV === 'DEV' ? process.env.REACT_APP_DEV_GRAPHQL_ENDPOINT : process.env.REACT_APP_PROD_GRAPHQL_ENDPOINT,
    credentials: 'include',
  }),
  cache: new InMemoryCache(),
});

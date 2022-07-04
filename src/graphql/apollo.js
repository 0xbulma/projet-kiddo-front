import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // Automatically fetch the user when we encounter it in a query.
        users: {
          keyFields: ['id'],
          merge(existing, incoming) {
            return {
              ...existing,
              ...incoming,
            };
          },
        },
        events: {
          keyFields: ['id'],
          merge(existing, incoming) {
            return {
              ...existing,
              ...incoming,
            };
          },
        },
        articles: {
          keyFields: ['id'],
          merge(existing, incoming) {
            return {
              ...existing,
              ...incoming,
            };
          },
        },
        comments: {
          keyFields: ['id'],
          merge(existing, incoming) {
            return {
              ...existing,
              ...incoming,
            };
          },
        },
      },
    },
  },
});

export const apollo = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3001/graphql',
    credentials: 'include',
  }),
  cache: new InMemoryCache(),
});

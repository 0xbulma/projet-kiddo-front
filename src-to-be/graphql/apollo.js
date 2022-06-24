import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // Automatically fetch the user when we encounter it in a query.
        users: {
          keyFields: ["id"],
          merge(existing, incoming) {
            return {
              ...existing,
              ...incoming,
            };
          }
        },
        events: {
          keyFields: ["id"],
          merge(existing, incoming) {
            return {
              ...existing,
              ...incoming,
            };
          }
        },
        articles: {
          keyFields: ["id"],
          merge(existing, incoming) {
            return {
              ...existing,
              ...incoming,
            };
          }
        },
        comments: {
          keyFields: ["id"],
          merge(existing, incoming) {
            return {
              ...existing,
              ...incoming,
            };
          }
        },
      }
    }
  }
});

export const apollo = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache,
});
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { api, tokenGithub } from '../config/config.json';

const httpLink = new HttpLink({
  uri: api,
  headers: {
    Authorization: `Bearer ${tokenGithub}`
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;

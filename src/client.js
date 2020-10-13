// import {
//   ApolloClient,
//   InMemoryCache,
//   HttpLink
// } from '@apollo/client';
//
// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: new HttpLink({
//     uri: 'https://xdapi.toolabs.com/graphql',
//     headers : {
//       "x-toolabs-token" : '0781d947-72ac-464f-b46d-aa37c7e4ebb3'
//     }
//   })
// });
// export default client;
import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import {execute, makePromise} from 'apollo-link';
import {createHttpLink} from 'apollo-link-http';
import {parse} from 'graphql';
import fetch from 'node-fetch';

 const link = createHttpLink({
  uri: 'https://xdapi.toolabs.com/graphql',
  headers : {
    "x-toolabs-token" : '0781d947-72ac-464f-b46d-aa37c7e4ebb3'
  }}, fetch);




export const source = new RecordSource();
export const store = new Store(source);
export const network = Network.create(
  (operation, variables) => makePromise(
    execute(link, {
      query: parse(operation.text),
      variables
    })
  )
);

// export const client = new ApolloClient({
//   link: link,
//   cache: new InMemoryCache()
// });

export const environment = new Environment({
  network,
  store
});

export const client = new ApolloClient({
  link:link,
  cache: new InMemoryCache()
});
// Note: importing from "@theme/Footer" would fail due to the file importing itself
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql,
  useQuery
} from '@apollo/client';

import OriginalLayout from '@theme-original/Layout';
import React from "react";
const ToolabsApiClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://xdapi.toolabs.com/graphql",
    headers: {
      "x-toolabs-token": "0781d947-72ac-464f-b46d-aa37c7e4ebb3"
    }
  })
});
export default function Layout(props) {
  return (
    <ApolloProvider client={ToolabsApiClient}>
      <OriginalLayout {...props} />
    </ApolloProvider>
  );
}
import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql,
  useQuery
} from '@apollo/client';

import jp from 'jsonpath';

import {
  ColorTable
} from '@site/docs/guidelines/components';

import './ColorToken.scss';

const ToolabsApiClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://xdapi.toolabs.com/graphql",
    headers: {
      "x-toolabs-token": "0781d947-72ac-464f-b46d-aa37c7e4ebb3"
    }
  })
});

const QUERY_COLORS = gql`
  {
    colors {
      name
      hex
      rgb
    }
  }
`;

const sort_spectrum = (spectrum) => {
  let i;

  function comparator(a, b){
    i = i + 1;
    var anum = parseInt(a.name.match(/[\d-]+$/m)),
      bnum = parseInt(b.name.match(/[\d-]+$/m));

    if((Number.isNaN(anum) || Number.isNaN(bnum))) {
      return i*-20;
    }

    if(anum < bnum){
      return -1;
    }else if(anum > bnum){
      return 1;
    }else{
      return 0;
    }
  }

  return spectrum.sort(comparator);
}

const ColorTokens = ({def_id, type}) => {
  const { loading, error, data } = useQuery(QUERY_COLORS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {JSON.stringify(error, null, 2)}</p>;

  //let def_id = "blue";
  let regex = new RegExp(`\\b${def_id}\\b`, 'i');

  let results = jp.query(data, '$..[?('+regex+'.test(@.name))]');
  let sorted = sort_spectrum(results);

  let filtered = [];
  console.log(type)
  if(type==="brand") {
    filtered = sorted.filter(function (color) {
      return /AAA \|/.test(color.name);
    });
  } else {
    filtered = sorted.filter(function (color) {
      return /[\d-]+$/.test(color.name);
    });
  }
  console.log(filtered)
  return (
    <ColorTable colors={filtered} tier="mypolicy"/>
  );
};



export default function ColorToken ({def_id, type}) {
  return (
    <ApolloProvider client={ToolabsApiClient}>
      <ColorTokens def_id={def_id} type={type}/>
    </ApolloProvider>
  );
}

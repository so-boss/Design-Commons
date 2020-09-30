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
  ColorTable,
  FontFamily,
  FontSize
} from '@site/docs/guidelines/components';

import './Token.scss';

const ToolabsApiClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://xdapi.toolabs.com/graphql",
    headers: {
      "x-toolabs-token": "0781d947-72ac-464f-b46d-aa37c7e4ebb3"
    }
  })
});

/*
[
  {
    name: "Default Font",
    value: "Raleway"
  },
  {
    name: "Raleway 700",
    value: "Raleway"
  },
  {
    name: "Cabin regular",
    value: "Cabin"
  }
]
*/
const QUERY_TYPEFACES = gql`
  {
    typefaces {
      name
      value
    }
  }
`;
/*
const schema_typeface = gql`
  {
    typeface(id: ID) {
      name
      value
    }
  }
`;

const QUERY_TEXTSTYLES = gql`
  {
    textstyles {
      name
      fontSize
    }
  }
`;
*/
const Tokens = ({def_id, type}) => {
  const { loading, error, data } = useQuery(QUERY_TYPEFACES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {JSON.stringify(error, null, 2)}</p>;

  return (
    <FontFamily typefaces={data}/>
  );
};

const TokenTypography = ({typefaces}) => {
  return (
    <Typefaces typefaces={typefaces}/>
  )
}
const Typefaces = ({typefaces}) => (
  <>
    {typefaces.map(typeface => {
      console.log(typeface.family.name)
      return (
        <Typeface typeface={typeface} />
      );
    })}
  </>
);
const Typeface = ({typeface}) => {
  const split_name = typeface.name.split(" ");
  let weight = parseInt(split_name[1]);
  if (isNaN(weight)) {
    weight = 400; //def weight
  }
  let style = split_name[2].replace(/\(|\)/g, "");
  return (
    <FontFamily
      family={typeface.family}
      weight={weight}
      style_name={style}/>
  )
};

/*
    <Token type="textstyle"/>
 */
export default function Token ({def_id, type, typefaces}) {
  let tokenType;
  if(type=="typography") {
    tokenType = <TokenTypography typefaces={typefaces}/>
  } else {
    tokenType = <Tokens def_id={def_id} type={type}/>
  }

  return (
    <ApolloProvider client={ToolabsApiClient}>
      {tokenType}
    </ApolloProvider>
  );
}

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
const queries = {
  TEXTSTYLES: gql`
    {
      textstyles {
        name
        fontSize
        lineHeight
        fontFamily {
          name
          value
        }
      }
    }   
  `,
  TYPEFACES: gql`
    {
      typefaces {
        name
        value
      }
    }
  `
};

const Tokens = ({def_id, type}) => {
  const { loading, error, data } = useQuery(queries[type.toUpperCase()]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {JSON.stringify(error, null, 2)}</p>;

  const tokens = {
    typefaces:<Typefaces typefaces={data[type]}/>,
    textstyles:<TextStyles textstyles={data[type]}/>
  };

  return (
      tokens[type]
  );
};

// const TokenTypography = ({typefaces}) => {
//   return (
//     <Typefaces typefaces={typefaces}/>
//   )
// }
const Typefaces = ({typefaces}) => (
  <>
    {typefaces.map(typeface => {
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
      family={typeface.value}
      weight={weight}
      style_name={style}
    />
  )
};
const TextStyles = ({textstyles}) => (
    <>
      {textstyles.map(textstyle => {
        return (
            <TextStyle textstyle={textstyle} />
        );
      })}
    </>
);
const TextStyle = ({textstyle}) => {
  const split_name = textstyle.name.split("-");
  let size = parseInt(split_name[1]);
  if (isNaN(size)) {
    size = "m"; //def size
  }
  //let style = split_name[2].replace(/\(|\)/g, "");
  return (
      <div>
        {textstyle.name}
        <div>family: {textstyle.fontFamily.value}</div>
        <div>size: {textstyle.fontSize}</div>
        <div>line height: {textstyle.lineHeight}</div>
      </div>
  )
};

/*
    <Token type="textstyle"/>
 */
export default function Token ({def_id, type, typefaces}) {
  let tokenType;
    tokenType = <Tokens def_id={def_id} type={type}/>

  return (
    <ApolloProvider client={ToolabsApiClient}>
      {tokenType}
    </ApolloProvider>
  );
}

import React from "react";
import {
  gql,
  useQuery,
  ApolloConsumer
} from '@apollo/client';

//`var jp = require('jsonpath');
import {JSONPath} from 'jsonpath-plus';

import {
  ColorTable
} from '../';;

import './ColorToken.scss';

const QUERY_COLORS = gql`
  query GET_COLORS {
    colors {
      name
      hex
      rgb
    }
  }
`;

const sort_spectrum = (spectrum) => {
  console.log(spectrum.length)
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
  if (spectrum.length<2) {
    console.log("dont sort", spectrum)
    return spectrum;
  }
  console.log("sort", spectrum)
  return spectrum.sort(comparator);
}

const ColorTokens = ({def_id, type}) => {
  const { loading, error, data } = useQuery(QUERY_COLORS);
  if (loading) return <p>Loading...</p>;

  console.log("COLOR TOKENS", def_id, type, data.colors)
  //let def_id = "blue";
  let regex = new RegExp(`\\b${def_id}\\b`, 'i');

  //let results = jp.query(data.colors, '$..[?('+regex+'.test(@.name))]');
  let results = JSONPath({
    path:'$..[?('+regex+'.test(@.name))]',
    json: data.colors
  });

  let sorted = sort_spectrum(results);
  console.log("SORTED RESULTS", results)
  let filtered = [];
  if(type==="brand") {
    filtered = sorted.filter(function (color) {
      return /AAA \|/.test(color.name);
    });
  } else {
    filtered = sorted.filter(function (color) {
      return /[\d-]+$/.test(color.name);
    });
  }

  return (
    <ColorTable colors={filtered} tier="mypolicy"/>
  );
};

/*
    <ColorToken def_id="white" type="brand"/>
 */
export default function ColorToken ({def_id, type}) {
  return (
    <ApolloConsumer>
      {client => (
        <ColorTokens def_id={def_id} type={type}/>
        )
      }
    </ApolloConsumer>
  );
};

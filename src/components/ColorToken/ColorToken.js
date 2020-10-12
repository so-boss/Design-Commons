import React from "react";
import {
  gql,
  useQuery,
  useLazyQuery,
  ApolloConsumer
} from '@apollo/client';

import jp from 'jsonpath';

import {
  ColorTable
} from '@site/docs/guidelines/components';

import './ColorToken.scss';

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
  const { loading, error, data } = useLazyQuery(QUERY_COLORS);
  if (loading) return <p>Loading...</p>;

  //let def_id = "blue";
  let regex = new RegExp(`\\b${def_id}\\b`, 'i');

  let results = jp.query(data, '$..[?('+regex+'.test(@.name))]');
  let sorted = sort_spectrum(results);

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

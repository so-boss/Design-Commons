//`var jp = require('jsonpath');
import {JSONPath} from 'jsonpath-plus';

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
  if (spectrum.length<2) {
    return spectrum;
  }
  return spectrum.sort(comparator);
}

// NOTE: ColorTokens is where Data flows in
export const sorter = (def_id, type, data) => {
  // const { loading, data } = useQuery(QUERY_COLORS);
  // if (loading) return <p>Loading...</p>;

  //let def_id = "blue";
  let regex = new RegExp(`\\b${def_id}\\b`, 'i');

  console.log("color_utils", data)
  //let results = jp.query(data.colors, '$..[?('+regex+'.test(@.name))]');
  let results = JSONPath({
    path:'$..[?('+regex+'.test(@.name))]',
    json: data
  });

  console.log("results", results)
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

  return filtered;

  // return (
  //   <ColorTable colors={filtered} tier="mypolicy"/>
  // );
};
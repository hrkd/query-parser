export default function Parser(q=location.search) {
  if(!q)return null;
  let result = {}
  const queries = q.replace('?','').split('&');
  queries.forEach((val)=>{
    const keyValue = val.split('=');
    const braket = '%5B%5D';
    if(keyValue[0].indexOf(braket) > 0){
      if(typeof result[keyValue[0].replace(braket,'')] === 'undefined'){
        result[keyValue[0].replace(braket,'')] = new Array();
      }
      result[keyValue[0].replace(braket,'')].push(keyValue[1].replace('+',' '));
    }else{
      result[keyValue[0]] = keyValue[1].replace('+',' ');
    }
  });
  return result;
}

import axios from "axios";

const baseUrl = `https://api.koibanx.com/stores`;

function validator(filterValue, filterByStatus) {
  let ValueAndStatus = filterValue.length && (filterByStatus === "1" || "0") ? true : false;
  let Value = filterValue.length && !filterByStatus.length ? true : false;
  let Status = filterByStatus.length && !filterValue.length ? true : false;
  return { ValueAndStatus, Value, Status };
}

function routeGenerator(value = null, status = null) {
 
  const routeStatus = `${baseUrl}?q={"Activo":${status}}`;
  const routeValueAndStatus = `${baseUrl}?q={"$and":[{'Activo':'${status}'},{"$or":[{"CUIL":{"$regex":".${value}*"}},{"ID":{"$regex":".${value}*"}},{"Comercio":{"$regex":".${value}*"}}]}]}`;
  const routeValue = `${baseUrl}?q={"$or":[{"CUIL":{"$regex":".${value}*"}},{"ID":{"$regex":".${value}*"}},{"Comercio":{"$regex":".${value}*"}}]}`;
  
  let { ValueAndStatus,Value,Status } = validator(value, status);
  
  if(ValueAndStatus){
    console.log(routeValueAndStatus);
    return routeValueAndStatus
  }
  if(Value){
    console.log(routeValue);
    return routeValue
  }
  if(Status){
    console.log(routeStatus);
    return routeStatus
  }
}

export const queryGenerator = (filterValue, filterByStatus) => {
  
    const  route = routeGenerator(filterValue, filterByStatus);
    return axios.get(route);
  
};

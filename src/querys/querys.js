import axios from "axios";

function routeGenerator(value = null, status = null) {
  const baseUrl = `https://api.koibanx.com/stores`;
  const routeStatus = `${baseUrl}?q={"Activo":${status}}`;
  const routeValueAndStatus = `${baseUrl}?q={"$and": [{"Activo": "${status}"}, {"$or": [{"CUIL" : {"$regex" : ".${value}*"}}, {"ID" : {"$regex" : ".${value}*"}},{"Comercio" : {"$regex" : ".${value}*"}}]}]}`;
  const routeValue = `${baseUrl}?q={"$or": [{"CUIL" : {"$regex" : ".${value}*"}}, {"ID" : {"$regex" : ".${value}*"}},{"Comercio" : {"$regex" : ".${value}*"}}]}`;
  console.log(baseUrl);
  console.log(routeStatus);
  console.log(routeValueAndStatus);
  console.log(routeValue);
  return { routeValueAndStatus, routeValue, routeStatus };
}

function validator(filterValue, filterByStatus) {
  let ValueAndStatus =
    filterValue.length && (filterByStatus === "1" || "0") ? true : false;
  let Value = filterValue.length && !filterByStatus.length ? true : false;
  let Status = filterByStatus.length && !filterValue.length ? true : false;
  return { ValueAndStatus, Value, Status };
}

export const queryGenerator = (filterValue, filterByStatus) => {
  let { ValueAndStatus } = validator(filterValue, filterByStatus);
  if (ValueAndStatus) {
    const { routeValueAndStatus } = routeGenerator(filterValue, filterByStatus);
    return axios.get(routeValueAndStatus);
  }

  let { Value } = validator(filterValue, filterByStatus);
  if (Value) {
    const { routeValue } = routeGenerator(filterValue);
    return axios.get(routeValue);
  }

  let { Status } = validator(filterValue, filterByStatus);
  if (Status) {
    const { routeStatus } = routeGenerator("", filterByStatus);
    return axios.get(routeStatus);
  }
};

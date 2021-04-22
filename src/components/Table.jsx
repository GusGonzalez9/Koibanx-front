import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
export default function Table({
  rowsToRender,
  filtrados,
  setOrderAndOrder,
  order,
}) {
  const sort = filtrados.sort;

  return (
    <table className="styled-table">
      <thead>
        <tr>
          {sort.includes("ID") ? (
            <th>
              ID{" "}
              {!order.status && order.key == "ID" ? (
                <ArrowDropDownIcon
                  onClick={(e) => setOrderAndOrder(e, true, "ID")}
                />
              ) : (
                <ArrowDropUpIcon
                  onClick={(e) => setOrderAndOrder(e, false, "ID")}
                />
              )}{" "}
            </th>
          ) : (
            <th>ID</th>
          )}
          {sort.includes("Comercio") ? (
            <th>
              Comercio{" "}
              {!order.status && order.key == "Comercio" ? (
                <ArrowDropDownIcon
                  onClick={(e) => setOrderAndOrder(e, true, "Comercio")}
                />
              ) : (
                <ArrowDropUpIcon
                  onClick={(e) => setOrderAndOrder(e, false, "Comercio")}
                />
              )}{" "}
            </th>
          ) : (
            <th>Comercio</th>
          )}
          {sort.includes("CUIT") ? (
            <th>
              CUIT{" "}
              {!order.status && order.key == "CUIT" ? (
                <ArrowDropDownIcon
                  onClick={(e) => setOrderAndOrder(e, true, "CUIT")}
                />
              ) : (
                <ArrowDropUpIcon
                  onClick={(e) => setOrderAndOrder(e, false, "CUIT")}
                />
              )}{" "}
            </th>
          ) : (
            <th>CUIT</th>
          )}
          <th>Concepto 1</th>
          <th>Concepto 2</th>
          <th>Concepto 3</th>
          <th>Concepto 4</th>
          <th>Concepto 5</th>
          <th>Concepto 6</th>
          {sort.includes("Balance actual") ? (
            <th>
              Balance actual
              {!order.status && order.key == "Balance actual" ? (
                <ArrowDropDownIcon
                  onClick={(e) => setOrderAndOrder(e, true, "Balance actual")}
                />
              ) : (
                <ArrowDropUpIcon
                  onClick={(e) => setOrderAndOrder(e, false, "Balance actual")}
                />
              )}
            </th>
          ) : (
            <th>Balance actual</th>
          )}
          <th key="id">Activo</th>
          <th key="id">Ultima venta</th>
        </tr>
      </thead>
      <tbody>
        {rowsToRender &&
          rowsToRender.map((row) => (
            <tr key={row.ID}>
              <td>{row.ID}</td>
              <td>{row.Comercio}</td>
              <td>{row.CUIT}</td>
              <td>{row["Concepto 1"]}</td>
              <td>{row["Concepto 2"]}</td>
              <td>{row["Concepto 3"]}</td>
              <td>{row["Concepto 4"]}</td>
              <td>{row["Concepto 5"]}</td>
              <td>{row["Concepto 6"]}</td>
              <td>{row["Balance actual"]}</td>
              <td>{row.Activo}</td>
              <td>{row["Ultima venta"]}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

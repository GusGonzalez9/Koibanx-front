//filtrados tendra rows per page, page current y rows total
// hay que hacer paginacion

export default function Table({ rowsToRender }) {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Comercio</th>
          <th>CUIT</th>
          <th>Concepto 1</th>
          <th>Concepto 2</th>
          <th>Concepto 3</th>
          <th>Concepto 4</th>
          <th>Concepto 5</th>
          <th>Concepto 6</th>
          <th>Balance actual</th>
          <th>Activo</th>
          <th>Ultima venta</th>
        </tr>
      </thead>
      <tbody>
        {rowsToRender &&
          rowsToRender.map((row) => 
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
          )}
      </tbody>
    </table>
  );
}


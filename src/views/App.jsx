import React from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import Data from "../stores.json";
import { queryGenerator } from "../querys/querys";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filterByStatus, setfilterByStatus] = React.useState("");
  const [filterValue, setFilterValue] = React.useState("");
  const [filtrados, setFiltrados] = React.useState(Data);
  const [order, setOrder] = React.useState({ key: "", status: true });

  const setOrderAndOrder = (e, togleOrder, key) => {
    e.preventDefault();

    if (togleOrder) {
      filtrados["data to show"] = filtrados["data to show"].sort(
        (a, b) => Number(a[key]) - Number(b[key])
      );
    } else {
      filtrados["data to show"] = filtrados["data to show"].sort(
        (a, b) => Number(b[key]) - Number(a[key])
      );
    }

    setFiltrados(filtrados);
    setOrder({ ...order, status: !order.status, key: key });
  };

  let handleSubmitSearch = async (e) => {
    e.preventDefault();
    try {
      await queryGenerator(filterValue, filterByStatus).then((res) =>
        setFiltrados(res)
      );
    } catch (err) {
      console.log(err);
    }
  };

  let handleChangeInput = (e) => {
    setFilterValue(e.target.value);
  };

  const lastRow = currentPage * filtrados["rows per page"];
  const firstRow = lastRow - filtrados["rows per page"];
  const rowsToRender = filtrados["data to show"].slice(firstRow, lastRow);

  return (
    <div className="App">
      <div className="NavbarCotainer">
        <div>
          <h3 style={{ color: "white" }}>Koibanx</h3>
        </div>

        <div>
          <label style={{ color: "white" }}>Is Active: </label>
          <select
            id="status"
            onChange={(e) => setfilterByStatus(e.target.value)}
            style={{
              width: "150px",
              height: "80%",
              backgroundColor: "gainsboro",
            }}
          >
            <option value="">--</option>
            <option value="1">Active</option>
            <option value="0">No Active</option>
          </select>
        </div>

        <div style={{ width: "30%" }}>
          <form style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="Search ..."
              className="input"
              onChange={handleChangeInput}
            />
            <button
              type="submit"
              name="submit"
              value={filterValue}
              onClick={(e) => handleSubmitSearch(e)}
              className="buttonSubmit"
            >
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
      <div>
        <Table
          rowsToRender={rowsToRender}
          filtrados={filtrados}
          order={order}
          setOrderAndOrder={setOrderAndOrder}
        />
        <Pagination
          rowsPerPage={filtrados["rows per page"]}
          totalRows={filtrados["rows total"]}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

import React from "react";
import Table from "../views/Table";
import Pagination from "../views/Pagination";
import Data from "../stores.json";
import { queryGenerator } from "../querys/querys";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filterByStatus, setfilterByStatus] = React.useState("");
  const [filterValue, setFilterValue] = React.useState("");
  const [filtrados, setFiltrados] = React.useState(Data);

  let handleSubmitSearch = (e) => {
    e.preventDefault();
    try {
      queryGenerator(filterValue, filterByStatus).then((res) =>
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
            style={{width:'150px', height:'80%',backgroundColor:'gainsboro'}}
          >
            <option value="" >--</option>
            <option value="1">Active</option>
            <option value="0">No Active</option>
          </select>
        </div>

        <div style={{width:'30%'}}>
          <form style={{width:'100%'}}>
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
        <Table rowsToRender={rowsToRender} />
        <Pagination
          rowsPerPage={filtrados["rows per page"]}
          totalRows={filtrados["rows total"]}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

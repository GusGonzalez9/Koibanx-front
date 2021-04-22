export default function Pagination({ rowsPerPage, totalRows, setCurrentPage }) {
  const rowsToShow = Math.ceil(totalRows / rowsPerPage);
  let arrayForPage = [];
  for (let i = 1; i <= rowsToShow; i++) {
    arrayForPage.push(i);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {arrayForPage.map((row, i) => {
        return (
          <>
            <button
              style={{
                borderColor: "#023e8a",
                backgroundColor: "gainsboro",
                fontSize: "20px",
                borderRadius: "2px",
                borderWidth: "2px",
                margin: "3px",
              }}
              onClick={() => setCurrentPage(row)}
            >
              <li style={{ listStyle: "none", marginLeft: "2px" }} key={i}>
                {row}
              </li>
            </button>
          </>
        );
      })}
    </div>
  );
}

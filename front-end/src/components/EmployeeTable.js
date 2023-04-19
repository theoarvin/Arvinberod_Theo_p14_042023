import React, { useCallback, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function EmployeeTable() {
  const PAGE_SIZE = 1;
  const [gridApi, setGridApi] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState(10);
  //const gridRef = useRef();
  const data = useSelector((state) => state?.user?.userData);
  const [currentPage, setCurrentPage] = useState(1);

  const columnDefs = [
    { headerName: "First Name", field: "firstName", sortable: true, flex: 1 },
    { headerName: "Last Name", field: "lastName", sortable: true, flex: 1 },
    { headerName: "Start Date", field: "date", sortable: true, flex: 1 },
    {
      headerName: "Department",
      field: "department",
      sortable: true,
      flex: 1,
    },
    {
      headerName: "Date of Birth",
      field: "dateOfBirth",
      sortable: true,
      flex: 1,
    },
    { headerName: "Street", field: "street", sortable: true, flex: 1 },
    { headerName: "City", field: "city", sortable: true, flex: 1 },
    { headerName: "State", field: "state", sortable: true, flex: 1 },
    { headerName: "Zip Code", field: "zipCode", sortable: true, flex: 1 },
  ];

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  }, [data, searchText]);

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const onHeaderClicked = (event, filterValue) => {
    const colId = event.column.getId();
    const filter = gridApi.getFilterInstance(colId);

    if (filter) {
      filter.setModel({
        type: "contains",
        filter: filterValue,
      });
      gridApi.onFilterChanged();
    } else {
      gridApi.setFilterModel({
        [colId]: {
          type: "contains",
          filter: filterValue,
        },
      });
      gridApi.onFilterChanged();
    }
  };

  const totalPageCount = useMemo(() => {
    return Math.ceil(filteredData.length / PAGE_SIZE);
  }, [filteredData]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="block-input">
        <label htmlFor="search"></label>
        <input
          name="search"
          type="search"
          placeholder="Rechercher"
          value={searchText}
          onChange={handleSearchTextChange}
          aria-label="search user"
        />
        <label htmlFor="select"></label>
        <select
          name="select"
          aria-label="change number filtre "
          onChange={(e) => setShow(e.target.value)}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      <div
        className="box-grid"
        style={{ height: "400px", width: "80%", margin: "auto" }}
      >
        <div
          className="ag-theme-alpine"
          style={{ height: "400px", width: "100%" }}
        >
          <AgGridReact
            onGridReady={onGridReady}
            columnDefs={columnDefs}
            rowData={filteredData}
            onHeaderClicked={(event) =>
              onHeaderClicked(event, "valeur de filtre")
            }
            enableSorting={true}
            pagination={true}
            paginationPageSize={show}
          />
          <div className="pagination">
            {Array.from({ length: totalPageCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeTable;

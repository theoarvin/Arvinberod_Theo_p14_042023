import React, { useMemo, useState, lazy } from "react";
import { useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function EmployeeTable() {
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState(10);
  const data = useSelector((state) => state?.user?.userData);

  const columnDefs = [
    { headerName: "First Name", field: "firstName", sortable: true, flex: 1 },
    { headerName: "Last Name", field: "lastName", sortable: true, flex: 1 },
    {
      headerName: "Start Date",
      field: "date",
      sortable: true,
      flex: 1,
      valueFormatter: (params) => {
        const date = new Date(params.value);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("fr-FR", options);
      },
    },
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
      valueFormatter: (params) => {
        const date = new Date(params.value);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("fr-FR", options);
      },
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

  return (
    <>
      <div className="block-input">
        <div className="filtre">
          <label htmlFor="search-field">Rechercher :</label>
          <input
            type="search"
            id="search-field"
            name="search"
            value={searchText}
            onChange={handleSearchTextChange}
            aria-label="Rechercher les utilisateurs"
          />
        </div>
        <div className="filtre">
          <label htmlFor="select-field">Nombre de résultats à afficher :</label>
          <select
            id="select-field"
            name="select"
            aria-label="Changer le nombre de résultats à afficher"
            onChange={(e) => setShow(e.target.value)}
          >
            <option value="1">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
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
            columnDefs={columnDefs}
            rowData={filteredData}
            enableSorting={true}
            pagination={true}
            paginationPageSize={show}
          />
        </div>
      </div>
    </>
  );
}

export default EmployeeTable;

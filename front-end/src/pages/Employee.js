import React from "react";
import { Link } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";
import Header from "../components/Header";


function Employee() {
  
  return (
    <>
      <Header />
      <h1>Current Employees</h1>
      <EmployeeTable />
    </>
  );
}

export default Employee;

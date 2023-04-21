import React, {lazy, Suspense} from "react";
import Header from "../components/Header";

const EmployeeTable = lazy(() => import("../components/EmployeeTable"));

function Employee() {
  
  return (
    <>
      <Header />
      <h1>Current Employees</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <EmployeeTable />
      </Suspense>
    </>
  );
}

export default Employee;

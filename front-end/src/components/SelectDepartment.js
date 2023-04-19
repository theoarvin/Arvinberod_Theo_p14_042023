import React, { useEffect, useRef, useState } from "react";

import { BiChevronDown } from "react-icons/bi";

function SelectDepartment({ selectDepartment }) {
  const departments = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ];
  const [onSelectName, setOnSelectName] = useState(departments[0]);
  const [openList, setOpenList] = useState(false);

  useEffect(() => {
    selectDepartment(departments[0])
  },[])
  
  return (
    <div className="select-states">
      <div className="select">
        {onSelectName}
        <BiChevronDown size={20} onClick={() => setOpenList(!openList)} />
      </div>
      {openList ? (
        <>
          <ul className="list-box" id="department">
            {departments.map((department, index) => (
              <li
                className="items"
                key={index}
                value={department}
                onClick={() => {
                  selectDepartment(department);
                  setOnSelectName(department);
                  setOpenList(false)
                }}
              >
                {department}
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

export default SelectDepartment;

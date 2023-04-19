import React, { useEffect, useRef, useState } from "react";
import states from "../states.json";
import { BiChevronDown } from "react-icons/bi";

function SelectStates({ selectState }) {
  const [onSelectName, setOnSelectName] = useState(states[0].name);
  const [openList, setOpenList] = useState(false);

  useEffect(() => {
    selectState(states[0].name)
  },[])

  return (
    <div className="select-states">
      <div className="select">
        {onSelectName}
        <BiChevronDown size={20} onClick={() => setOpenList(!openList)} />
      </div>
      {openList ? (
        <>
          <ul className="list-box">
            {states.map((state) => (
              <li
                className="items"
                key={state.abbreviation}
                value={state.abbreviation}
                onClick={() => {
                  selectState([state.name, state.abbreviation]);
                  setOnSelectName(state.name);
                  setOpenList(false)
                }}
              >
                {state.name}
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

export default SelectStates;

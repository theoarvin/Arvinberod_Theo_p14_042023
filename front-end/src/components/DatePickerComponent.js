import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerComponent({ idForLabel, setSelectDate }) {
  const [date, setDate] = useState(null);
  
  const formatDate = (date) => {
    const newDate = Date.parse(date);
    console.log(newDate);
    setSelectDate(newDate);
  }

  return (
    <div>
      <DatePicker
        selected={date}
        onChange={(date) => {
          formatDate(date)
          setDate(date);
        }}
        dateFormat="yyyy/MM/dd"
        showYearDropdown
        yearDropdownItemNumber={115}
        scrollableYearDropdown={true}
        minDate={new Date("01/01/1902")}
        maxDate={new Date()}
        strictParsing={true}
        id={idForLabel}
      />
    </div>
  );
}

export default DatePickerComponent;

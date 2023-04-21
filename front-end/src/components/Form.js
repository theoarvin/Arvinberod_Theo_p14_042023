import React, { useEffect, useState } from "react";
import SelectDepartment from "../components/SelectDepartment";
import SelectStates from "../components/SelectStates";
import DatePickerComponent from "../components/DatePickerComponent";
import { useDispatch } from "react-redux";
import { getUserData } from "../feature/user.slice";
import validateForm from "../services/valideForm";

function Form({ setOpenModal }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedDateBirth, setSelectDateBirth] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectStreet, setSelectStreet] = useState("");
  const [selectCity, setSelectCity] = useState("");
  const [selectState, setSelectState] = useState("");
  const [zipCode, setZipCode] = useState();
  const [selectDepartment, setSelectDepartment] = useState("");
  const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const verifInput = () => {
    if (submit) {
      const isFormValid = validateForm(data);
      setErrors(isFormValid);
      if (Object.keys(isFormValid).length === 0) {
        return true;
      } else {
        return false;
      }
    }
  };

  useEffect(() => {
    verifInput();
  }, [submit, selectDepartment, selectDate, selectedDateBirth, selectState]);

  const data = {
    firstName,
    lastName,
    dateOfBirth: selectedDateBirth,
    date: selectDate,
    street: selectStreet,
    city: selectCity,
    state: selectState[1],
    zipCode,
    department: selectDepartment,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    const inputIsValid = verifInput();
    if (inputIsValid) {
      dispatch(getUserData(data));
      setOpenModal(true);
    }
  };

  return (
    <form
      data-testid="submit-form"
      onSubmit={(e) => handleSubmit(e)}
      id="create-employee"
    >
      <div className="form-infos">
        <div className="form-name">
          <div>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) => {
              setFirstName(e.target.value);
              verifInput();
            }}
            data-testid="firstName"
          />
          <div
            data-testid="error-firstName"
            className="error"
            style={{ color: "red" }}
          >
            {errors.firstName}
          </div>
          </div>
          <div>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) => {
              setLastName(e.target.value);
              verifInput();
            }}
          />
          <div
            data-testid="error-lastName"
            className="error"
            style={{ color: "red" }}
          >
            {errors.lastName}
          </div>
          </div>
          

          
        </div>
        <div className="form-date">
          <div>
          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePickerComponent
            idForLabel={"date-of-birth"}
            setSelectDate={setSelectDateBirth}
          />
          <div data-testid="error-dateOfBirth" className="error" style={{ color: "red" }}>
            {errors.selectedDateBirth}
          </div>
          </div>
          <div>
          <label htmlFor="start-date">Start Date</label>
          <DatePickerComponent
            idForLabel={"start-date"}
            setSelectDate={setSelectDate}
          />
          <div className="error" style={{ color: "red" }}>
            {errors.selectDate}
          </div>
          </div>

          
        </div>
      </div>

      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          onChange={(e) => {
            setSelectStreet(e.target.value);
            verifInput();
          }}
        />
        <div
          data-testid="error-street"
          className="error"
          style={{ color: "red" }}
        >
          {errors.selectStreet}
        </div>

        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          onChange={(e) => {
            setSelectCity(e.target.value);
            verifInput();
          }}
        />
        <div
          data-testid="error-city"
          className="error"
          style={{ color: "red" }}
        >
          {errors.selectCity}
        </div>

        <label htmlFor="state">State</label>
        <SelectStates selectState={setSelectState} />
        <div className="error" style={{ color: "red" }}>
          {errors.selectState}
        </div>

        <label htmlFor="zip-code">Zip Code</label>
        <input
          id="zip-code"
          type="number"
          onChange={(e) => {
            setZipCode(e.target.value);
            verifInput();
          }}
        />
        <div
          data-testid="error-zipCode"
          className="error"
          style={{ color: "red" }}
        >
          {errors.zipCode}
        </div>
      </fieldset>

      <label htmlFor="department">Department</label>
      <SelectDepartment selectDepartment={setSelectDepartment} />
      <div className="error" style={{ color: "red" }}>
        {errors.selectDepartment}
      </div>

      <button className="save-btn" type="submit">Save</button>
    </form>
  );
}

export default Form;

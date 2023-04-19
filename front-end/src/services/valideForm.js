const validateForm = (data) => {
    
    const errors = {};
    if (!data.firstName) {
      errors.firstName = "First name is required";
    }
    else if(data.firstName.length < 3){
      errors.firstName = "3 characters minimum";
    }
    if (!data.lastName) {
      errors.lastName = "Last name is required";
    }
    else if(data.lastName.length < 3){
      errors.lastName = "3 characters minimum";
    }
    if (!data.dateOfBirth) {
      errors.selectedDateBirth = "Date of birth is required";
    }
    if (!data.date) {
      errors.selectDate = "Date is required";
    }
    if (!data.street) {
      errors.selectStreet = "Street is required";
    }
    else if(data.street.length < 3){
        errors.selectStreet = "3 characters minimum";
    }
    if (!data.city) {
      errors.selectCity = "City is required";
    }
    else if(data.city.length < 3){
        errors.selectCity = "3 characters minimum";
    }
    if (!data.state) {
      errors.selectState = "State is required";
    }
    if (!data.zipCode) {
      errors.zipCode = "Zip code is required";
    }
    else if(data.zipCode.length < 3){
        errors.zipCode = "3 characters minimum";
    }
    if (!data.department) {
      errors.selectDepartment = "Department is required";
    }
    
   //setErrors(errors);
   // return Object.keys(errors).length === 0;
   return errors
  };
export default validateForm
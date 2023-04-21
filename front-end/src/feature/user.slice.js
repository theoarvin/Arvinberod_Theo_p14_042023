import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [
    {
        "firstName": "theo",
        "lastName": "arvin",
        "dateOfBirth": 846108000000,
        "date": 1683496800000,
        "street": "246 quai des remparts",
        "city": "montluel",
        "state": "AK",
        "zipCode": "01120",
        "department": "Sales"
    },
    {
        "firstName": "thais",
        "lastName": "momo",
        "dateOfBirth": 914972400000,
        "date": 1667080800000,
        "street": "404 avenue de la fruitière",
        "city": "sciez",
        "state": "IA",
        "zipCode": "74140",
        "department": "Legal"
    },
    {
        "firstName": "tom",
        "lastName": "arvin",
        "dateOfBirth": 1004655600000,
        "date": 1596578400000,
        "street": "300 av des champ",
        "city": "belignieux",
        "state": "VA",
        "zipCode": "01360",
        "department": "Human Resources"
    }
],
  },
  reducers: {
    getUserData(state, action) {
      state.userData.push(action.payload);
    },
  },
});

export const { getUserData } = userSlice.actions;
export default userSlice.reducer;

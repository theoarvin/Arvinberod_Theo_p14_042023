import { fireEvent, getByText, render, screen, userEvent, waitFor } from "@testing-library/react";
import React from "react";
import Form from "../components/Form";
import Home from "../pages/Home";
import { Provider } from "react-redux";
import store from "../app/store";
import "@testing-library/jest-dom/extend-expect";
import  Routes  from "../Routes"

describe("<Form /> ", () => {
  it("Should be render form", () => {
    render(
      <Provider store={store}>
        <Form setOpenModal={false} />
      </Provider>
    );
  });
});

describe("When you fill in a field incorrectly", () => {
  it("firstName: Should display an error message when less than 3 characters are entered", () => {
    render(
      <Provider store={store}>
        <Form setOpenModal={false} />
      </Provider>
    );

    const firstName = screen.getByLabelText("First Name");
    fireEvent.change(firstName, { target: { value: "" } });
    const errorText = screen.getByTestId("error-firstName");

    const btnSave = screen.getByText("Save");

    fireEvent.click(btnSave);
    expect(errorText).toHaveTextContent("First name is required");
  });

  it("lastName: Should display an error message when less than 3 characters are entered", () => {
    render(
      <Provider store={store}>
        <Form setOpenModal={false} />
      </Provider>
    );

    const lastName = screen.getByLabelText("Last Name");
    fireEvent.change(lastName, { target: { value: "" } });
    const errorText = screen.getByTestId("error-lastName");

    const btnSave = screen.getByText("Save");

    fireEvent.click(btnSave);
    expect(errorText).toHaveTextContent("Last name is required");
  });

  it("street: Should display an error message when less than 3 characters are entered", () => {
    render(
      <Provider store={store}>
        <Form setOpenModal={false} />
      </Provider>
    );

    const dateOfBirth = screen.getByLabelText("Street");
    fireEvent.change(dateOfBirth, { target: { value: "" } });
    const errorText = screen.getByTestId("error-street");

    const btnSave = screen.getByText("Save");
    
    fireEvent.click(btnSave);
    expect(errorText).toHaveTextContent("Street is required");
  });

  it("city: Should display an error message when less than 3 characters are entered", () => {
    render(
      <Provider store={store}>
        <Form setOpenModal={false} />
      </Provider>
    );

    const city = screen.getByLabelText("City");
    fireEvent.change(city, { target: { value: "" } });
    const errorText = screen.getByTestId("error-city");

    const btnSave = screen.getByText("Save");
    
    fireEvent.click(btnSave);
    expect(errorText).toHaveTextContent("City is required");
  });

  it("zip code: Should display an error message when less than 3 characters are entered", () => {
    render(
      <Provider store={store}>
        <Form setOpenModal={false} />
      </Provider>
    );

    const city = screen.getByLabelText("Zip Code");
    fireEvent.change(city, { target: { value: "" } });
    const errorText = screen.getByTestId("error-zipCode");

    const btnSave = screen.getByText("Save");
    fireEvent.click(btnSave);
    expect(errorText).toHaveTextContent("Zip code is required");
  });
});

describe("When you correctly all field", () => {
  it('Should be display modal confirmation', () => {

  })
})



describe('Form component', ()  => {
  test.only('submitting the form with valid inputs should call getUserData and setOpenModal', async () => {
    render(
        <Provider store={store}>
          <Routes>
            <Home />
          </Routes>
        </Provider>
      );

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText(/first name/i), 'John');
    fireEvent.change(screen.getByLabelText(/last name/i), 'Doe');
    fireEvent.change(screen.getByLabelText(/date of birth/i), { target: { value: '01/01/1990' } });
    fireEvent.change(screen.getByLabelText(/start date/i), { target: { value: '01/01/2022' } });
    fireEvent.change(screen.getByLabelText(/street/i), '123 Main St');
    fireEvent.change(screen.getByLabelText(/city/i), 'Anytown');
    fireEvent.change(screen.getByLabelText(/zip code/i), '12345');

    // Submit the form
    const btnSave = screen.getByText("Save");
    fireEvent.click(btnSave);
    
    // Check that the form was submitted successfully
    await waitFor(() => {
        expect(screen.getAllByText('Employee Created!')).toBeInTheDocument()
    })    
  });
});




import { Provider } from "react-redux";
import Header from "../Header";
import {fireEvent, render, screen} from "@testing-library/react";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe("Header Component Test Cases", () => {

    it("Should load with login button inthe header component", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore} >
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginbutton = screen.getByRole("button", {name: "LogIn"});
        // const loginbutton = screen.getByText("LogIn");

        expect(loginbutton).toBeInTheDocument();

    }); 

    it("Should render header component with cart items 0", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore} >
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const cartItem = screen.getByText("Cart (0)")

        expect(cartItem).toBeInTheDocument();

    });

    it("Should render header component with cart items", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore} >
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const cartItem = screen.getByText(/Cart/)

        expect(cartItem).toBeInTheDocument();

    });

    it("Should change login button to logout on Click event in the header", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore} >
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginBtn = screen.getByRole("button", { name: "LogIn" });

        fireEvent.click(loginBtn);

        const logoutBtn = screen.getByRole("button", {name: "LogOut"});

        expect(logoutBtn).toBeInTheDocument();

    });

});
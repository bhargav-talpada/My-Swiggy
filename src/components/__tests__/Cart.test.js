import {fireEvent, render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import ResturentMenu from "../ResturentMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA_NAME from "../mocks/mockResMenuData.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from '../Cart';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA_NAME);
        }
    })
})

test('should load resturent menu component', async () => { 

    await act( async() => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <ResturentMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        );
    });

    const accodianHeader = screen.getByText("Pizza (8)");

    fireEvent.click(accodianHeader);

    const items = screen.getAllByTestId('foodItems');

    expect(items.length).toBe(8);

    expect(screen.getByText("Cart (0)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", {name: "Add"});

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart (1)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(9);

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(8);

    expect(screen.getByText("Go & Do Some More Shopping..."));

});
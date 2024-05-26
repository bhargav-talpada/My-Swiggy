import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

describe("Contact Us Page Test Cases", () => {

    global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(MOCK_DATA);
            },
        });
    });

    // afterAll(() => {
    //     console.log('after all');
    // });

    // afterEach(() => {
    //     console.log('after each');
    // });

    // beforeAll(() => {
    //     console.log('before all');
    // });

    // beforeEach(() => {
    //     console.log('before each');
    // });

    test('should render the body component with search button', async () => { 
        await act(async () => 
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
        );  

        const searchBtn = screen.getByRole("button", {name: "Search"});

        expect(searchBtn).toBeInTheDocument();
        
    });

    test('should render the body component filter with Top Rated Resturents', async () => { 
        await act(async () => 
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
        );

        const cardsBeforeFilter = screen.getAllByTestId("resCard");

        expect(cardsBeforeFilter.length).toBe(20);

        const ratedBtn = screen.getByRole("button", {name: "Top Rated Resturents"});

        fireEvent.click(ratedBtn);

        const cardsAfterFilter = screen.getAllByTestId("resCard");

        expect(cardsAfterFilter.length).toBe(12);

    });

    test('should render the body component with search input with on change event', async () => { 
        await act(async () => 
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
        );

        const cardsBeforeSearch = screen.getAllByTestId("resCard");

        expect(cardsBeforeSearch.length).toBe(20);

        const searchBtn = screen.getByRole("button", {name: "Search"});

        const searchInput = screen.getByTestId("searchInput");

        fireEvent.change(searchInput, {target: {value:"pizza"}});

        fireEvent.click(searchBtn);

        const cardsAfterSearch = screen.getAllByTestId("resCard");

        expect(cardsAfterSearch.length).toBe(4);

    });

});
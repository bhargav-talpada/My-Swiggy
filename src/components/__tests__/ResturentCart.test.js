import ResturentCart from "../ResturentCart";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json"

test('should render ResturentCart component with props data', () => { 
    render(<ResturentCart resData={MOCK_DATA} />);

    const cardName = screen.getByText("Pizza Hut");

    expect(cardName).toBeInTheDocument();
});
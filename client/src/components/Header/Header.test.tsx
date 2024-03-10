import React from "react";
import { useAppContext } from "../../context/AppContext";
import Header from "./Header";
import { render } from "@testing-library/react";
import { HOME24_LOGO_LABEL } from "../../constants/localization";
import { ThemeProvider } from "@emotion/react";

// Mocked products data
const mockedProducts = [
  { name: "Product 1", prices: { currency: "USD", regular: { value: 10 } } },
  { name: "Product 2", prices: { currency: "USD", regular: { value: 20 } } },
];

jest.mock("../../context/appContext", () => ({
  useAppContext: jest.fn(),
}));

const mockTheme = {
  colors: {
    primary: "#000",
    secondary: "#ff",
    buttonPrimary: "#0bda51",
    buttonHover: "#0818a8",
  },
};

describe("Header", () => {
  beforeEach(() => {
    (useAppContext as jest.Mock).mockReturnValue({
      products: mockedProducts,
      cartProducts: [],
      updateCartProducts: jest.fn(),
    });
  });

  test("Should render the logo and cart title", () => {
    const { getByText, getByPlaceholderText } = render(
        <ThemeProvider theme={mockTheme}>
          <Header />
        </ThemeProvider>
      );
      
      expect(getByText(HOME24_LOGO_LABEL)).toBeInTheDocument();
      expect(getByPlaceholderText("Search")).toBeInTheDocument();
  });
});

import React from "react";
import { render } from "@testing-library/react";
import Cart from "./Cart";
import { useAppContext } from "../../context/AppContext";

// Mocking useAppContext hook
jest.mock("../../context/AppContext");

describe("Cart Component", () => {
  const mockedProducts = [
    { name: "Product 1", prices: { currency: "USD", regular: { value: 10 } } },
    { name: "Product 2", prices: { currency: "USD", regular: { value: 20 } } },
  ];

  const cartProducts = [
    {
      name: "Product 1",
      images: [{ path: "image1.jpg" }],
      prices: {
        regular: {
          value: 10,
        },
      },
    },
    {
      name: "Product 2",
      images: [{ path: "image2.jpg" }],
      prices: {
        regular: {
          value: 20,
        },
      },
    },
  ];

  beforeEach(() => {
    // Mocking context values
    (useAppContext as jest.Mock).mockReturnValue({
      products: mockedProducts,
      cartProducts: cartProducts,
      updateCartProducts: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders cart with products and total", () => {
    const { getByText } = render(<Cart setShowCart={() => {}} />);

    expect(getByText("Product 1")).toBeInTheDocument();
    expect(getByText("Product 2")).toBeInTheDocument();
    expect(getByText("Total:")).toBeInTheDocument();
    expect(getByText("Continue")).toBeInTheDocument();
  });
});

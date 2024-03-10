import React from "react";
import ProductCardList from "./ProductList";
import { render } from "@testing-library/react";
import { useAppContext } from "../../context/AppContext";
import { Category } from "../../types/types";
import { NO_PRODUCTS_LABEL } from "../../constants/localization";

const mockCategory: Category = {
  name: "Furniture",
  categoryArticles: {
    articles: [
      {
        name: "Table",
        variantName: "Table",
        prices: {
          currency: "USD",
          regular: {
            value: 1099,
          },
        },
        images: [
          {
            path: "table-new.png",
          },
        ],
      },
    ],
  },
  articleCount: 2,
  childrenCategories: {
    list: [
      {
        name: "Tables",
        urlPath: "table",
      },
      {
        name: "Chairs",
        urlPath: "chair",
      },
      {
        name: "Boxes",
        urlPath: "box",
      },
    ],
  },
};

jest.mock("../../context/AppContext", () => ({
  useAppContext: jest.fn(),
}));

describe("ProductList", () => {
  test("Should return no products when products are not available", () => {
    (useAppContext as jest.Mock).mockReturnValue({
      products: [],
      productCount: mockCategory.articleCount,
      categoryName: mockCategory.name,
    });
    const { getByText } = render(<ProductCardList />);
    expect(getByText(NO_PRODUCTS_LABEL)).toBeInTheDocument();
  });

  test("Should render available products in the cards", () => {
    (useAppContext as jest.Mock).mockReturnValue({
        products: mockCategory.categoryArticles.articles,
        itemCount: mockCategory.articleCount,
        categoryName: mockCategory.name,
      });
    const { getByText } = render(<ProductCardList />);

    expect(getByText("Table")).toBeInTheDocument();
    expect(getByText("Add to cart")).toBeInTheDocument();
  });
});

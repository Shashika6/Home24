import React from "react";
import { render } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { Category } from "../../types/types";
import { useAppContext } from "../../context/AppContext";
import { NO_CATEGORIES_LABEL } from "../../constants/localization";
import { ThemeProvider } from "@emotion/react";

const mockTheme = {
  colors: {
    primary: "#000",
    secondary: "#ff",
    buttonPrimary: "#0bda51",
    buttonHover: "#0818a8",
  },
};


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
  articleCount: 5,
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

describe("Sidebar", () => {
  test("Should render no categories lable if not available", () => {
    (useAppContext as jest.Mock).mockReturnValue({ categories: [] });

    const { getByText } = render(
      <ThemeProvider theme={mockTheme}>
        <Sidebar />
      </ThemeProvider>
    );

    expect(getByText(NO_CATEGORIES_LABEL)).toBeInTheDocument();
  });

  test("renders categories", () => {
    (useAppContext as jest.Mock).mockReturnValue({
      categories: mockCategory.childrenCategories.list,
    });

    const { getByText } = render(
      <ThemeProvider theme={mockTheme}>
        <Sidebar />
      </ThemeProvider>
    );

    expect(getByText("Tables")).toBeInTheDocument();
    expect(getByText("Chairs")).toBeInTheDocument();
  });
});

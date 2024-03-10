import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react"; 
import Footer from "./Footer";
import { FOOTER_LABEL } from "../../constants/localization";

describe("Footer", () => {
  test("Should render the correct footer", () => {
    const mockTheme = {
      colors: {
        primary: "#000",
        secondary: "#ff",
        buttonPrimary: "#0bda51",
        buttonHover: "#0818a8"
      },
    };

    const { getByText } = render(
      <ThemeProvider theme={mockTheme}>
        <Footer />
      </ThemeProvider>
    );

    const footerElement = getByText(FOOTER_LABEL);
    expect(footerElement).toBeInTheDocument();
  });

  // Add more tests as needed
});

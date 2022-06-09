import { render, screen } from "@testing-library/react";
import Homepage from "./index";

describe("Homepage elements should be rendered", () => {
  test("title should be rendered", () => {
    render(<Homepage />);
    const titleElement = screen.getByRole("heading", { name: "Pokedex" });
    expect(titleElement).toBeInTheDocument();
  });

  test("logo image should be rendered", () => {
    render(<Homepage />);
    const logoImage = screen.getByRole("img", { name: "Logo" });
    expect(logoImage).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import Search from "./index";

describe("Search elements should be rendered", () => {
  test("searchbar input element should be rendered", () => {
    render(<Search />);
    const searchInput = screen.getByRole("textbox", {
      placeholder: "Search for a pokemon",
    });
    expect(searchInput).toBeInTheDocument();
  });
  test("search icon should be rendered", () => {
    render(<Search />);
    const searchIcon = screen.getByRole("img", { name: "Search" });
    expect(searchIcon).toBeInTheDocument();
  });
});

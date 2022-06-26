/* eslint-disable testing-library/no-unnecessary-act */
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Card from "./index";
import axios from "axios";
import { act } from "react-dom/test-utils";
const URL_FETCH = "https://pokeapi.co/api/v2/pokemon/25";

jest.mock("axios");

function mockCall() {
  axios.get.mockResolvedValueOnce({
    data: {
      name: "pikachu",
      sprites: {
        other: {
          dream_world: {
            front_default:
              "https://icon-library.com/images/image-unavailable-icon/image-unavailable-icon-25.jpg",
          },
          "official-artwork": {
            front_default:
              "https://icon-library.com/images/image-unavailable-icon/image-unavailable-icon-25.jpg",
          },
        },
      },
      types: [
        {
          type: {
            name: "electric",
          },
        },
      ],
    },
  });
}

describe("Card elements should be rendered", () => {
  afterEach(cleanup);

  test("loading text must appear when url is not provided", async () => {
    render(<Card />);
    const loadingText = await screen.findByRole("heading", { name: "Loading" });
    expect(loadingText).toBeInTheDocument();
  });

  test("fetch is not called if there is no url provided", () => {
    render(<Card />);
    expect(axios.get).not.toHaveBeenCalled();
  });

  test("fetch when component is rendered and there is an url provided", () => {
    mockCall();
    act(() => render(<Card url={URL_FETCH} />));
    expect(axios.get).toHaveBeenCalledWith(URL_FETCH);
  });

  test("card must be rendered when url and name are provided", async () => {
    mockCall();
    act(() => render(<Card url={URL_FETCH} name="pikachu" />));

    await waitFor(() => {
      const cardDiv = screen.getByTestId("pikachu card");
      expect(cardDiv).toBeInTheDocument();
    });

    await waitFor(() => {
      const name = screen.getByRole("heading", { name: "Pikachu" });
      expect(name).toBeInTheDocument();
    });

    await waitFor(() => {
      const type = screen.getByTestId("electric type");
      expect(type).toBeInTheDocument();
    });

    await waitFor(() => {
      const image = screen.getByRole("img", { name: "pikachu image" });
      expect(image).toBeInTheDocument();
    });
  });

  test("modal should open when card is clicked", async () => {
    mockCall();
    act(() => render(<Card url={URL_FETCH} name="pikachu" />));

    await waitFor(() => {
      const cardDiv = screen.getByTestId("pikachu card");

      fireEvent.click(cardDiv);
      expect(screen.getByTestId("modal")).toBeInTheDocument();
    });
  });
});

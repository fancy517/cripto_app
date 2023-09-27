import renderer from "react-test-renderer";
import App from "./App";
import mockTokensList from "./src/mock/mockTokensList";

jest.mock("./src/api", () => {
  return jest.fn().mockImplementation(() => {
    return {
      getAllCriptoTickets: async () => {
        mockTokensList;
      },
    };
  });
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe("<App />", () => {
  it("has 1 child", () => {
    const rawApp = renderer.create(<App />).toJSON();
    expect(rawApp).toMatchSnapshot();
  });
});

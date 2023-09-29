import renderer from "react-test-renderer";
import App from "./App";
import mockTokensList from "./src/mock/mockTokensList";
import TokensList from "./src/mock/mockTokensList";
import mockTokenMock from "./src/mock/mockToken";
import mockCryptoMarket from "./src/mock/mockCryptoMarket";
import mockCryptoSearch from "./src/mock/mockCryptoSearch";

jest.mock("./src/api", () => {
  return jest.fn().mockImplementation(() => {
    return {
      getAllCriptoTickets: async () => {
        mockTokensList;
      },
    };
  });
});

// This is the section where we mock `fetch`
const unmockedFetch = global.fetch;

function customResponses(url: any) {
  switch (url) {
    case "https://api.coinlore.net/api/tickers/?start=0&limit=10":
      return { data: TokensList };
    case "https://api.coinlore.net/api/ticker/?id=0":
      return [mockTokenMock];
    case "https://api.coinlore.net/api/coin/markets/?id=0":
      return [mockCryptoMarket];
    case "https://www.coinlore.com/data/coin_search.json":
      return [mockCryptoSearch];
  }
}

beforeAll(() => {
  global.fetch = (url): Promise<any> => {
    return Promise.resolve({
      json: () => Promise.resolve(customResponses(url)),
    });
  };
});

afterAll(() => {
  global.fetch = unmockedFetch;
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

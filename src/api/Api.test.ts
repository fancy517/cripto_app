import mockCryptoMarket from "../mock/mockCryptoMarket";
import mockCryptoSearch from "../mock/mockCryptoSearch";
import mockTokenMock from "../mock/mockToken";
import TokensList from "../mock/mockTokensList";
import Api from "./Api";

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

//declared api outside testing scope
const api = new Api();

//tests
describe("API tests", () => {
  it("getAllCriptoTickets should return two tokens", async () => {
    const response = await api.getAllCriptoTickets(0);
    expect(response.length).toBe(2);
  });
  it("getCriptoDetails should return one token", async () => {
    const response = await api.getCriptoDetails("0");
    expect(response.length).toBe(1);
  });
  it("getCriptoMarket should return one token", async () => {
    const response = await api.getCriptoMarket(0);
    expect(response.length).toBe(1);
  });
  it("getCriptoSearch should return one search result token", async () => {
    const response = await api.getCriptoSearch();
    expect(response.length).toBe(1);
  });
});

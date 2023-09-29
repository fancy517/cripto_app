import React from "react";
import renderer from "react-test-renderer";
import ListOfCards from "./index";
import { NavigationContainer } from "@react-navigation/native";
import mockTokensList from "../../mock/mockTokensList";
import TokensList from "../../mock/mockTokensList";
import mockTokenMock from "../../mock/mockToken";
import mockCryptoMarket from "../../mock/mockCryptoMarket";
import mockCryptoSearch from "../../mock/mockCryptoSearch";

jest.mock("../../api", () => {
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

describe("ListOfCards Tests", () => {
  it("matches snapshot", () => {
    const jsonElement = renderer
      .create(
        <NavigationContainer>
          <ListOfCards queryList={[]} />
        </NavigationContainer>
      )
      .toJSON();
    expect(jsonElement).toMatchSnapshot();
  });
});

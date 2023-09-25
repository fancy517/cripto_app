import React from "react";
import renderer from "react-test-renderer";
import ListOfCards from "./index";
import { NavigationContainer } from "@react-navigation/native";
import Token from "../../types/Token";

const mockTokens: Token[] = [
  {
    csupply: "",
    id: "1",
    market_cap_usd: "",
    msupply: "",
    name: "2",
    nameid: "",
    percent_change_1h: "",
    percent_change_24h: "",
    percent_change_7d: "",
    price_btc: "",
    price_usd: "",
    rank: 1,
    symbol: "",
    tsupply: "",
    volume24: 1,
    volume24a: 1,
  },
  {
    csupply: "",
    id: "2",
    market_cap_usd: "",
    msupply: "",
    name: "2",
    nameid: "",
    percent_change_1h: "",
    percent_change_24h: "",
    percent_change_7d: "",
    price_btc: "",
    price_usd: "",
    rank: 2,
    symbol: "",
    tsupply: "",
    volume24: 2,
    volume24a: 2,
  },
];

jest.mock("../../api", () => {
  return jest.fn().mockImplementation(() => {
    return {
      getAllCriptoTickets: async () => mockTokens,
    };
  });
});

describe("ListOfCards Tests", () => {
  it("matches snapshot", () => {
    const jsonElement = renderer
      .create(
        <NavigationContainer>
          <ListOfCards />
        </NavigationContainer>
      )
      .toJSON();
    expect(jsonElement).toMatchSnapshot();
  });
});

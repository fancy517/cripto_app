import React from "react";
import { create, act } from "react-test-renderer";
import TokenCard from "./index";
import { NavigationContainer } from "@react-navigation/native";
// import Token from "../../types/Token";
jest.setTimeout(1000);
const token = {
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
};

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
jest.useFakeTimers();

describe("TokenCard Tests", () => {
  it("matches snapshot", async () => {
    // await sleep(2000);
    let jsonElement = create(
      <NavigationContainer>
        <TokenCard token={token} />
      </NavigationContainer>
    ).toJSON();
    act(() => {
      expect(jsonElement).toMatchSnapshot();
    });
  });
});

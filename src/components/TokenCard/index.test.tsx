import React from "react";
import { create, act } from "react-test-renderer";
import TokenCard from "./index";
import { NavigationContainer } from "@react-navigation/native";
import mockTokenMock from "../../mock/mockToken";
jest.setTimeout(1000);

jest.useFakeTimers();

describe("TokenCard Tests", () => {
  it("matches snapshot", async () => {
    let jsonElement = create(
      <NavigationContainer>
        <TokenCard token={mockTokenMock} />
      </NavigationContainer>
    ).toJSON();
    act(() => {
      expect(jsonElement).toMatchSnapshot();
    });
  });
});

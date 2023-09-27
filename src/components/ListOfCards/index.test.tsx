import React from "react";
import renderer from "react-test-renderer";
import ListOfCards from "./index";
import { NavigationContainer } from "@react-navigation/native";
import mockTokensList from "../../mock/mockTokensList";

jest.mock("../../api", () => {
  return jest.fn().mockImplementation(() => {
    return {
      getAllCriptoTickets: async () => {
        mockTokensList;
      },
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

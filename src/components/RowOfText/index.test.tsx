import React from "react";
import renderer from "react-test-renderer";
import RowOfText from "./index";

const name = "Name";
const value = "Value";

describe("RowOfText", () => {
  it("matches snapshot", () => {
    const jsonElement = renderer
      .create(<RowOfText name={name} value={value} />)
      .toJSON();

    console.log(jsonElement);
    expect(jsonElement).toMatchSnapshot();
  });

  it("has 2 child", () => {
    const jsonElement = renderer
      .create(<RowOfText name={name} value={value} />)
      .toJSON();

    expect(jsonElement?.children.length).toBe(2);
  });
});

import { FlatList, Text, View } from "react-native";
import React, { Component } from "react";
import Token from "../types/Token";
import TokenCard from "./TokenCard";

type listOfTokensProps = {
  listOfTokens: Token[];
};

export class ListOfCards extends Component<listOfTokensProps> {
  componentDidMount(): void {
    console.log(this.props);
  }
  render() {
    return (
      <FlatList
        data={this.props.listOfTokens}
        renderItem={({ item: token, index }) => (
          <TokenCard token={token} key={index} />
        )}
      />
    );
  }
}

export default ListOfCards;

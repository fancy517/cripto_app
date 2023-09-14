import { Text, View } from "react-native";
import React, { Component } from "react";
import Token from "../types/Token";

type TokenProps = {
  token: Token;
};

export class TokenCard extends Component<TokenProps> {
  state = {};
  render() {
    return (
      <View>
        <Text>{this.props.token.name}</Text>
      </View>
    );
  }
}

export default TokenCard;

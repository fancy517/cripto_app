import React, { Component } from "react";
import Token from "../types/Token";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

type TokenProps = {
  token: Token;
};

export class TokenCard extends Component<TokenProps> {
  state = {};
  render() {
    return (
      <Card style={style.cardContainer}>
        <Card.Content>
          <Text variant="titleLarge">{this.props.token.name}</Text>
          <Text variant="titleMedium">${this.props.token.price_usd} USD</Text>
        </Card.Content>
      </Card>
    );
  }
}

const style = StyleSheet.create({
  cardContainer: {
    margin: 5,
  },
});

export default TokenCard;

import React, { Component } from "react";
import Token from "../types/Token";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../types/StackParams";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type TokenProps = {
  token: Token;
};

type TicketDetailsProps = NativeStackNavigationProp<
  RootStackParamsList,
  "TicketDetails"
>;

export default function TokenCard({ token }: TokenProps) {
  const navigation = useNavigation<TicketDetailsProps>();
  return (
    <Card
      style={style.cardContainer}
      onPress={() => {
        navigation.navigate("TicketDetails", { ticketId: token.id });
      }}
    >
      <Card.Content>
        <Text variant="titleLarge">{token.name}</Text>
        <Text variant="titleMedium">${token.price_usd} USD</Text>
      </Card.Content>
    </Card>
  );
}

const style = StyleSheet.create({
  cardContainer: {
    margin: 5,
  },
});

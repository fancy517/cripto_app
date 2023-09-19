import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

import Api from "../api";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../types/StackParams";
import ListOfCards from "../components/ListOfCards";
import TopBar from "../components/TopBar";

type props = NativeStackScreenProps<RootStackParamsList, "StartPage">;
export default class StartPage extends Component<props> {
  render() {
    return (
      <View style={styles.container}>
        <TopBar />
        <ListOfCards />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});

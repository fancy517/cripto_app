import { StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../types/StackParams";
import ListOfCards from "../components/ListOfCards";
import TopBar from "../components/TopBar";

type props = NativeStackScreenProps<RootStackParamsList, "ListOfTokens">;
export default class ListOfTokens extends Component<props> {
  render() {
    return (
      <>
        <TopBar />
        <View style={styles.container}>
          <ListOfCards />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

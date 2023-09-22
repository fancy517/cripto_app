import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../types/StackParams";
import ListOfCards from "../components/ListOfCards";
import TopBar from "../components/TopBar";
import { Button } from "react-native-paper";

type props = NativeStackScreenProps<RootStackParamsList, "StartPage">;
export default class StartPage extends Component<props> {
  setNavigation = this.props.navigation.navigate;

  render() {
    const { navigation, route } = this.props;

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
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});

import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

import Api from "../api";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../types/StackParams";
import Token from "../types/Token";
import { Button } from "react-native-paper";
import ListOfCards from "../components/ListOfCards";

type props = NativeStackScreenProps<RootStackParamsList, "StartPage">;
export default class StartPage extends Component<props> {
  state = {
    currentPage: 0,
    listOfTokens: [],
    criptoApi: new Api(),
  };
  constructor(props: props) {
    super(props);
    this.state = {
      currentPage: 0,
      listOfTokens: [],
      criptoApi: new Api(),
    };
  }
  componentDidMount(): void {
    (async () => {
      const criptoApi = new Api();
      const listOfTokens = await criptoApi.getAllCriptoTickets(
        this.state.currentPage
      );
      this.setState({ ...this.state, listOfTokens });
    })();
  }

  prevPage = async () => {
    const prev = this.state.currentPage - 1;
    const listOfTokens = await this.state.criptoApi.getAllCriptoTickets(prev);
    this.setState({ ...this.state, listOfTokens, currentPage: prev });
  };

  nextPage = async () => {
    const next = this.state.currentPage + 1;
    const listOfTokens = await this.state.criptoApi.getAllCriptoTickets(next);
    this.setState({ ...this.state, listOfTokens, currentPage: next });
  };

  render() {
    const { listOfTokens } = this.state;
    return (
      <View>
        <ListOfCards listOfTokens={listOfTokens} />
        <View style={styles.container}>
          <Button onPress={() => this.prevPage()}>
            <Text>Anterior</Text>
          </Button>
          <Button onPress={() => this.nextPage()}>
            <Text>Siguiente</Text>
          </Button>
          L
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: 100,
    // flex: 1,
    flexDirection: "row",
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

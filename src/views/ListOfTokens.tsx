import { StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../types/StackParams";
import ListOfCards from "../components/ListOfCards";
import TopBar from "../components/TopBar/TopBar";
import Api from "../api/Api";
import SearchTokenItem from "../types/SearchTokenItem";

type props = NativeStackScreenProps<RootStackParamsList, "ListOfTokens">;
export default class ListOfTokens extends Component<props> {
  state = {
    query: "",
    queryList: [],
    api: new Api(),
    timer: null,
  };

  async setQuery(newQuery: string) {
    this.setState({
      ...this.state,
      query: newQuery,
    });
    if (newQuery !== "") {
      const query = this.makeQuery(newQuery);
    } else {
      this.setState({ ...this.state, query: "", queryList: [] });
    }
  }

  makeQuery = (queryText: string) => {
    setTimeout(async () => {
      let rawList = await this.state.api.getCriptoSearch();
      let filteredTokens = rawList.filter((element: SearchTokenItem) => {
        return element.names.find((name) => {
          return name.includes(queryText);
        });
      });
      const listOfRanks = filteredTokens.map((tiket) => tiket.rank);
      this.setState({ ...this.state, queryList: listOfRanks });
    }, 1000);
  };

  render() {
    return (
      <>
        <TopBar query={this.state.query} setQuery={this.setQuery.bind(this)} />
        <View style={styles.container}>
          <ListOfCards queryList={this.state.queryList} />
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

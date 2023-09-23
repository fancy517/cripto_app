import { Image, StyleSheet, View } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";
import React, { Component } from "react";
import { RootStackParamsList } from "../types/StackParams";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import TopBar from "../components/TopBar";
import Api from "../api";
import Token from "../types/Token";
import RowOfText from "../components/RowOfText";

type TicketDetailsProps = NativeStackScreenProps<
  RootStackParamsList,
  "TicketDetails"
>;

type TicketDetailsState = {
  ticketData: Token | undefined;
  criptoApi: Api;
};
export class TicketDetails extends Component<TicketDetailsProps> {
  state: TicketDetailsState = {
    ticketData: undefined,
    criptoApi: new Api(),
  };

  componentDidMount(): void {
    (async () => {
      const ticketData = await this.state.criptoApi.getCriptoDetails(
        this.props.route.params.ticketId
      );
      console.log(ticketData);

      this.setState({ ...this.state, ticketData });
    })();
  }
  render() {
    return (
      <>
        <TopBar title="Details" />
        <View style={style.container}>
          {this.state.ticketData ? (
            <>
              <Card style={style.card} mode="contained">
                <Card.Title
                  title={this.state.ticketData.name}
                  titleVariant="headlineMedium"
                  left={() => {
                    console.log(
                      `https://assets.coincap.io/assets/icons/${this.state.ticketData?.symbol.toLowerCase()}@2x.png`
                    );
                    return (
                      <Image
                        style={{ height: 40, width: 40 }}
                        source={{
                          uri: `https://assets.coincap.io/assets/icons/${this.state.ticketData?.symbol.toLowerCase()}@2x.png`,
                        }}
                      />
                    );
                  }}
                />
                <Card.Content>
                  <RowOfText
                    name="Rank:"
                    value={`#${this.state.ticketData.rank}`}
                  />
                  <RowOfText
                    name="Symbol:"
                    value={`${this.state.ticketData.symbol}`}
                  />
                  <RowOfText
                    name="Value:"
                    value={`$${this.state.ticketData.price_usd}`}
                  />
                </Card.Content>
              </Card>
              <Card style={style.card} mode="contained">
                <Card.Title
                  title="Market Variation"
                  titleVariant="headlineMedium"
                />
                <Card.Content>
                  <RowOfText
                    name="Last Hour:"
                    value={`${this.state.ticketData.percent_change_1h}%`}
                  />
                  <RowOfText
                    name="Last 24 Hours:"
                    value={`${this.state.ticketData.percent_change_24h}%`}
                  />
                  <RowOfText
                    name="Last 7 Days:"
                    value={`${this.state.ticketData.percent_change_7d}%`}
                  />
                </Card.Content>
              </Card>
              <Card style={style.card} mode="contained">
                <Card.Title
                  title="Market Volume"
                  titleVariant="headlineMedium"
                />
                <Card.Content>
                  <RowOfText
                    name="Total Token Supply:"
                    value={`${
                      Math.round(Number(this.state.ticketData.csupply)) / 10
                    }`}
                  />
                  <RowOfText
                    name="Volume last 24 Hours:"
                    value={`${
                      Math.round(Number(this.state.ticketData.volume24)) / 10
                    }`}
                  />
                  <RowOfText
                    name="Volume total:"
                    value={`${
                      Math.round(Number(this.state.ticketData.volume24a)) / 10
                    }`}
                  />
                </Card.Content>
              </Card>
            </>
          ) : (
            <></>
          )}
        </View>
      </>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    width: "90%",
    margin: 16,
    padding: 16,
  },
  headerText: {
    paddingTop: 10,
    height: 60,
    textAlign: "center",
  },
  divider: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TicketDetails;

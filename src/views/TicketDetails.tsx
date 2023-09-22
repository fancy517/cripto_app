import { Text, View } from "react-native";
import React, { Component } from "react";
import { RootStackParamsList } from "../types/StackParams";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import TopBar from "../components/TopBar";

type TicketDetailsProps = NativeStackScreenProps<
  RootStackParamsList,
  "TicketDetails"
>;
export class TicketDetails extends Component<TicketDetailsProps> {
  render() {
    return (
      <>
        <TopBar />
        <View>
          <Text>{this.props.route.params.ticketId}</Text>
        </View>
      </>
    );
  }
}

export default TicketDetails;

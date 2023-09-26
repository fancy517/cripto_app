import Token from "../../types/Token";
import { Card } from "react-native-paper";
import { Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../../types/StackParams";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RowOfText from "../RowOfText";

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
      mode="contained"
    >
      <Card.Title
        title={token.name}
        titleVariant="headlineMedium"
        left={() => (
          <Image
            style={{ height: 40, width: 40 }}
            source={{
              uri: `https://assets.coincap.io/assets/icons/${token.symbol.toLowerCase()}@2x.png`,
            }}
          />
        )}
      />
      <Card.Content>
        <RowOfText name="Price:" value={`$${token.price_usd} USD`} />
        <RowOfText
          name="Last 24 Hours:"
          value={`${token.percent_change_24h}%`}
        />
      </Card.Content>
    </Card>
  );
}

const style = StyleSheet.create({
  cardContainer: {
    margin: 5,
  },
  title: {
    marginTop: 0,
  },
});

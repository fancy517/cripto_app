import TokenCard from "./TokenCard";
import Token from "../../types/Token";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../types/StackParams";
import { useNavigation } from "@react-navigation/native";

type TokenProps = {
  token: Token;
};

type TicketDetailsProps = NativeStackNavigationProp<
  RootStackParamsList,
  "TicketDetails"
>;

const TokenCardWithNavigator = ({ token }: TokenProps) => {
  const navigation = useNavigation<TicketDetailsProps>();
  return <TokenCard token={token} navigate={navigation.navigate} />;
};

export default TokenCardWithNavigator;

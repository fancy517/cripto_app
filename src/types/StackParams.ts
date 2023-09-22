import Token from "./Token";

type PageInfo = { currentPage: number; listOfTokens: Token[] };

export type RootStackParamsList = {
  Home: undefined;
  StartPage: PageInfo;
  TiketDetails: { ticketId: number };
  ListOfCharacters: PageInfo;
  ListOfLocations: PageInfo;
  ListOfEpisodes: PageInfo;
};

import Token from "./Token";

type PageInfo = { currentPage: number; listOfTokens: Token[] };

export type RootStackParamsList = {
  Home: undefined;
  StartPage: PageInfo;
  ListOfCharacters: PageInfo;
  ListOfLocations: PageInfo;
  ListOfEpisodes: PageInfo;
};

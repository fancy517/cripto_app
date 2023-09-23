import Token from "./Token";

type PageInfo = { currentPage: number; listOfTokens: Token[] };

export type RootStackParamsList = {
  ListOfTokens: PageInfo | undefined;
  TicketDetails: { ticketId: string };
};

import Token from "./Token";

type PageInfo = { currentPage: number; listOfTokens: Token[] };

export type RootStackParamsList = {
  StartPage: PageInfo | undefined;
  TicketDetails: { ticketId: string };
};

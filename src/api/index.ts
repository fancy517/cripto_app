import * as allUrls from "../constants/urls";
import Token from "../types/Token";

export default class Api {
  async getAllCriptoTickets(page: number): Promise<Token[]> {
    const rawResult = await fetch(
      `${allUrls.tickets_url}?start=${page * 10}&limit=10`
    );
    const result = await rawResult.json();
    return result.data;
  }

  async getCriptoDetails(id: string): Promise<Token> {
    const rawResult = await fetch(`${allUrls.ticket_details_url}?id=${id}`);
    const result = await rawResult.json();
    return result[0];
  }

  async getCriptoMarket(id: number): Promise<Token[]> {
    const rawResult = await fetch(`${allUrls.markets_url}?id=${id}`);
    const result = await rawResult.json();
    return result.data;
  }
}

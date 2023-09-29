import * as allUrls from "../constants/urls";
import SearchTokenItem from "../types/SearchTokenItem";
import Token from "../types/Token";

export default class Api {
  async getAllCriptoTickets(page: number): Promise<Token[]> {
    try {
      const rawResult = await fetch(
        `${allUrls.tickets_url}?start=${page * 10}&limit=10`
      );
      const result = await rawResult.json();
      return result.data;
    } catch (error) {
      console.log("getAllCriptoTickets", error);
    }
    return [];
  }

  async getCriptoDetails(id: string): Promise<Token[]> {
    try {
      const rawResult = await fetch(`${allUrls.ticket_details_url}?id=${id}`);
      const result = await rawResult.json();
      return result;
    } catch (err) {
      console.log("getCriptoDetails", err);
    }
    return [];
  }

  async getCriptoMarket(id: number): Promise<Token[]> {
    try {
      const rawResult = await fetch(`${allUrls.markets_url}?id=${id}`);
      const result = await rawResult.json();
      return result;
    } catch (err) {
      console.log("getCriptoMarket", err);
    }
    return [];
  }

  async getCriptoSearch(): Promise<SearchTokenItem[]> {
    try {
      const dataToFilter = await fetch(
        "https://www.coinlore.com/data/coin_search.json"
      );
      const dataParsed = await dataToFilter.json();
      return dataParsed;
    } catch (err) {
      console.log("getCriptoSearch", err);
    }
    return [];
  }
}

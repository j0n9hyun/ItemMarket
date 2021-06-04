export interface MarketListType {
  [x: string]: any;
  userId: string;
  id: number;
  title: string;
  content: string;
  price: number;
  url: string;
}

export interface MarketList {
  marketList: MarketListType[];
}

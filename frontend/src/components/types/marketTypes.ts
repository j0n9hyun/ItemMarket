export interface MarketListType {
  [x: string]: any;
  // reverse: any;
  userId: number,
  id: string | number,
  title: string,
  content: string,
  price: number,
  url: string,
}

export interface MarketList {
  marketList: MarketListType[]
}
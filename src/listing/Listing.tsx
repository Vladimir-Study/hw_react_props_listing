import { ListingItem } from "./ListingItem";
import items from './data/etsy.json'

type MainImage = {
  url_570xN: string
}

export type dataItem = {
  listing_id: number,
  url: string,
  MainImage: MainImage,
  title: string,
  currency_code: string,
  price: string,
  quantity: number
}

const pick = (obj, ...keys) => keys.reduce((acc, n) => (acc[n] = obj[n], acc), {});
const newItems = items.map(item => pick(item, 'listing_id', 'url', 'MainImage', 'title', 'currency_code', 'quantity', 'price'));

export function Listing() {
  return (
    <div className="item-list">
      { newItems.map(item => item.MainImage !== undefined ? < ListingItem key={item.listing_id} item={item} /> : null)}
    </div>
  )
}

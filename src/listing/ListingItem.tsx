import { dataItem } from './Listing'

type itemType = {item: dataItem}

export function ListingItem({item}: itemType) {

  let currentPrice;

  switch(item.currency_code) {
    case 'USD':
      currentPrice = (<p className="item-price">${item.price}</p>)
      break;
    case 'EUR':
      currentPrice = (<p className="item-price">€{item.price}</p>)
      break;
    default:
      currentPrice = (<p className="item-price">{item.price} {item.currency_code}</p>)
  } 

  return (
      <div className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN}></img>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{ item.title }</p>
          {currentPrice}
          <p className={`item-quantity ${item.quantity <= 10 ? 'level-low': item.quantity <= 20 ? 'level-medium' : 'level-high'}`}>{item.quantity} left</p>
        </div>
      </div>
  )
}

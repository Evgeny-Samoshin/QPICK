import style from './style.module.css';

type Props = {
  img: string,
  name: string,
  price: number,
}

export const BasketCard: React.FC<Props> = ({ img, name, price }) => {
  return (
    <div className={style.card}>
      <div className={style.cardImgWrapper}>
        <img src={`/src${img}`} alt={`"Проводные наушники ${name}"`} />
      </div>
      <div className={style.contentWrapper}>
        <h3 className={style.cardTitle}>{name}</h3>
        <div className={style.cardPrice}>{price} &#8381;</div>
      </div>
      <form className={style.cardForm}>
        <button className={style.cardFormBtn}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="15" fill="#FFCE7F" />
            <path d="M8 14H22V16H8V14Z" fill="white" />
          </svg>
        </button>
        <input className={style.basketCardInput} type="number" name="basketCardInput" id="basketCardInput" value="1" />
        <button className={style.cardFormBtn}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="15" fill="#FFCE7F" />
            <path d="M14 14V8H16V14H22V16H16V22H14V16H8V14H14Z" fill="white" />
          </svg>
        </button>
      </form>
      <div className={style.totalCardPrice}>123 &#8381;</div>
      <button className={style.deleteBtn}>
        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9458 3.4H19.9278V5.1H17.935V16.15C17.935 16.3754 17.83 16.5916 17.6432 16.751C17.4563 16.9104 17.2029 17 16.9386 17H2.98917C2.72491 17 2.47147 16.9104 2.28461 16.751C2.09775 16.5916 1.99278 16.3754 1.99278 16.15V5.1H0V3.4H4.98194V0.85C4.98194 0.624566 5.08692 0.408365 5.27378 0.248959C5.46064 0.0895533 5.71407 0 5.97833 0H13.9494C14.2137 0 14.4671 0.0895533 14.654 0.248959C14.8409 0.408365 14.9458 0.624566 14.9458 0.85V3.4ZM15.9422 5.1H3.98556V15.3H15.9422V5.1ZM11.3728 10.2L13.1344 11.7028L11.7255 12.9047L9.96389 11.4019L8.20227 12.9047L6.79338 11.7028L8.555 10.2L6.79338 8.6972L8.20227 7.4953L9.96389 8.9981L11.7255 7.4953L13.1344 8.6972L11.3728 10.2ZM6.97472 1.7V3.4H12.9531V1.7H6.97472Z" fill="#DF6464" />
        </svg>
      </button>
    </div>
  )
}
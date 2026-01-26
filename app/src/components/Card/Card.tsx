import style from './style.module.css';

type Props = {
  img: string,
  name: string,
  price: number,
  rate: number,
}

export const Card: React.FC<Props> = ({img, name, price, rate}) => {
  return (
    <div className={style.card}>
      <div className={style.cardImgWrapper}>
        <img src={`/src${img}`} alt={`"Проводные наушники ${name}"`} />
      </div>
      <div className={style.contentWrapper}>

      <h3 className={style.cardTitle}>{name}</h3>
      <div className={style.priceWrapper}>
        <div className={style.cardPrice}>{price} &#8381;</div>
        <div className={style.cardDiscount}>0000 &#8381;</div>
      </div>
      <div className={style.ratingWrapper}>
        <div className="star">
          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6661 17.5747L4.45543 21.9259L6.41572 13.8052L0 8.37524L8.42139 7.70862L11.6661 0L14.9107 7.70862L23.3333 8.37524L16.9164 13.8052L18.8767 21.9259L11.6661 17.5747Z" fill="#FFCE7F" />
          </svg>
        </div>
        <div className={style.rating}>{rate}</div>
      </div>
      <button className={style.btn}>Купить</button>
      </div>
    </div>
  )
}
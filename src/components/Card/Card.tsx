import { useContext, type Dispatch, type SetStateAction } from 'react';
import style from './style.module.css';
import { CardContext, type setterProps, type StorageType } from '../../context/cardContext';

type Props = {
  img: string,
  name: string,
  price: number,
  rate: number,
  quantity: number,
  setter: Dispatch<SetStateAction<Array<setterProps>>>,
}

export const Card: React.FC<Props> = ({ img, name, price, rate, quantity, setter }) => {

  const storage: StorageType[] = useContext(CardContext);

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    /* Проверяем есть ли что-то в хранилище? */
    if (storage.length > 0) {
    /* Проверяем есть ли уже такой товар в хранилище */
      const copyIndex = storage.findIndex(item => item.name === name);
      if (copyIndex !== -1) {
    /* Если есть, то создаем новый экземпляр хранилища с уеличенным числом товаров и обновляем state */
        const arr = storage.map((item) => {
          if (item.name === name) {
            item.quantity += 1;
            return item;
          } else {
            return item;
          }
        })
        setter(arr);
      } else {
    /* Если товара с таким именем нет в хранилище, то просто добавляем товар */
        setter(prev => [
          ...prev,
          {
            img,
            name,
            price,
            quantity,
          }
        ])
      }
    } else {
    /* Если хранилище пустое, то просто добавляем товар */
      setter(prev => [
        ...prev,
        {
          img,
          name,
          price,
          quantity,
        }
      ])
    }
  };


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
        <button className={style.btn} onClick={clickHandler}>Купить</button>
      </div>
    </div>
  )
}
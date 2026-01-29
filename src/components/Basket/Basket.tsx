import { useContext, type Dispatch, type SetStateAction } from 'react';
import { generateRandomId } from '../../utils/generateRandomId';
import { BasketCard } from '../BasketCard/BasketCard';
import style from './style.module.css';
import { CardContext, type setterProps, type StorageType } from '../../context/cardContext';

type Props = {
  setter: Dispatch<SetStateAction<Array<setterProps>>>
}

export const Basket = ({setter}: Props) => {
  const storage: StorageType[] = useContext(CardContext);
  const calculatedTotalPrice = storage.reduce((acc, curr) => {
    return acc += curr.price * curr.quantity
  }, 0);  

  return (
    <section className={style.container}>
      <h2 className={style.pageTitle}>Корзина</h2>
      <div className={style.basketLayout}>
        <div className={style.cardsLayout}>
          {storage.map(item =>
            <BasketCard
              key={generateRandomId()}
              img={item.img}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              setter={setter}
            />
          )}
        </div>
        <div className={style.orderWrapper}>
          <div className={style.orderSumWrapper}>
            <span>ИТОГО</span>
            <div className={style.orderSum}>₽ {calculatedTotalPrice}</div>
          </div>
          <button className={style.orderBtn}>Перейти к оформлению</button>
        </div>
      </div>
    </section>
  )
}
import { useStorageContext } from '../../context/useStorageContext';
import { generateRandomId } from '../../utils/generateRandomId';
import { BasketCard } from '../BasketCard/BasketCard';
import style from './style.module.css';

export const Basket = () => {
  const [storage] = useStorageContext();
  const calculatedTotalPrice = storage.reduce((acc, curr) => {
    return acc += curr.price * curr.quantity
  }, 0);  

  return (
    <section className={style.container}>
      <h2 className={style.pageTitle}>Корзина</h2>
      <div className={style.basketLayout}>
        <ul className={style.cardsLayout}>
          {storage.map(item =>
            <BasketCard
              key={generateRandomId()}
              img={item.img}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          )}
        </ul>
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
};
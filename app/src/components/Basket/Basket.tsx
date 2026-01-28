import { generateRandomId } from '../../utils/generateRandomId';
import { BasketCard } from '../BasketCard/BasketCard';
import style from './style.module.css';

const LIST = [
  {
    img: '/assets/1.jpg',
    name: 'Apple BYZ S852I',
    price: 2978,
    rate: 4.7,
    category: 'Наушники'
  },
  {
    img: '/assets/1.jpg',
    name: 'Apple BYZ S852I',
    price: 2978,
    rate: 4.7,
    category: 'Наушники'
  },
];

export const Basket = () => {
  return (
    <section className={style.container}>
      <h2 className={style.pageTitle}>Корзина</h2>
      <div className={style.basketLayout}>
        <div className={style.cardsLayout}>
        {LIST.map(item =>
          <BasketCard
            key={generateRandomId()}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        )}
        </div>
        <div className={style.orderWrapper}>
          <div className={style.orderSumWrapper}>
            <span>ИТОГО</span>
            <div className={style.orderSum}>₽ 2 927</div>
          </div>
          <button className={style.orderBtn}>Перейти к оформлению</button>
        </div>
      </div>
    </section>
  )
}
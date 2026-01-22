import style from './style.module.css';
import basket from './img/basket.svg';
import { HeaderCounter } from '../HeaderCounter/HeaderCounter';

export const Basket = () => {
  return (
    <a className={style.link} href='/'>
      <img className={style.logo} src={basket} alt="Иконка корзины товаров" />
      <HeaderCounter>
        1
      </HeaderCounter>
    </a>
  )
}
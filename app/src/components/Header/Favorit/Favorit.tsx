import style from './style.module.css';
import heart from './img/heart.svg';
import { HeaderCounter } from '../HeaderCounter/HeaderCounter';

export const Favorit = () => {
  return (
    <a className={style.link} href='/'>
      <img className={style.logo} src={heart} alt="Иконка избранных товаров" />
      <HeaderCounter>
        1
      </HeaderCounter>
    </a>
  )
}
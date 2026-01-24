import { HeaderLayout } from './HeaderLayout/HeaderLayout';
import { Basket } from './Basket/Basket';
import { Favorit } from './Favorit/Favorit';
import { Logo } from './Logo/Logo';
import style from './style.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <HeaderLayout>
        <Logo/>
        <Favorit />
        <Basket />
      </HeaderLayout>
      
    </header>
  )
};
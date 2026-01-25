import { HeaderLayout } from './HeaderLayout/HeaderLayout';
import { BasketIcon } from './BasketIcon/BasketIcon';
import { FavoritIcon } from './FavoritIcon/FavoritIcon';
import { Logo } from './Logo/Logo';
import style from './style.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <HeaderLayout>
        <Logo/>
        <FavoritIcon />
        <BasketIcon />
      </HeaderLayout>
      
    </header>
  )
};
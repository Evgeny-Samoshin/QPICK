import Layout from '../Layout/Layout';
import { Basket } from './Basket/Basket';
import { Favorit } from './Favorit/Favorit';
import {Logo} from './Logo/Logo';
import style from './style.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <Layout>
        <Logo/>
        <Favorit />
        <Basket />
      </Layout>
      
    </header>
  )
};
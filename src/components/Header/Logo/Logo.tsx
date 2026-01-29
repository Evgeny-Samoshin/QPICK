import style from './style.module.css';
import logo from './img/logo.svg';
import { Link } from 'react-router';

export const Logo = () => {
  return (
    <Link className={style.link} to="/">
      <img className={style.logo} src={logo} alt="Логотип интернет-магазина QPICK" />
    </Link>
  )
}
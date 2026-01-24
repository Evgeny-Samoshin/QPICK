import { Card } from './Card/Card';
import { Category } from './Category/CAtegory';
import style from './style.module.css';

export const Main = () => {
  return (
    <main className={style.main}>
      <Category>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Category>
    </main>
  )
};
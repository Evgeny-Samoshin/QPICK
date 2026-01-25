import { Card } from '../Card/Card';
import style from './style.module.css';

export const Category = () => {
  return (
    <section className={style.container}>
      <h2 className={style.categoryTitle}>Наушники</h2>
      <div className={style.cardsLayout}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}
import style from './style.module.css';

type Props = {
  children: React.ReactNode,
}

export const Category = ({children}: Props) => {
  return (
    <section className={style.container}>
      <h2 className={style.categoryTitle}>Наушники</h2>
      <div className={style.cardsLayout}>
        {children}
      </div>
    </section>
  )
}
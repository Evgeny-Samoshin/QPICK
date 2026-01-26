import { Card } from '../Card/Card';
import style from './style.module.css';
import { LIST } from '../../_LIST/LIST';
import { generateRandomId } from '../../utils/generateRandomId';

type Props = {
  children: React.ReactNode,
};

export const Category = ({ children }: Props) => {
  return (
    <section className={style.container}>
      <h2 className={style.categoryTitle}>{children}</h2>
      <div className={style.cardsLayout}>
        {LIST.map(item => {
          if (item.category === children) {
            return <Card key={generateRandomId()}
              img={item.img}
              name={item.name}
              price={item.price}
              rate={item.rate} />
          }
        })}
      </div>
    </section>
  )
}
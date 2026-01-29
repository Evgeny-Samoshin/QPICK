import { Card } from '../Card/Card';
import style from './style.module.css';
import { LIST } from '../../_LIST/LIST';
import { generateRandomId } from '../../utils/generateRandomId';
import type { Dispatch, SetStateAction } from 'react';
import type { setterProps } from '../../context/cardContext';

type Props = {
  children: React.ReactNode,
  setter: Dispatch<SetStateAction<Array<setterProps>>>,
};

export const Category = ({ children, setter }: Props) => {
  return (
    <section className={style.container}>
      <h2 className={style.categoryTitle}>{children}</h2>
      <div className={style.cardsLayout}>
        {LIST.map(item => {
          if (item.category === children) {
            return <Card key={generateRandomId()}
              setter={setter}
              img={item.img}
              name={item.name}
              price={item.price}
              rate={item.rate}
              quantity={1} />
          }
        })}
      </div>
    </section>
  )
}
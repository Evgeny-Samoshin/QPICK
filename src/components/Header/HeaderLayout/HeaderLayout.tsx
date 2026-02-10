import type { Props } from '../../../context/cardContext';
import style from './style.module.css';

export const HeaderLayout = ({children}: Props) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}
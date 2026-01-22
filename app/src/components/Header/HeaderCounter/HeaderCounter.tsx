import type React from 'react';
import style from './style.module.css';

type Props = {
  children: React.ReactNode,
}

export const HeaderCounter = ({children}: Props) => {
  return (
    <span className={style.counter}>
      {children}
    </span>
  )
}
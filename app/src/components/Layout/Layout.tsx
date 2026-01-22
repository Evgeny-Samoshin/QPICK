import style from './style.module.css';

type Props = {
  children: React.ReactNode,
}

const Layout = ({children}: Props) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default Layout
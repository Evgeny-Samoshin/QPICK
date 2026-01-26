
import style from './style.module.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Basket } from './components/Basket/Basket'
import { BrowserRouter, Route, Routes } from 'react-router'
import { List } from './components/List/List'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className={style.main}>
        <div className={style.container}>
          <Routes>
            <Route path='/' element={<List />}/>
            <Route path='/basket' element={<Basket />}/>
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

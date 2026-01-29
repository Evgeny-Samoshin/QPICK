
import style from './style.module.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Basket } from './components/Basket/Basket'
import { BrowserRouter, Route, Routes } from 'react-router'
import { List } from './components/List/List'
import { CardContext } from './context/cardContext'
import { useEffect, useState } from 'react'


function App() {

  const [storage, setStorage] = useState(JSON.parse(sessionStorage.getItem('basket') || '[]'));

    useEffect(() => {
      sessionStorage.setItem('basket', JSON.stringify(storage))
    }, [storage]);
    
  return (
    <BrowserRouter>
      <CardContext value={storage}>
        <Header />
        <main className={style.main}>
          <div className={style.container}>
            <Routes>
              <Route path='/' element={<List setter={setStorage}/>} />
              <Route path='/basket' element={<Basket setter={setStorage}/>} />
            </Routes>
          </div>
        </main>
        <Footer />
      </CardContext>
    </BrowserRouter>
  )
}

export default App

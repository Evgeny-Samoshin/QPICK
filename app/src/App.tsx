
import style from './style.module.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Category } from './components/Category/Category'
import { Basket } from './components/Basket/Basket'
import { BrowserRouter, Route, Routes } from 'react-router'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className={style.main}>
        <div className={style.container}>
          <Routes>
            <Route path='/' element={<Category />}/>
            <Route path='/basket' element={<Basket />}/>
            
            
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'

import './App.css'

import { CartProvider } from './store/CartProvider'

import Header from './components/layout/Header'
import Meals from './components/meals/Meals'
import Cart from './components/cart/Cart'

function App() {
  const[modal, setModal] = useState(false)

  const showModalHandler = () => {
    setModal(true)
  }

  const hideModalHandler = () => {
    setModal(false)
  }

  return (
    <CartProvider>
      {modal && (
        <Cart onHideModal={hideModalHandler} />
      )}

      <Header onShowModal={showModalHandler} />

      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App

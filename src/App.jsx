import { useState } from 'react'

import './App.css'

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
    <>
      {modal && (
        <Cart onHideModal={hideModalHandler} />
      )}

      <Header onShowModal={showModalHandler} />

      <main>
        <Meals />
      </main>
    </>
  )
}

export default App

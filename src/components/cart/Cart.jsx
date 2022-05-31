import React, { useContext } from 'react'

import classes from './Cart.module.css'

import { CartContext } from '../../store/CartContext'

import Modal from '../UI/Modal'
import CartItem from './CartItem'

export default function Cart(props) {
  const cartCtx = useContext(CartContext)

  const isItems = cartCtx.items.length > 0

  const totalAmount = `R$ ${cartCtx.totalAmount.toFixed(2)}`

  const cartItemAddHandler = (item) => {
    // cartCtx.addItem(item)
  }

  const cartItemRemoveHandler = (id) => {

  }

  const cartItems = <ul className={classes['cart-items']}>
    {cartCtx.items.map((item) => (
        <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler(null, item)}
        />
    ))}
  </ul>

  return (
    <Modal onCloseModal={props.onHideModal}>
        {cartItems}

        <div className={classes.total}>
            <span>Preço total</span>
            <span>{totalAmount}</span>
        </div>

        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideModal}>
                Fechar
            </button>
            {
                isItems && (
                    <button className={classes.button}>
                        Pedir
                    </button>
                )
            }
        </div>
    </Modal>
  )
}

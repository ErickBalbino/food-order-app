import React, { useContext } from 'react'

import classes from './HeaderCartButton.module.css'

import { CartContext } from '../../store/CartContext'

import CartIcon from '../cart/CartIcon'

export default function HeaderCartButton(props) {

  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0)

  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>

        <span>Carrinho</span>

        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

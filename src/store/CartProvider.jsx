import { useReducer } from 'react'

import CartContext from './CartContext'

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){

    }
    return defaultCartState
}

export const CartProvider = (props) => {
    const [cartState, dispacthCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemCartHandler = (item) => {
        dispacthCartAction({
            type: 'ADD',
            item: item
        })
    }

    const removeItemCartHandler = (id) => {
        dispacthCartAction({
            type: 'REMOVE',
            id: id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemCartHandler,
        removeItem: removeItemCartHandler
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
} 
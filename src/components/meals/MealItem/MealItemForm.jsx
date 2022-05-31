import React, { useRef, useState } from 'react'

import classes from './MealItemForm.module.css'

import Input from '../../UI/Input'

export default function MealItemForm(props) { 
  const[amountIsValid, setAmountIsValid] = useState(true)

  const amountInputRef = useRef()

  const submit = (e) => {
    e.preventDefault()

    const enteredAmountValue = amountInputRef.current.value
    const enteredAmountValueNumber = +enteredAmountValue

    if(enteredAmountValue.trim().length === 0 || enteredAmountValueNumber < 1 || enteredAmountValueNumber > 5){
      setAmountIsValid(false)
      return 
    }

    props.onAddToCart(enteredAmountValueNumber)
  }

  return (
    <form className={classes.form} onSubmit={submit}>
        <Input 
          ref={amountInputRef}
          label='Quantidade' 
          input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
          }} 
        />

        <button>+ Add</button>
        {!amountIsValid && (
          <p>Por favor, insira um valor válido (1-5).</p>
        )}
    </form>
  )
}

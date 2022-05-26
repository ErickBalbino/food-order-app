import React from 'react'

import classes from './Header.module.css'

import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
  return (
    <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
        </header>

        <div className={classes['main-image']}>
            <img src="/assets/meals.jpg" alt="logo do site reactmeals" />
        </div>
    </>
  )
}

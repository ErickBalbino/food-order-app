import React from 'react'
import ReactDOM from 'react-dom'

import classes from './Modal.module.css'

const Backdrop = (props) => {
    return(
        <div className={classes.backdrop} onClick={props.onCloseModal} />
    )
}

const ModalOverlay = (props) => {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

export default function Modal(props) {
  return (
    <>
        {ReactDOM.createPortal(<Backdrop onCloseModal={props.onCloseModal} />, document.getElementById('overlays'))}
        
        {ReactDOM.createPortal(<ModalOverlay>
            {props.children}
        </ModalOverlay>, document.getElementById('overlays'))}
    </>
  )
}

import { Fragment } from 'react'
import ReactDom from 'react-dom'
import  classes from './Modal.module.css'

const Backdrop = (props)=>{
    return( <div className={classes.backdrop}/>)
}

const Overlay = (props)=>{
    return (
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    )
}

const place = document.getElementById('overlays')

const Modal = (props)=>{

    return (
    <Fragment>
    {ReactDom.createPortal(<Backdrop/>,place)}
    {ReactDom.createPortal(<Overlay>{props.children}</Overlay>,place)}
            </Fragment>
    )
}
export default Modal;
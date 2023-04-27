import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

 const Cart = (props) => {
  const cartItem = 
    <ul className={classes['cart-items']}>
      {[
        {id:1, name:'sushi', amount:2, price:12}
      ].map((item)=>(<li key={item.id}>{item.name}</li>))}
    </ul>
  
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
      <span>Total amount</span>
      <span>24</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}  onClick={props.onClose}>Cancel</button>
        <button className={classes.button} >Order</button>
      </div>
    </Modal>
  )
}
export default Cart;
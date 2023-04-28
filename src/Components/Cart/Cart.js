import React, { useContext } from 'react'
import CartContext from '../../Store/cart-context'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem'


const Cart = (props) => {

  const crtCntx = useContext(CartContext);
  const totalAmount = `$${crtCntx.totalAmount.toFixed(2)}`;
  const hasItem = crtCntx.items.length > 0;

  const cartItemRemovehandler=(id)=>{
    crtCntx.removeItem(id);
  }

  const cartItemAddhandler =(item)=>{
    crtCntx.addItem({...item,amount:1})
  }

  const cartItem =
    (<ul className={classes['cart-items']}>
      {crtCntx.items.map((item) => (<CartItem id={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={cartItemRemovehandler.bind(null,item.id)} onAdd={cartItemAddhandler.bind(null,item)}/>))}
    </ul>)

  { console.log('cart', crtCntx.items) }
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Cancel</button>
        {hasItem && <button className={classes.button} >Order</button>}
      </div>
    </Modal>
  )
}
export default Cart;
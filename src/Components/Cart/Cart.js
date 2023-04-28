import React,{useContext} from 'react'
import CartContext from '../../Store/cart-context'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'


 const Cart = (props) => {

  const crtCntx = useContext(CartContext);

  const cartItem = 
    (<ul className={classes['cart-items']}>
      {crtCntx.items.map((item)=>(<li key={Math.random()}>{item.Name}--{item.amount}</li>))}
    </ul>)
  
  {console.log(crtCntx.items)}
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
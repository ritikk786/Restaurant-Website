import React,{useContext} from 'react'
import CartContext from '../../Store/cart-context';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

const crtCTX = useContext(CartContext);
let quantity=0;
crtCTX.items.forEach(item=>{
  quantity=quantity+Number(item.quantity)
})
// const numberofCartItem = crtCTX.items.reduce((crtNumber,item)=>{
//   return (crtNumber + item.amount)
// },0)
  
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
        </span>  
      <span>Your Cart</span>  
      <span className={classes.badge}>{quantity}</span>  
    </button>
    )
}
export default HeaderCartButton;

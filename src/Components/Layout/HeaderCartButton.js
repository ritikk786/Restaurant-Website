import React,{useContext, useState, useEffect} from 'react'
import CartContext from '../../Store/cart-context';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

const crtCTX = useContext(CartContext);
const items = crtCTX.items

const [btnIshighlighted, setbtnIshighlighted]=useState(false)

useEffect(()=>{
  if(items.length===0){
    return;
  }
  setbtnIshighlighted(true)
  const timer= setTimeout(()=>{setbtnIshighlighted(false)},300)
  return ()=>{
    clearTimeout(timer);
  }
},[items])
// let quantity=0;
// crtCTX.items.forEach(item=>{
//   quantity=quantity+Number(item.quantity)
// })
const btnclass = `${classes.button} ${btnIshighlighted ? classes.bump:""}`
const numberofCartItem = crtCTX.items.reduce((crtNumber,item)=>{
  return (crtNumber + item.amount)
},0)
  
  return (
    <button className={btnclass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
        </span>  
      <span>Your Cart</span>  
      <span className={classes.badge}>{numberofCartItem}</span>  
    </button>
    )
}
export default HeaderCartButton;

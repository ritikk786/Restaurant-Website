import React,{useContext} from 'react'
import CartContext from '../../../Store/cart-context'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'



 const MealItem = (props) => {
  const crtCntx = useContext(CartContext)
  const addtocarthandler = (amount)=>{
    crtCntx.addItem({
      id:props.meals.id,
      name:props.meals.Name,
      amount:amount,
      price:props.meals.price
    })
  }

    const price = `$${props.meals.price.toFixed(2)}`
  return (
    <li className={classes.meal}>
        <div >
            <h3>{props.meals.Name}</h3>
            <div className={classes.description}>{props.meals.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddtocart={addtocarthandler}/>
        </div>
    </li>
  )
}
export default MealItem;

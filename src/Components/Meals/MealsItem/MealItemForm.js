import React,{useContext} from 'react'
import  CartContext  from '../../../Store/cart-context'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

 const MealItemForm = (props) => {
  const crtCtx = useContext(CartContext)

  const addtoCarthandler = (event)=>{
    event.preventDefault();
    console.log(props.items)
    const quantity = document.getElementById('amount').value;
    crtCtx.addItem({...props.items, quantity:quantity})
    console.log(crtCtx.items)

  }
  return (
    <form className={classes.form}>
        <Input label='Amount' input={{
            type:'number',
            id:'amount',
            min:'1',
            max:'5',
            defaultValue:'1',
            step:'1'

        }}/>
        <button onClick={addtoCarthandler}>+ ADD</button>
    </form>
  )
}
export default MealItemForm;

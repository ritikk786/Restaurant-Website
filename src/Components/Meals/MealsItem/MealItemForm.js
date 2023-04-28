import React,{useRef} from 'react'
import  CartContext  from '../../../Store/cart-context'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

 const MealItemForm = (props) => {

const amountinputRef = useRef()
  

  const addtoCarthandler = (event)=>{
    event.preventDefault();
    const enterdamount = amountinputRef.current.value;
    const Numberenterdamount = +enterdamount
    
    
    if(enterdamount.trim().length===0 || Numberenterdamount<1 || Numberenterdamount > 5){
      return;
    }
    props.onAddtocart(Numberenterdamount)
  }
  return (
    <form className={classes.form} onSubmit={addtoCarthandler}>
        <Input 
            ref={amountinputRef}
            label='Amount'
         input={{
            type:'number',
            id:'amount',
            min:'1',
            max:'5',
            defaultValue:'1',
            step:'1'

        }}/>
        <button >+ ADD</button>
    </form>
  )
}
export default MealItemForm;

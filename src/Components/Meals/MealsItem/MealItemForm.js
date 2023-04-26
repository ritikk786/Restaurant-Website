import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

 const MealItemForm = (props) => {
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
        <button>+ ADD</button>
    </form>
  )
}
export default MealItemForm;

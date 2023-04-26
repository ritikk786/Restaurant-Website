import React from 'react'
import classes from './DummyMeals.module.css'

const DummyMeals = () => {
    const dummymeals = [
        {Name:'Sushi',
         description:'finest fish and veggis',
         amount:'20$'},

         {Name:'Schniztle',
         description:'A german speciality!',
         amount:'25$'},

         {Name:'Barbecue Burger',
         description:'American, raw, meaty',
         amount:'30$'},

         {Name:'Green Bowl',
         description:'Healthy and green',
         amount:'12$'}
    ]
  return (
    <div className={classes['main-div']}>
        {dummymeals.map(meal=>(
            <li className={classes.li}>
            <h4 className={classes.h4}>{meal.Name}</h4>
            <span className={classes.description}>{meal.description}</span>
            <span>{meal.amount}</span>
            </li>
        ))}
    </div>
  )
}
export default DummyMeals;

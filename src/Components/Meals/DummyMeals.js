import React from 'react'
import classes from './DummyMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealsItem/MealItem'


const DummyMeals = () => {
    const dummymeals = [
        {id:1,
          Name:'Sushi',
         description:'finest fish and veggis',
         price:20},

         {id:2,
          Name:'Schniztle',
         description:'A german speciality!',
         price:25},

         {
          id:3,
          Name:'Barbecue Burger',
         description:'American, raw, meaty',
         price:30},

         {id:4,
          Name:'Green Bowl',
         description:'Healthy and green',
         price:12}
    ]
  return (
    <section className={classes.meals}>
      <Card>
      <ul>
        {dummymeals.map(meal=>(
            <MealItem key={meal.id} meals={meal}/>
        ))}
        </ul>
        </Card>
    </section>
  )
}
export default DummyMeals;

import React, {Fragment} from "react";
import DummyMeals from "./DummyMeals";
import MealsSummary from "./MealsSummary";

 const Meals = () => {
  return (
    <Fragment>
        <MealsSummary/>
        <DummyMeals/>
    </Fragment>
  )
}
export default Meals;

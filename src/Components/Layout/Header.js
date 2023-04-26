import React,{Fragment} from 'react'
import classes from './Header.module.css'
import HeaderImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import MealsSummary from '../Meals/MealsSummary'

const Header =()=>{
    return(
       <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
        <img src={HeaderImage} alt='meals '/>
        </div>
        <MealsSummary/>
       </Fragment>
    )
}
export default Header;
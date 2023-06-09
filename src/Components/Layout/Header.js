import React,{Fragment} from 'react'
import classes from './Header.module.css'
import HeaderImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'


const Header =(props)=>{
    return(
       <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onClick} />
        </header>
        <div className={classes['main-image']}>
        <img src={HeaderImage} alt='meals '/>
        </div>
       
       </Fragment>
    )
}
export default Header;
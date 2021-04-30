import { Link }from 'react-router-dom'

import classes from './main.module.scss'
import Logo from '../../assets/images/Group 1.svg'

const Header = ()=>{
    return(
        <div className={classes.logoHolder}>
            <div className={classes.logo}>
                <Link to="/">
                <img src={Logo} alt=""/>
                </Link>
                <span>Продай, найди, купи <br/>
все что пожелаешь…</span>
            </div>

            <div className={classes.navbar}>
                <Link className={classes.link}>Объявления</Link>
                <Link className={classes.link} to="/topproduct">Магазины</Link>
                <Link className={classes.link}>Для бизнеса</Link>
                <Link className={classes.link}>Помощь</Link>
            </div>

            <div className={classes.language}>
                <span>Rus <span className={classes.slash}>|</span> Uzb</span>
            </div>

            <div className={classes.auth}>
                <Link to="/auth">Вход    <span>|</span>    Регистрация</Link>
            </div>
        </div>
    )
}
export default Header
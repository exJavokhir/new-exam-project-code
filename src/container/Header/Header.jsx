import { Link } from 'react-router-dom'

import classes from  './main.module.scss'


import Logo from '../../assets/images/Group 1.svg' 

function Header(){
    return(
        <div className={classes.headerWrapper}>
            <div className={classes.container}>
            <div className={classes.headerTop}>
                <Link to="/">
                    <img src={Logo} alt="Logo"/>
                </Link>
                <div className={classes.rightSide}>
                    <div className={classes.language}>
                        <span>Rus</span>
                        <span>Uzb</span>
                    </div>
                    <div className={classes.auth}>
                        <Link to="/auth" className={classes.Link}>Login</Link>
                        <Link to="/auth" className={classes.Link}>Register</Link>
                    </div>
                </div>
            </div>

            <div className={classes.headerBottom}>
                <div className={classes.leftSide}>
                    <form action="">
                        <select name="" id="" className={classes.selectOne}>
                            <option value="">Любая категория</option>
                            <option value="">Любая категория</option>
                            <option value="">Любая категория</option>
                        </select>
                        <input type="search" placeholder="Что будем искать ?"/>
                        <select name="" id="">
                            <option value="">По всей Узбекистану</option>
                            <option value="">По всей Узбекистану</option>
                            <option value="">По всей Узбекистану</option>
                        </select>
                        <button className={classes.buttonSubmit}>Найти</button>
                    </form>
                </div>
                <div className={classes.rightSide}>
                    <button type="submit" className={classes.addButton}> <span className={classes.plusSpan}>+</span> <span className={classes.titleSpan}> Добавить обьявления</span> </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header
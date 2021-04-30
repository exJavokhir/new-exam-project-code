import { Link } from 'react-router-dom'

import classes from "./main.module.scss"

import Single from '../../components/SingleItem/Singleitem'
import Footer from '../../container/Footer/Footer'


import Logo from '../../assets/images/Group 1.svg'
import Image7 from '../../assets/images/Bitmap (6).png'
import Image3 from '../../assets/images/Bitmap (3).png'
import Image4 from '../../assets/images/Bitmap (4).png'
import Image5 from '../../assets/images/Bitmap (5).png'


const AddArr = [
    {
        image: Image7,
        title: 'Toyota Camry, 2002',
        data: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        image: Image3,
        title: 'Продам свою гоночный байк Mongoose',
        data: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        image: Image4,
        title: '1-к квартира, 47 м², 7/18 эт.',
        data: 'Вчера 22:55',
        price: '39 000 000'
    },
    {
        image: Image5,
        title: 'Торговое помещение, 10 м²',
        data: 'Вчера 22:55',
        price: '39 000 000 сум'
    },    
]

const SingleProduct = ()=>{
    return(
        <div className={classes.singleProduct}>
            <div className={classes.singleHeader}>
                <div className={classes.singleTop}>
                    <div className={classes.container}>
                        <div className={classes.logoHolder}>
                            <Link to="/">
                            <img src={Logo} alt=""/>

                            </Link>
                            <span>
                                Продай, найди, купи <br/>
                                все что пожелаешь…
                            </span>
                        </div>
                        <div className={classes.navbar}>
                            <Link className={classes.button}>Объявления</Link>
                            <Link to="/topproduct" className={classes.button}>Магазины</Link>
                            <Link className={classes.button}>Для бизнеса</Link>
                            <Link className={classes.button}>Помощь</Link>
                        </div>
                        <div className={classes.language}>
                            <span>Rus    |</span>
                            <span>    Uzb</span>
                        </div>
                        <div className={classes.Auth}>
                            <Link className={classes.Link}>Вход      |      </Link>
                            <Link className={classes.Link}>Регистрация</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.container}>
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

            <div className={classes.singleMain}>
                <div className="container">
                    <div className={classes.breadCramb}>
                        <button>Объявления   <span>/</span></button>
                        <button>Ташкент Недвижимость   <span>/</span></button>
                        <button>Ташкент Квартиры   <span>/</span></button>
                        <button>Ташкент Продажа   <span>/</span></button>
                        <button>Новостройки Ташкент</button>
                    </div>

                    <div className={classes.productTitle}>
                        <h1>
                            Срочно Голден Хаус Етти Чинор Новостройка 4х ком на <br/> 1 этаже юнусабад 5
                        </h1>
                    </div>

                    <div className={classes.productMain}>
                        <div className={classes.leftSide}>

                        </div>
                        <div className={classes.rightSide}>
                            <div className={classes.topPlace}>
                                <span>Артикул: 4418970</span>
                                <span>обновлено: 28.04.17 добавлено: 28.04.17</span>
                            </div>
                            <div className={classes.blockOne}>
                                <h1>70 000 y.e.</h1>
                            </div>
                            <div className={classes.blockTwo}>
                                <span>Ташкент, Ташкентская область, Юнусабадский район </span>
                            </div>

                            <div className={classes.blockThree}>
                                <button>99891 166 <span>* * * *</span> <span>Покозать польностю</span></button>
                                <button>99891 166 <span>* * * *</span> <span>Покозать польностю</span></button>
                            </div>

                            <div className={classes.blockFour}>
                                <span className={classes.one}>Автор обьявлении: </span>
                                <span className={classes.two}>Зухриддин Темиров</span>
                            </div>

                            <div className={classes.blockFive}>
                                <Link to="/chat" className={classes.one}>Написать автору</Link>
                                <button className={classes.two}>Предложить свою цену</button>
                            </div>

                            <div className={classes.blockSix}>
                                <table>
                                    <tr>
                                        <td>Количество комнат: <span>6</span></td>
                                        <td>Общая площадь: <span>40m</span></td>
                                        <td>Этаж: <span>32</span></td>
                                    </tr>
                                    <tr>
                                        <td>Этажность дома: <span>6</span></td>
                                        <td>Состояние квартиры: <span>Первая сдача </span></td>
                                        <td>Этаж: <span>32</span></td>
                                    </tr>
                                    <tr>
                                        <td>Планировка <span className={classes.kok}>Раздельная</span></td>
                                        <td>Год постройки/сдачи <span className={classes.kok}>Сдача в 2017</span></td>
                                        <td>Ремонт <span>Авторский проект</span></td>
                                    </tr>
                                    <tr>
                                        <td>Санузел <span className={classes.kok}>2 санузла и <br/> более</span></td>
                                        <td>Меблирована <span className={classes.kok}>Да</span></td>
                                        <td>Высота потолков <span>32</span></td>
                                    </tr>
                                </table>
                            </div>
                            <div className={classes.blockSeven}>
                                <div className={classes.top}>
                                    <span>Рядом есть</span>
                                    <p>Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе	</p>
                                </div>

                                <div className={classes.middle}>
                                    <p>
                                        Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме. <br/>  Новостройка Голден Хаус жылой комплекс Етти Чинор Очень <br/> качественный и дорогой ремонт. Комнаты полнастю разделные <br/> болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт <br/>шыкарный обсалютно новый. <br/><br/><br/>

                                        Ремонт делолся из очень дорогова материяла. Дорогая класическая <br/> кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие <br/> люстры вовсех комнатах решодки на окнах. Теретория охранается. <br/> Всё предусмотренно для детей деские площядки качели итд. Торг <br/>  наместе. Торопитесь продаю нужны денги. Первый золотой этаж и <br/> паследний в этом коплексе. Торопитесь.
                                    </p>
                                </div>
                                <div className={classes.bottom}>
                                    <span className={classes.one}>Просмотры:10958</span>
                                    <span>Пожаловатся</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.productImage}>
                        <div className={classes.container}>
                            {
                                AddArr.map(item=>(
                                    <Single
                                        image={item.image}
                                        title={item.title}
                                        data={item.data}
                                        price={item.price}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SingleProduct
                                                    
           
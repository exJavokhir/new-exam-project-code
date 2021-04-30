import Header from '../../container/HeaderTwo/Header'
import Footer from '../../container/Footer/Footer'

import Image1 from '../../assets/images/Bitmap.png'
import Image2 from '../../assets/images/Bitmap (1).png'
import Image3 from '../../assets/images/Bitmap (2).png'
import Image4 from '../../assets/images/Bitmap (3).png'
import Image5 from '../../assets/images/Bitmap (4).png'
import Image6 from '../../assets/images/Bitmap (5).png'
import Image7 from '../../assets/images/Bitmap (6).png'
import classes from './main.module.scss'

import Fuck from '../../assets/images/fuck.png'
import Fuck1 from '../../assets/images/fuck1.png'
import Fuck2 from '../../assets/images/fuck2.png'
import Fuck3 from '../../assets/images/fuck3.png'
import Single from '../../components/SingleItem/Singleitem'

const TopArr = [
    {
        image: Fuck,
        title: 'iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)',
        data: 'Вчера 22:55',
        price: '39 000 000 сум',
        style: '65, 212, 129, 0.225289'
    },
    {
        image: Fuck1,
        title: 'iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)',
        data: 'Вчера 22:55',
        price: '39 000 000 сум',
        style: '65, 212, 129, 0.225289'
    },
    {
        image: Fuck2,
        title: 'iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)',
        data: 'Вчера 22:55',
        price: '39 000 000 сум',
        style: '65, 212, 129, 0.225289'
    },
    {
        image: Fuck3,
        title: 'iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)',
        data: 'Вчера 22:55',
        price: '39 000 000 сум',
        style: '65, 212, 129, 0.225289'
    }
]

const Itemarr = [
    {
        image: Image1,
        title: 'Маркетолог. Консультирование. Настройка рекламы',
        data: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        image: Image2,
        title: 'Коньки раздвижные Galaxy р-р 36-39',
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
        price: '39 000 000 сум'
    },
    {
        image: Image5,
        title: 'Торговое помещение, 10 м²',
        data: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        image: Image6,
        title: 'Двигатели моторы головки кпп турбины тнвд гарантия',
        data: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        image: Image7,
        title: 'Toyota Camry, 2002',
        data: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        image: Image1,
        title: 'Маркетолог. Консультирование. Настройка рекламы',
        data: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        image: Image2,
        title: 'Коньки раздвижные Galaxy р-р 36-39',
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
        price: '39 000 000 сум'
    },
    {
        image: Image5,
        title: 'Торговое помещение, 10 м²',
        data: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        image: Image6,
        title: 'Двигатели моторы головки кпп турбины тнвд гарантия',
        data: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
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
        price: '39 000 000 сум'
    },
    
   
]

const Finish = [
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
        price: '39 000 000 сум'
    },
]

const TopProduct = ()=>{
    return(
        <div className={classes.topProduct}>
            <div className={classes.topPlace}>
                <div className={classes.container}>
                    <Header></Header>
                </div>
            </div>
            <div className="container">
                <div className={classes.searchHolder}>
                    <form action="">
                        <input type="search" placeholder="Введите название обявления или  выберите из списка"/>
                    </form>
                </div>

                <div className={classes.buttons}>
                    <span className={classes.one}>Интерсное</span>
                    <span className={classes.two}>Топ</span>
                    <span className={classes.three}>Отличные предложение</span>
                    <span className={classes.four}>Супер цена</span>
                    <span className={classes.ones}>г.Ташкент</span>
                    <span className={classes.ones}>г.Термез</span>
                    <span className={classes.ones}>г.Самарканд</span>
                </div>

                <div className={classes.rubirke}>
                    <span className={classes.title}>Вы сейчас в рубрике</span>
                    <div className={classes.class}>
                        <span className={classes.ele}>Электроника</span>
                        <span className={classes.mon}>Мониторы</span>
                    </div>
                </div>

                <div className={classes.inputRange}>
                    <div className={classes.left}>
                        <span>Выберите цену от и до</span>
                    </div>
                    <div className={classes.right}>

                    </div>
                </div>

                <div className={classes.selectHolder}>
                    <form action="">
                        <select name="" id="">
                            <option value="">Состояние</option>
                            <option value="">Состояние</option>
                            <option value="">Состояние</option>
                        </select>

                        <select name="" id="">
                            <option value="">Тип объявщика</option>
                            <option value="">Тип объявщика</option>
                            <option value="">Тип объявщика</option>
                        </select>

                        <select name="" id="">
                            <option value="">Ташкент > Мирза улугбекский район</option>
                            <option value="">Ташкент > Мирза улугбекский район</option>
                            <option value="">Ташкент > Мирза улугбекский район</option>
                        </select>
                        <button>Применить</button>
                    </form>
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className={classes.topRate}>
                    {
                        TopArr.map(item=>(
                            <Single
                                image={item.image}
                                title={item.title}
                                data={item.data}
                                price={item.price}
                                style={item.style}
                            />
                        ))
                    }
                </div>

                <div className={classes.topproductImages}>
                    {
                        Itemarr.map(item=>(
                            <Single
                                image={item.image}
                                title={item.title}
                                data={item.data}
                                price={item.price}
                            />
                        ))
                    }
                </div>

                <div className={classes.searchResult}>
                    <h2>СЕЙЧАС ИЩУТ</h2>

                    <div className={classes.searches}>
                        <div className={classes.div}>
                            <span>купить Мясная продукция</span>
                            <span className={classes.Alone}>2 часа назад</span>
                        </div>
                        <div className={classes.div}>
                            <span>купить Мясная продукция</span>
                            <span className={classes.Alone}>2 часа назад</span>
                        </div>
                        <div  className={classes.div}>
                            <span>купить Мясная продукция</span>
                            <span className={classes.Alone}>2 часа назад</span>
                        </div>
                        <div  className={classes.div}>
                            <span>купить Мясная продукция</span>
                            <span className={classes.Alone}>2 часа назад</span>
                        </div>
                    </div>
                </div>

                <div className={classes.finishBlock}>
                    <h2>САМОЕ ИНТЕРЕСНОЕ</h2>

                    <div className={classes.finish}>
                        {
                            Finish.map(item=>(
                                <div className={classes.pad}>
                                    <Single
                                        image={item.image}
                                        title={item.title}
                                        data={item.data}
                                        price={item.price}
                                    />
                                </div>
                            ))
                        }    
                    </div>                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default TopProduct

      
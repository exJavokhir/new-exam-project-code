import { useState }from 'react'

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

import classes from './main.module.scss'

import Topbar from '../../components/Topbar/Topbar'
import Single from '../../components/SingleItem/Singleitem'
import Header from '../../container/Header/Header'
import Modal from '../../components/Modal/Modal'
import Footer from '../../container/Footer/Footer'
import {
    Airplane,
    Store,
    Terminal,
    Briefcase,
    Gifts,
    Challenge,
    Maintenance,
    Gaming,
    Man
}from '../../assets/icons/icons'

import Image1 from '../../assets/images/Bitmap.png'
import Image2 from '../../assets/images/Bitmap (1).png'
import Image3 from '../../assets/images/Bitmap (2).png'
import Image4 from '../../assets/images/Bitmap (3).png'
import Image5 from '../../assets/images/Bitmap (4).png'
import Image6 from '../../assets/images/Bitmap (5).png'
import Image7 from '../../assets/images/Bitmap (6).png'

import image8 from '../../assets/images/image.png'
import image9 from '../../assets/images/image1.png'
import image10 from '../../assets/images/image2.png'

const Toparr = [
    {
        icon: <Airplane/>,
        title: 'Автомобили',
        style: '#B6CAFB'
    },
    {
        icon: <Store/>,
        title: 'Недвижимость',
        style: '#B4E2E1'
    },
    
    {
        icon: <Terminal/>,
        title: 'Электроника',
        style: '#FF9E83'
    },
    
    {
        icon: <Briefcase/>,
        title: 'Работа',
        style:'#F7E233'
    },
    
    {
        icon: <Gifts/>,
        title: 'Личные вещи',
        style: '#F6DAC2'
    },
    
    {
        icon: <Challenge/>,
        title: 'Дом и Сад',
        style: '#B4E2E1'
    },
    
    {
        icon: <Maintenance/>,
        title: 'Стройка и ремонт',
        style: '#B6CAFB'
    },
    
    {
        icon: <Gaming/>,
        title: 'Хобби и Спорт',
        style: '#F6DAC2'
    },
    
    {
        icon: <Man/>,
        title: 'Бизнес и услуги',
        style: '#FF9E83'
    },
    

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
    },
    {
        image: Image5,
        title: 'Торговое помещение, 10 м²',
        data: 'Вчера 22:55',
        price: '39 000 000 сум'
    },    
]


const settings = {
    slidesToShow: 9,
    slidesToScroll: 1,
    infinite: true,
    speed: 500
  };

function Home (){

    const [ modal, setModal ] = useState(false)

    return(
        <div className={classes.homeWrapper}>
            <Header></Header>
            <div className={classes.container}>
                    <div className={classes.topbarPlace}>
                        <Slider {...settings}>
                                {
                                    Toparr.map(item=>(
                                        <Topbar
                                            icon={item.icon}
                                            title={item.title}
                                            modal={modal}
                                            setModal={setModal}
                                            styles={item.style}
                                        />
                                    ))
                                }
                        </Slider>
                        <Modal  modal={modal}/>
                    </div>
                    <div className={classes.singleItem}>
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
            </div>
            <div className={classes.adItem}>
                 <img src={image8} alt=""/>       
                 <img src={image9} alt=""/>       
                 <img src={image10} alt=""/>
                 <img src={image9} alt=""/>       

            </div>

            <div className={classes.container}>
                <div className={classes.singleItem}>
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
            <Footer/>
        </div>
    )
}

export default Home
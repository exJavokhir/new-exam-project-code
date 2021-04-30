import classes from "./main.module.scss"
import footLogo from '../../assets/images/Group 3.svg'
import playmarket from '../../assets/images/android.svg'
import appstore from '../../assets/images/appstore.svg'

function Footer (){
    return(
        <div className={classes.footer}>
            <div className={classes.footerTop}>
                <div className={classes.container}>
                    <div className={classes.footerLogo}>
                        <img src={footLogo} alt=""/>
                        <span className={classes.footSpan}>
                            Продай, найди, купи <br/>
                            все что ты пожелаешь 
                        </span>
                    </div>
                    <div className={classes.footerTitle}>
                        <h3 className={classes.footerTitleh3}>
                            Веб сайт бесплатных обьявлений | на базе <br/>
                            имеется 234 944 999 шт обяления
                        </h3>
                    </div>
                    <div className={classes.footerApps}>
                        <img src={playmarket} alt=""/>
                        <img className={classes.appstore} src={appstore} alt=""/>
                    </div>
                </div>
            </div>
            <div className={classes.footerBottom}>
                <div className={classes.container}>
                    <div className={classes.footerBottomOne}>
                        <ul className={classes.footerUl}>
                        <h4>Автомобили</h4>
                            <li><span className={classes.footerSpan}>Легковые авто</span></li>
                            
                            <li><span className={classes.footerSpan}>Мото</span></li>
                            
                            <li><span className={classes.footerSpan}>Автобусы</span></li>
                            
                            <li><span className={classes.footerSpan}>Грузовые авто</span></li>
                            
                            <li><span className={classes.footerSpan}>Сельхозтехника</span></li>
                            
                            <li><span className={classes.footerSpan}>Запчасти и Аксессуары</span></li>

                            <li><span className={classes.footerSpan}>Прицепы и Спецтехника</span></li>
                            
                            <li><span className={classes.footerSpan}>Водный и Другой транспортa</span></li>
                        </ul>
                        <ul className={classes.footerUlMM}>
                            <h4>Дом и Сад</h4>
                            <li><span className={classes.footerSpan}>Товары для интерьера</span></li>
                            <li><span className={classes.footerSpan}>Товары для сада</span></li>
                            <li><span className={classes.footerSpan}>Растения</span></li>
                            <li><span className={classes.footerSpan}>Продукты питания</span></li>
                            <li><span className={classes.footerSpan}>Посуда и Кухонная утварь</span></li>
                            <li><span className={classes.footerSpan}>Хоз.инвентарь и Бытовая химия</span></li>
                            <li><span className={classes.footerSpan}>Канцтовары и Расходные</span></li>
                            <li><span className={classes.footerSpan}>Прочие товары для дома</span></li>
                        </ul>
                    </div>
                    <div className={classes.footerBottomTwo}>
                        <ul className={classes.footerUl}>
                            <h4>Недвижимость</h4>
                            <li><span className={classes.footerSpan}>Аренда квартир</span></li> 
                            <li><span className={classes.footerSpan}>Аренда домов</span></li>
                            <li><span className={classes.footerSpan}>Аренда гаражей и Стоянок</span></li>
                            <li><span className={classes.footerSpan}>Продажа квартир</span></li>
                            <li><span className={classes.footerSpan}>Продажа домов</span></li>
                            <li><span className={classes.footerSpan}>Продажа земли</span></li>
                            <li><span className={classes.footerSpan}>Продажа гаражей/Стоянок</span></li>
                            <li><span className={classes.footerSpan}>Аренда помещений</span></li>
                            <li><span className={classes.footerSpan}>Продажа помещений</span></li>
                            <li><span className={classes.footerSpan}>Прочая недвижимость</span></li>
                            <li><span className={classes.footerSpan}>Обмен недвижимости</span></li>
                            <li><span className={classes.footerSpan}>Коммерческая недвижимость</span></li>
                        </ul>
                        <ul className={classes.footerUlMM}>
                            <h4>Товары стройки и ремонта</h4>
                            <li className={classes.footerSpan}><span>Двери и окна</span></li>
                            <li className={classes.footerSpan}><span>Сантехника</span></li>
                            <li className={classes.footerSpan}><span>Стройматериалы</span></li>
                            <li className={classes.footerSpan}><span>Инструменты</span></li>
                        </ul>
                    </div>
                    <div className={classes.footerBottomThree}>
                        <ul className={classes.footerUl}>
                            <h4>Электроника</h4>
                            <li><span className={classes.footerSpan}>Телефоны</span></li>
                            <li><span className={classes.footerSpan}>Компьютеры</span></li>
                            <li><span className={classes.footerSpan}>Ноутбуки, планшеты</span></li>
                            <li><span className={classes.footerSpan}>Оргтехника и расходники</span></li>
                            <li><span className={classes.footerSpan}>ТВ,Фото,Видео и Аудио</span></li>
                            <li><span className={classes.footerSpan}>Игры и Приставки</span></li>
                            <li><span className={classes.footerSpan}>Техника для дома и Для себя</span></li>
                            <li><span className={classes.footerSpan}>Климатическое оборудование</span></li>
                            <li><span className={classes.footerSpan}>Аксессуары и Комплектующие</span></li>
                            <li><span className={classes.footerSpan}>Техника для наблюдения</span></li>
                            <li><span className={classes.footerSpan}>Прочая электроника</span></li>
                        </ul>
                        <ul className={classes.footerUlMM}>
                            <h4>Хобби, Отдых и Спорт</h4>
                            <li><span className={classes.footerSpan}>Антиквариат и Коллекции</span></li>
                            <li><span className={classes.footerSpan}>Музыкальные инструменты</span></li>
                            <li><span className={classes.footerSpan}>Велосипеды</span></li>
                            <li><span className={classes.footerSpan}>Товары для спорта и отдыха</span></li>
                            <li><span className={classes.footerSpan}>Книги/Журналы</span></li>
                            <li><span className={classes.footerSpan}>CD/DVD/Пластинки/Кассеты</span></li>
                            <li><span className={classes.footerSpan}>Билеты и путешествия</span></li>
                            <li><span className={classes.footerSpan}>Охота и рыбалка</span></li>
                        </ul>
                    </div>
                    <div className={classes.footerBottomFour}>
                        <ul className={classes.footerUl}>
                        <h4>Личные вещи</h4>
                            <li><span className={classes.footerSpan}>Одежда, обувь, аксессуары</span></li>
                            <li><span className={classes.footerSpan}>Детская одежда и обувь</span></li>
                            <li><span className={classes.footerSpan}>Детские товары и Игрушки</span></li>
                            <li><span className={classes.footerSpan}>Школьникам</span></li>
                            <li><span className={classes.footerSpan}>Часы и украшения</span></li>
                            <li><span className={classes.footerSpan}>Товары для красоты и здоровья</span></li>
                            <li><span className={classes.footerSpan}>Разные вещи</span></li>
                        </ul>

                        <ul className={classes.footerUl}>
                            <h4> Бизнес и услуги</h4>
                            <li><span className={classes.footerSpan}>Сырьё и материалы</span></li>
                            <li><span className={classes.footerSpan}>Оборудование и аренда</span></li>
                            <li><span className={classes.footerSpan}>Производство и обработка</span></li>
                            <li><span className={classes.footerSpan}>Продажа бизнеса и партнерство</span></li>
                            <li><span className={classes.footerSpan}>Финансовые услуги/Бухгалтерия</span></li>
                            <li><span className={classes.footerSpan}>Услуги для красоты и здоровья</span></li>
                            <li><span className={classes.footerSpan}>Услуги курьера и доставки</span></li>
                            <li><span className={classes.footerSpan}>Реклама, Полиграфия и Маркетинг</span></li>
                            <li><span className={classes.footerSpan}>Няни, Сиделки и Домработницы</span></li>
                            <li><span className={classes.footerSpan}>Обучение, курсы и репетиторы</span></li>
                            <li><span className={classes.footerSpan}>Фото, видео, искусство и дизайн</span></li>
                            <li><span className={classes.footerSpan}>Перевод и Набор текста</span></li>
                            <li><span className={classes.footerSpan}>Юридические услуги</span></li>
                            <li><span className={classes.footerSpan}>Прокат товаров</span></li>
                            <li><span className={classes.footerSpan}>Туризм и спорт</span></li>
                            <li><span className={classes.footerSpan}>Праздники и мероприятия</span></li>
                            <li><span className={classes.footerSpan}>Перевозки и Аренда авто</span></li>
                            <li><span className={classes.footerSpan}>Услуги спецтехники</span></li>
                            <li><span className={classes.footerSpan}>Автосервис</span></li>
                            <li><span className={classes.footerSpan}>Услуги такси</span></li>
                            <li><span className={classes.footerSpan}>Химчистка и стирка</span></li>
                            <li><span className={classes.footerSpan}>Пошив одежды и Обуви</span></li>
                            <li><span className={classes.footerSpan}>Ювелирные услуги</span></li>
                            <li><span className={classes.footerSpan}>Питание и доставка еды</span></li>
                            <li><span className={classes.footerSpan}>Уход за животными</span></li>
                            <li><span className={classes.footerSpan}>Другие услуги</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.footerFinish}>
                <div className={classes.container}>
                    <ul>
                        <li><span className={classes.footerSpan}>Подать объявление</span></li>
                        <li><span className={classes.footerSpan}>Объявления</span></li>
                        <li><span className={classes.footerSpan}>Магазины</span></li>
                        <li><span className={classes.footerSpan}>Помощь</span></li>
                        <li><span className={classes.footerSpan}>Безопасность</span></li>
                        <li><span className={classes.footerSpan}>Реклама на сайте</span></li>
                        <li><span className={classes.footerSpan}>О компании</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
                                                                                                            

export default Footer
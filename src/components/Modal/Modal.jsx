import './main.scss'

const Modal = ({modal})=>{
    return(
            <div className={`modal ${modal ? 'active' : ''}`}>
                <ul className="ul-item">
                    <li><span className="span">Телефоны</span></li>
                    <li><span className="span">Компьютеры</span></li>
                    <li><span className="span">Фото / видео</span></li>
                    <li><span className="span">Тв / видеотехника</span></li>
                    <li><span className="span">Аудиотехника</span></li>
                </ul>
                <ul className="ul-item">
                    <li><span className="span">Игры и игровые приставки</span></li>
                    <li><span className="span">Техника для дома</span></li>
                    <li><span className="span">Техника для кухни</span></li>
                    <li><span className="span">Климатическое оборудование</span></li>
                    <li><span className="span">Индивидуальный уход</span></li>
                </ul>
                <ul className="ul-item">
                    <li><span className="span">Аксессуары и комплектующие</span></li>
                    <li><span className="span">Прочая электроника</span></li>
                    <li><span className="span">Телефоны</span></li>
                    <li><span className="span">Компьютеры</span></li>
                    <li><span className="span">Фото / видео</span></li>
                </ul>
                <ul className="ul-item">
                    <li><span className="span">Телефоны</span></li>
                    <li><span className="span">Компьютеры</span></li>
                    <li><span className="span">Фото / видео</span></li>
                    <li><span className="span">Тв / видеотехника</span></li>
                    <li><span className="span">Аудиотехника</span></li>
                </ul>
            </div>
    )
}

export default Modal





















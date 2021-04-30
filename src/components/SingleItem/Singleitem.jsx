import { Link }from 'react-router-dom'
import classes from "./main.module.scss"

const Single = ({image, title, data, price, style})=>{
    return(
        <Link
            to="/product"
            className={classes.itemWrapper}
            style={
                {
                    background:`rgba(${style})`
                }
            }
         >
            <img src={image} alt=""/>
            <h3>{title}</h3>
            <span>{data}</span>
            <h2>{price}</h2>
        </Link>
    )
}

export default Single
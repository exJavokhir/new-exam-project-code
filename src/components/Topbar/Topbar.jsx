import classes from "./main.module.scss"

function Topbar ( {icon,title,modal, setModal,styles} ){

    return(
        <div className={classes.wrapTopbar}>
            <div className={classes.topbar}>
                <button
                    onClick={()=>setModal(!modal)}
                    className={classes.topbarButton}
                    style={
                        {backgroundColor: styles}
                    }   
                >
                    <span className={classes.icons}>{icon}</span>
                    <span className={classes.title}>{title}</span>
                </button>
            </div>
        </div>
    
    )
}

export default Topbar
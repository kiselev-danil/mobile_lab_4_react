
import classes from "./BgElement.module.css"
import elementDraw from '../../assets/element.svg'

const BgElements: React.FC = () => {
    return (
        <div className={classes.elements}>
            <img src={elementDraw}/>
        </div>
    )
}

export default BgElements
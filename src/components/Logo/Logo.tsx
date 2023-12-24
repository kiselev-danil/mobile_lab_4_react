import classes from "./Logo.module.css"
import clsx from "clsx";

const Logo: React.FC = () => {
    return (
        <div className={classes.logo}>
            <div className={classes.accCharcater}>T</div>
            <div className={classes.text}>Health care</div>
        </div>
    )
}

export default Logo
import classes from "./Logo.module.css"

const Logo: React.FC = () => {
    return (
        <div className={classes.logo}>
            <div className={classes.accCharcater}>T</div>
            <div className={classes.text}>Health care</div>
        </div>
    )
}

export default Logo
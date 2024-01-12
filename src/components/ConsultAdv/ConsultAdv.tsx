
import classes from "./ConsultAdv.module.css"
import consultIllustrationSRC from '../../assets/illustration1.svg'

const ConsultAdv: React.FC = () => {
    return (
        <div className={classes.consultAdv}>
            <div className={classes.consultBody}>
                <h2 className={classes.blockLabel}>Virtual healthcare for you</h2>
                <p className={classes.text}>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                <button className={classes.consultButton}>
                    Consult today
                </button>
            </div>
            <div className={classes.consultIllustration}>
                <img src={consultIllustrationSRC} />

            </div>

        </div>
    )
}

export default ConsultAdv
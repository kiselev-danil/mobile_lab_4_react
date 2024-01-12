import classes from "./NavBar.module.css"

const NavBar: React.FC = () => {
    return (
        <ul className={classes.navList}>
            <li className={classes.navListElement}>Home</li>
            <li className={classes.navListElement}>Find a doctor</li>
            <li className={classes.navListElement}>Apps</li>
            <li className={classes.navListElement}>Testimonials</li>
            <li className={classes.navListElement}>About us</li>
        </ul>
    )
}

export default NavBar
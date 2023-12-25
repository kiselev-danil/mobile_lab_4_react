import Logo from "../Logo";
import NavBar from "../NavBar";
import classes from "./AppHeader.module.css"
import clsx from "clsx";

const AppHeader: React.FC = () => {
    return (
        <header className={classes.appHeader}>
            <Logo/>
            <NavBar/>
        </header>
        )
}

export default AppHeader
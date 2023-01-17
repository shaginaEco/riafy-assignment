import { Link } from "react-router-dom";
import classes from './MainNAvigation.module.css'
const MainNavigation=()=>{
    return(<header className={classes.header}>

        <div className={classes.logo}>React bookmarks</div>
        <nav className="">
            <ul>
            <li>
<Link to="/">All bookmarks</Link>
                </li>
               
                <li>
<Link to="/new">New Bookmark</Link>
                </li>
            </ul>
        </nav>
    </header>)
}

export default MainNavigation
import classes  from "./BookmarkItem.module.css";
import Card from '../ui/Card'

const BookmarkItem=(props)=>{
    return(<li className={classes.item}>
        <Card>
        
        <div className={classes.content}>
            <h3>{props.bookmark.title}</h3>
        <a href={props.bookmark.url} className={classes.actions}>{props.bookmark.url}</a>
        <h3>{new Date(props.bookmark.date).toDateString()} </h3>
        </div>
        </Card>
    </li>)
}

export default BookmarkItem
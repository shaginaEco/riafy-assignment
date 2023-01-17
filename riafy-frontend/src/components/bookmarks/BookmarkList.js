
import classes  from "./BookmarkList.module.css";
import BookmarkItem from './BookmarkItem'
const BookmarkList=(props)=>{
    return(<ul className={classes.list}>
{props.bookmarks.map((bookmark)=><BookmarkItem key={bookmark.id} id={bookmark.id}  bookmark={bookmark}/>)}
    </ul>)
}

export default BookmarkList
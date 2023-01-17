import NewBookmarkForm from '../components/bookmarks/NewBookmarkForm'
import { useNavigate } from "react-router-dom";
import { storeBookmarkData } from "../Apis";

const NewBookmark=()=>{
    const navigate=useNavigate()
    const onAddBookmarkHandler=(bookmarkData)=>{
        storeBookmarkData(bookmarkData)
        .then((response) => {
          
             navigate('/')
        })
        .catch((err) => {
          console.log(err);
        });

    }
    return(<section>
        <h1>Add New Bookmark</h1>
        <NewBookmarkForm onAddBookmark={onAddBookmarkHandler}/>
    </section>)
}

export default NewBookmark
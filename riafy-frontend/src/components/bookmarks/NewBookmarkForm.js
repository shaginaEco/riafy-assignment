import classes from "./NewBookmarkForm.module.css";
import Card from "../ui/Card";
import {useRef} from 'react'
const NewBookmarkForm = (props) => {
const titleInputRef=useRef()
const urlInputRef=useRef()
const addressInputRef=useRef()
const descriptionInputRef=useRef()

    const handleSubmit=(e)=>{
e.preventDefault();
const enteredTitle=titleInputRef.current.value
const enteredUrl=urlInputRef.current.value
const bookmarkData={
    title:enteredTitle,
    url:enteredUrl,
   
}

props.onAddBookmark(bookmarkData)
    }
  return(<Card>
    <form action="" className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="title">Bookmark Title</label>
        <input type="text" required id="title" ref={titleInputRef}/>
      </div>
    
      <div className={classes.control}>
        <label htmlFor="url">Bookmark URL</label>
        <input type="url" required id="url" ref={urlInputRef}/>
      </div>
      <div className={classes.actions}>
<button type="submit">Add Bookmark</button></div>
    </form>
  </Card>);
};

export default NewBookmarkForm;

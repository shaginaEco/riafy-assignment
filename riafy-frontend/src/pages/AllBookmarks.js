import BookmarkList from "../components/bookmarks/BookmarkList";
import { useState, useEffect } from "react";

import { getBookmarkData } from "../Apis";
const AllBookmarks = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBookmarks, setLoadedBookmarks] = useState([]);
  useEffect(() => {
    console.log("Fsd");
    getBookmarkData()
      .then((response) => {
        
          //  console.log(response);
        setLoadedBookmarks(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(loadedBookmarks)
    setIsLoading(false);
  }, [loadedBookmarks]);

 
  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }
  return (
    <div>
      
      <BookmarkList  bookmarks={loadedBookmarks}/>
    </div>
  );
};

export default AllBookmarks;

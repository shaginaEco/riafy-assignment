import axios from "axios"
const baseUrl=  "http://localhost:3000/bookmarks";
const getBookmarkData=()=>{
    const headers = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    return axios.get(baseUrl,headers,{withCredentials:true})
}

const storeBookmarkData=(bookmarkData)=>{
    console.log(bookmarkData)
    const headers = {
        headers: {
          "Content-Type": "application/json",
        }
      };
    return axios.post(baseUrl,bookmarkData,headers,{withCredentials:true},
        )
}

export {getBookmarkData,storeBookmarkData}
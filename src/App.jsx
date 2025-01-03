import { useState } from "react"
import Blogs from "./assets/components/Blogs/Blogs"
import Bookmarks from "./assets/components/Bookmarks/Bookmarks"
import Header from "./assets/components/Header/Header"

import PropTypes from "prop-types"


function App() {
  const [bookmarks,setBookmarks]=useState([])

  const handelBookMark= blog =>{
    const newBookMarks=[...bookmarks,blog];
    setBookmarks(newBookMarks);
    // console.log(bookmarks);
  }
 

  return (
    <>
    <div className="w-11/12 mx-auto">
    <Header></Header>  
    <div className="grid grid-cols-5">
      <div className="col-span-5 lg:col-span-4" >
        <Blogs handelBookMark={handelBookMark} ></Blogs>
      </div>
      <div className="col-span-5 lg:col-span-1">
      <Bookmarks bookmarks={bookmarks} ></Bookmarks>
      </div>
    </div>
    </div>
    </>
  )
}

App.propTypes ={
  handelBookMark: PropTypes.func.isRequired

}

export default App

import { useState } from "react"
import Blogs from "./assets/components/Blogs/Blogs"
import Bookmarks from "./assets/components/Bookmarks/Bookmarks"
import Header from "./assets/components/Header/Header"

import PropTypes from "prop-types"


function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readtime,setReadtime]= useState(0)

  const handelBookMark= blog =>{
    const newBookMarks=[...bookmarks,blog];
    setBookmarks(newBookMarks);
    // console.log(bookmarks);
  }

  const handelReadTime=(id,time)=>{
    // alert(time)
    setReadtime(readtime + time)
    // console.log('from HandelTime fun');
    // console.log('mark as read id:-',id);
    const remainningBookmarks = bookmarks.filter(b => b.id !== id);
    setBookmarks(remainningBookmarks)

  }
 

  return (
    <>
    <div className="w-11/12 mx-auto">
    <Header></Header>  
    <div className="grid grid-cols-5">
      <div className="col-span-5 lg:col-span-4" >
        <Blogs handelBookMark={handelBookMark} handelReadTime={handelReadTime}  ></Blogs>
      </div>
      <div className="col-span-5 lg:col-span-1">
      <Bookmarks bookmarks={bookmarks} readtime={readtime} ></Bookmarks>
      </div>
    </div>
    </div>
    </>
  )
}

App.propTypes ={
  handelBookMark: PropTypes.func.isRequired,
  handelReadTime: PropTypes.func.isRequired,
  readtime: PropTypes.number.isRequired

}

export default App

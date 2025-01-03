import { useEffect, useState } from "react"
import Blog from "../Blog/Blog"
import PropTypes from "prop-types"

const Blogs = ({handelBookMark,handelReadTime}) => {
    const [blogs,setBlogs] =useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))

    },[])

  return (
    <>
    <div>Blogs: {blogs.length}</div>
    {
      blogs.map(b =><Blog
      key={b.id}
      blog={b}
      handelBookMark={handelBookMark}
      handelReadTime={handelReadTime}>
      </Blog>)
    }
    </>
  )
}
Blogs.propTypes={
  handelBookMark: PropTypes.func,
  handelReadTime: PropTypes.func,
}

export default Blogs
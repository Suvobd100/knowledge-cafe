import { useEffect, useState } from "react"
import Blog from "../Blog/Blog"

const Blogs = () => {
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
      blog={b}>

      </Blog>)
    }
    </>
    
  )
}

export default Blogs
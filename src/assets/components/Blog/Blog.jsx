import PropTypes from "prop-types"
import bookmarkIcon from "../../images/bookmark-16.png"

const Blog = ({blog,handelBookMark,handelReadTime}) => {
    
    const{id,coverImg,coverTitle,author,authorImg,postDate,
        readingTime,hashtag} = blog;
  return (
    <div className="mb-20">
        <img className="rounded-md" src={coverImg} alt="" />
        <div className="flex justify-between">
        <div className="flex gap-4">
            <img className=" mt-2 w-10 rounded-full" src={authorImg} alt="" />
            <div>
                <p>{author}</p>
                <p>{postDate}</p>
            </div>
        </div>
        <div className="flex items-center">
            <p>
                {readingTime} <span>min read</span>

            </p>
            <img onClick={()=> handelBookMark(blog) } className="w-5 h-5 cursor-pointer" src={bookmarkIcon} alt="" />
        </div>
        </div>
        <h2 className="text-4xl font-bold">{coverTitle}</h2>
        <p>
            {
                hashtag.map((h,idx) =><span key={idx} className="ml-2"><a href="">{h}</a></span>)
            }
        </p>
        <button onClick={()=>{handelReadTime(id,readingTime)}}  className="text-blue-700 underline font-bold"> Mark As Read</button>
    </div>
  )
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelBookMark: PropTypes.func.isRequired,
    handelReadTime: PropTypes.func.isRequired,
}
export default Blog
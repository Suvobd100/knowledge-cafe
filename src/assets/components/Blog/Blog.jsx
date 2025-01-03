import PropTypes from "prop-types"
import bookmarkIcon from "../../images/bookmark-16.png"

const Blog = ({blog}) => {
    
    const{coverImg,coverTitle,author,authorImg,postDate,
        readingTime,hashtag} = blog;
  return (
    <div>Blog
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
            <img className="w-5 h-5" src={bookmarkIcon} alt="" />
        </div>
        </div>
        <h2 className="text-4xl font-bold">{coverTitle}</h2>
    </div>
  )
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog
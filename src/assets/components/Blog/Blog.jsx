import PropTypes from "prop-types"

const Blog = ({blog}) => {
  return (
    <div>Blog</div>
  )
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog
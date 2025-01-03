import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {coverTitle} = bookmark;
    console.log(coverTitle);
  return (
    <div>Bookmark
        <h3>{coverTitle}</h3>
    </div>
  )
}

Bookmark.propTypes={
    bookmark: PropTypes.object.isRequired,
    
}

export default Bookmark
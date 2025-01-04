import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
  console.log(bookmark);
    const {coverTitle,readingTime} = bookmark;
    // console.log(coverTitle);
  return (
    <div className="p-4 rounded-md m-4 bg-slate-200">
        <h3 className="">{coverTitle}</h3>
        <h3 className="text-[10px]">Reading {readingTime} min</h3>
    </div>
  )
}

Bookmark.propTypes={
    bookmark: PropTypes.object.isRequired,

}

export default Bookmark
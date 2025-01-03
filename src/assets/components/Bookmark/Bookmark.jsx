import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {coverTitle} = bookmark;
    console.log(coverTitle);
  return (
    <div className="p-4 rounded-md m-4 bg-slate-200">
        <h3 className="">{coverTitle}</h3>
    </div>
  )
}

Bookmark.propTypes={
    bookmark: PropTypes.object.isRequired,

}

export default Bookmark
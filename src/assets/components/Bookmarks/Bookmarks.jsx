import Bookmark from "../Bookmark/Bookmark"
import PropTypes from "prop-types"

const Bookmarks = ({bookmarks}) => {
    // const {coverTitle} = bookmarks;
  return (
    <div>
        <h2>Bookmarks : {bookmarks.length} </h2>
        {
            bookmarks.map((b,idx) =><Bookmark key={idx} bookmark={b}></Bookmark>)
        }
        

    </div>
  )
}
Bookmarks.propTypes={
    bookmarks: PropTypes.object,
}

export default Bookmarks
import Bookmark from "../Bookmark/Bookmark"
import PropTypes from "prop-types"

const Bookmarks = ({bookmarks,readtime}) => {
    // const {readingTime} = bookmarks;
    console.log(bookmarks);
  return (
    <div >
        <h2 className="bg-slate-400 p-4 m-4 text-lg font-bold text-blue-600 mb-4">Spent time on read: {readtime} min</h2>
        <div className="bg-slate-400 p-4 m-4"> 
        <h2 className=" mt-4 text-base font-bold  text-zinc-600">Bookmarked Bloog : {bookmarks.length} </h2>
        {
            bookmarks.map((b,idx) =><Bookmark  key={idx} bookmark={b}></Bookmark>)
        }
        </div>
        

    </div>
  )
}
Bookmarks.propTypes={
    bookmarks: PropTypes.object.isRequired,
    readtime: PropTypes.object.isRequired,
   
}

export default Bookmarks
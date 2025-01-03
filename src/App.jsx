import Blogs from "./assets/components/Blogs/Blogs"
import Bookmarks from "./assets/components/Bookmarks/Bookmarks"
import Header from "./assets/components/Header/Header"


function App() {
 

  return (
    <>
    <div className="w-11/12 mx-auto">
    <Header></Header>  
    <div className="grid grid-cols-5">
      <div className="col-span-5 lg:col-span-4" >
        <Blogs></Blogs>
      </div>
      <div className="col-span-5 lg:col-span-1">
      <Bookmarks></Bookmarks>
      </div>
    </div>
    </div>
    </>
  )
}

export default App

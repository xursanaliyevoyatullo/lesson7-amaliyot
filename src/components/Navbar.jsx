import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Navbar() {
  const { amount } = useSelector((state) => state.liked)
  return (
    <div>
      <nav className="navbar-tall align-element flex justify-between mt-10">
        <h1 className="font-bold text-2xl cursor-pointer">Unsplash</h1>
        <div className="nav-bar flex gap-5">
          <Link to="/" className="text-xl font-bold cursor-pointer">Home</Link>
          <Link to="/about" className="text-xl font-bold cursor-pointer">About</Link>
          <Link to="/contact" className="text-xl font-bold cursor-pointer">Contact</Link>
          <div className="flex">
            <Link to="/liked" className="block mr-1 text-xl font-bold cursor-pointer">LikedPhotos</Link>
            <span className="badge badge-warning badge-sm text-xl p-2">{amount}</span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
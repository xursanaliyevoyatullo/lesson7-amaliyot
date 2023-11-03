import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="navbar-tall align-element flex justify-between mt-10">
        <h1 className="font-bold text-2xl cursor-pointer">Unsplash</h1>
        <div className="nav-bar flex gap-5">
          <Link to="/" className="text-xl font-bold cursor-pointer">Home</Link>
          <Link to="/about" className="text-xl font-bold cursor-pointer">About</Link>
          <Link to="/contact" className="text-xl font-bold cursor-pointer">Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
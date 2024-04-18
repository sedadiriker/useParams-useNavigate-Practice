import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="bg-red-500">
      <Link className=" text-decoration-none" to="/listeningevent">Listening Event</Link>
    </div>
  )
}

export default Navbar

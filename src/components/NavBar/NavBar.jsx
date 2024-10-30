import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavBar() {
  const [open, setOpen] = useState(false)
  const routes = [
    {id: 1, path: "/", name: "Home" },
    {id: 2, path: "/about", name: "About" },
    {id: 3, path: "/services", name: "Services" },
    {id: 4, path: "/contact", name: "Contact" },
    {id: 5, path: "/profile", name: "Profile" }
   ];
  return (
    <nav className=" bg-orange-600">
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {
          open === true ? <AiOutlineClose /> :  <AiOutlineMenu />
        }
     
      </div>
      <ul className={`md:flex absolute md:static duration-1000
        ${open ? 'top-6' : '-top-96'}
        px-6 shadow-md bg-red-800`}>
      {
        routes.map(route => <Link key={route.id} route={route}></Link>)
      }
      </ul>
    </nav>
  )
}

export default NavBar

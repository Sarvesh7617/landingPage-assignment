import { NavLink } from "react-router-dom";


const Navbar=()=>{
    const navLinks = [
        { label: "Program", to: "/",id:1 },
        { label: "Why Us", to: "/why-us",id:2 },
        { label: "Testimonials", to: "/testimonials",id:3 },
        { label: "Apply", to: "/apply",id:4 },
    ];
  return (
    <nav className="fixed top-0 z-50 w-full flex justify-between items-center px-8 py-4 bg-pink-300 shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">Sammunat LLC</h1>
      <ul className="flex px-4 py-2 gap-2 rounded-lg">
        {navLinks.map((nav)=>(
            <li key={nav.id}>
                <NavLink
                    to={nav.to}
                    className={({isActive})=>`${isActive?"bg-purple-500 p-1.5 rounded-md":"hover:underline underline-offset-4"}`}
                >{nav.label}
                </NavLink>
            </li>
        ))}
      </ul>
    </nav>
  );
}


export default Navbar;
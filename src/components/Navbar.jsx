import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react';
import { useState } from "react";
import ThemeBtn from "./ThemBtn";

const Navbar=()=>{
    const [open,setOpen]=useState(false)
    const navLinks = [
        { label: "Program", to: "/",id:1 },
        { label: "Why Us", to: "/why-us",id:2 },
        { label: "Testimonials", to: "/testimonials",id:3 },
        { label: "Apply", to: "/apply",id:4 }
    ];
  return (
    <nav className="fixed top-0 z-50 w-full px-8 py-4 bg-pink-300 shadow-sm">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">Sammunat LLC</h1>
        <div className="flex items-center gap-4">
            <ThemeBtn />
          <ul className="hidden sm:flex px-4 py-2 gap-2 rounded-lg">
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
          <div className="sm:hidden border-2 rounded-lg">
            <Hamburger size={20} toggled={open} toggle={setOpen}/>
          </div>
        </div>
      </div>
      {open && <ul className="sm:hidden flex flex-col px-4 py-2 gap-2 rounded-lg z-50 fixed right-0 top-20 bg-pink-300">
        {navLinks.map((nav)=>(
            <li key={nav.id}>
                <NavLink
                    to={nav.to}
                    className={({isActive})=>`${isActive?"bg-purple-500 p-1.5 rounded-md":"hover:underline underline-offset-4"}`}
                >{nav.label}
                </NavLink>
            </li>
        ))}
      </ul>}
    </nav>
  );
}


export default Navbar;
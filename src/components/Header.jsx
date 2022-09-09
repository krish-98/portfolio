import React, { useState } from "react"
import Menu from "../assets/menu.svg"
import { motion } from "framer-motion"

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header className="py-6 px-4 bg-purple-500">
      {/* Navbar for Mobile screens*/}
      <nav className="flex justify-between items-center md:hidden">
        <h1 className="text-xl font-semibold tracking-wider text-white uppercase">
          MK
        </h1>

        <div
          onClick={() => setToggle(!toggle)}
          className="p-1 bg-purple-400 rounded-full"
        >
          <img className="w-7 h-7" src={Menu} alt="Hamburger Menu" />
        </div>
        {toggle && (
          <ul
            // onClick={() => setToggle(!toggle)}
            className="fixed top-16 right-0 w-36 bg-purple-400 h-screen"
          >
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        )}
      </nav>

      {/* Navbar for Laptop & Desktop screens */}
      <nav className="hidden md:flex justify-between items-center text-white w-[70%] mx-auto">
        <motion.h1 className="text-3xl font-semibold tracking-wider uppercase cursor-pointer hover:skew-y-6">
          MK
        </motion.h1>

        <motion.ul
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          className="flex gap-6 text-[1.1rem] font-semibold"
        >
          <li className="cursor-pointer tracking-wide hover:text-purple-900 hover:-translate-y-1 transition-all duration-300">
            Home
          </li>
          <li className="cursor-pointer tracking-wide hover:text-purple-900 hover:-translate-y-1 transition-all duration-300">
            About
          </li>
          <li className="cursor-pointer tracking-wide hover:text-purple-900 hover:-translate-y-1 transition-all duration-300">
            Skills
          </li>
          <li className="cursor-pointer tracking-wide hover:text-purple-900 hover:-translate-y-1 transition-all duration-300">
            Projects
          </li>
          <li className="cursor-pointer tracking-wide hover:text-purple-900 hover:-translate-y-1 transition-all duration-300">
            Blogs
          </li>
          <li className="cursor-pointer tracking-wide hover:text-purple-900 hover:-translate-y-1 transition-all duration-300">
            Contact
          </li>
        </motion.ul>
      </nav>
    </header>
  )
}

export default Header

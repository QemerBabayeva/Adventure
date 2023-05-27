import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-black text-white py-3 px-20 z-[9999999] '>
        <Link to="/" >LOGO</Link>
        <div className='flex gap-7'>
            <Link to="/" >Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/products">Products</Link>
            <button className='w-20 border-white border-solid border-2'>Sign Up</button>
        </div>

    </div>
  )
}

export default Navbar;
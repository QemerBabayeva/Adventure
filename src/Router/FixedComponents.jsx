import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from '../Components/homepage/Navbar';

const FixedComponents = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>

    </div>
  )
}

export default FixedComponents;
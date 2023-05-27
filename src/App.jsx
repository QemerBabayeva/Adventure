import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import ProductsPage from './Pages/ProductsPage'
import ServicePage from './Pages/ServicePage'
import FixedComponents from './Router/FixedComponents';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FixedComponents/>}>
          <Route index={true} path="/" element={<HomePage/>}/>
          <Route path="/service" element={<ServicePage/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
        </Route>
      </Routes>
     
    </div>
  )
}

export default App;
